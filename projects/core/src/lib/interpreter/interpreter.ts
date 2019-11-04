import { Tokenizer, CodeLine } from './tokenizer';
import * as json5 from 'json5';
import { promise } from 'protractor';

interface BlockContext {
    index: number;
    returnCalled: boolean;
    returnObject: any;
}

const INDENT_SIZE = 2;

type AnyFunc = (...args) => void | any | Promise<any>;

export class Interpreter {
    private readonly ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '==': (a, b) => a === b,
        '!=': (a, b) => a !== b,
        '<>': (a, b) => a !== b,
        '>': (a, b) => a > b,
        '<': (a, b) => a < b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
    };

    private readonly funcs = {
        dateTime: (d: number | string = null) => d ? new Date(d) : new Date(),
        print: (...args) => { console.log(...args); return args.length > 0 ? args[0] : null; },
        isNull: (v: any, defValue: any = null): boolean | any => defValue === null ? v === null : v || defValue
    };

    private readonly globalVars = {
        math: Math
    };

    private vars = {};

    private entryFunctionName: string = null;

    static create(): Interpreter {
        return new Interpreter();
    }

    private isValue(token: string): boolean {
        const lowerToken = token.toLowerCase();
        return (token[0] === '"' && token[token.length - 1] === '"')
            || lowerToken === 'true' || lowerToken === 'false'
            || lowerToken === 'null'
            || !isNaN(parseFloat(token))
            || (token[0] === '[' && token[token.length - 1] === ']')
            || (token[0] === '{' && token[token.length - 1] === '}');
    }

    private isFunctionCall(token: string): boolean {
        return token[token.length - 1] === ')';
    }

    private resolveValue(token: string): any {
        const lowerToken = token.toLowerCase();
        if (token[0] === '"' && token[token.length - 1] === '"') {
            return token.substring(1, token.length - 1);
        } else if ((token[0] === '[' && token[token.length - 1] === ']') || (token[0] === '{' && token[token.length - 1] === '}')) {
            return json5.parse(token);
        } else if (lowerToken === 'true' || lowerToken === 'false') {
            return lowerToken === 'true';
        } else if (lowerToken === 'null') {
            return null;
        } else {
            const num = Number(token);
            if (isNaN(num)) { throw Error(`Can't resolve a number value token '${token}' `); }
            return num;
        }
    }

    private resolveVariable(token: string, parentObject: any = null): any {

        function getValue(obj: any, propName: string): any {

            if (propName[propName.length - 1] !== ']') {
                const value = obj[propName];

                if (value === undefined) {
                    throw Error(`Undefined property '${propName}'`);
                }

                return value;
            } else {
                const openInd = propName.indexOf('[');
                if (openInd <= 0) {
                    throw Error(`Missing '[' for ${propName}`);
                }

                // ToDo: resolve two dimentional arrays
                // ToDo: allow indexes notations e.g. t["myprop"]

                obj = obj[propName.substring(0, openInd)]; // array
                const arrIndex = parseInt(propName.substring(openInd + 1, propName.indexOf(']', openInd)), 10);
                return obj[arrIndex];
            }

        }

        return parentObject ? getValue(parentObject, token) : getValue(this.vars, token);
    }

    private async resolveToken(token: string, parentObject: any = null): Promise<any> {
        const num = parseFloat(token);
        if (!isNaN(num)) {
            return num;
        }

        const tokenParts = Tokenizer.splitAll(token, ['.']);

        let result: any = null;
        if (tokenParts.length === 1) {
            if (this.isValue(token)) {
                result = this.resolveValue(token);
            } else if (this.isFunctionCall(token)) {
                result = await this.evalFunction(token, parentObject);
            } else {
                result = this.resolveVariable(token, parentObject);
            }

        } else {
            result = await this.resolveToken(tokenParts[0]);
            for (let i = 1; i < tokenParts.length; i++) {
                const subToken = tokenParts[i];
                result = await this.resolveToken(subToken, result);
            }
        }

        return result;
    }

    private findFunction(name: string, parentObject: any = null): AnyFunc {
        if (name.indexOf('.') < 0) {
            if (!parentObject) {
                const fn = this.funcs[name] || this.vars[name];
                if (typeof fn !== 'function') {
                    throw Error(`Token '${name}' is not a valid function (1)`);
                }
                return fn; // all functions should be here and no 'bind' required
            } else {
                const f = parentObject[name];
                if (typeof f !== 'function') {
                    throw Error(`Token '${name}' is not a valid function (2)`);
                }
                return f.bind(parentObject);
            }
        }

        const lastDot = name.lastIndexOf('.');
        const callingObject = this.resolveVariable(name.substring(0, lastDot), parentObject);
        const funcName = name.substring(lastDot + 1);
        const func = callingObject[funcName];

        if (typeof func !== 'function') {
            throw Error(`Token '${name}' is not a valid function (3)`);
        }

        return func.bind(callingObject);
    }

    private async invokeFunction(func: AnyFunc, fps: any[]): Promise<any> {
        if (fps.length === 0) { return func(); }
        if (fps.length === 1) { return func(fps[0]); }
        if (fps.length === 2) { return func(fps[0], fps[1]); }
        if (fps.length === 3) { return func(fps[0], fps[1], fps[2]); }
        if (fps.length === 4) {
            return func(fps[0], fps[1], fps[2], fps[3]);
        }
        if (fps.length === 5) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4]);
        }
        if (fps.length === 6) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5]);
        }
        if (fps.length === 7) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6]);
        }
        if (fps.length === 8) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7]);
        }
        if (fps.length === 9) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7], fps[8]);
        }
        if (fps.length === 10) {
            return func(fps[0], fps[1], fps[2], fps[3], fps[4], fps[5], fps[6], fps[7], fps[8], fps[9]);
        }

        if (fps.length > 10) {
            throw Error('Function has too many parameters');
        }
    }

    private async evalFunction(token: string, parentObject: any = null): Promise<any> {
        const pStart = token.indexOf('(');
        const pEnd = token.lastIndexOf(')');
        if (pStart < 0 || pEnd < 0) {
            throw Error(`Token '${token}' is not a valid function. (4)`);
        }

        const funcName = token.substring(0, pStart);
        const paramsStr = token.substring(pStart + 1, pEnd);
        const funcParamTokens = (paramsStr) ? Tokenizer.splitAll(paramsStr, [',']) : [];

        const fps = [];
        for (const paramToken of funcParamTokens) {
            fps.push(await this.evalInstruction(paramToken));
        }

        const func = this.findFunction(funcName, parentObject);
        if (!func || typeof func !== 'function') {
            throw Error(`Unknown function ${funcName}`);
        }

        return this.invokeFunction(func, fps);
    }

    private async evalExpression(tokens: string[]): Promise<any> {
        let ind = 0;
        let result: any;
        while (ind < tokens.length) {
            const value = await this.resolveToken(tokens[ind]);
            if (ind === 0) {
                result = value;
            } else {
                const opFn = this.ops[tokens[ind - 1]]; // next to value we always have operation
                if (opFn && typeof opFn === 'function') {
                    const res = opFn(result, value);
                    result = res;
                } else {
                    throw Error(`Unknown operation '${tokens[ind - 1]}'`);
                }
            }
            ind += 2;
        }
        return result;
    }

    private setVarValue(targetPath: string, value: any): void {
        const pathParts = targetPath.split('.');

        let obj = this.vars;
        for (let i = 0; i < pathParts.length - 1; i++) {
            // create new object if missing
            if (Object.keys(obj).indexOf(pathParts[i]) < 0) {
                obj[pathParts[i]] = {};
            }
            obj = obj[pathParts[i]];
        }

        obj[pathParts[pathParts.length - 1]] = value;
    }

    private async evalInstruction(instruction: string): Promise<any> {
        instruction = (instruction.indexOf('#') < 0) ? instruction.trim() : instruction.substring(0, instruction.indexOf('#')).trim();
        const tokens = Tokenizer.splitAll(instruction);

        if (!tokens || !tokens.length) { return null; }
        if (tokens.length === 2) {
            throw Error(`Incorrect expression ${tokens.join(' ')}`);
        }

        if (tokens.length > 2 && tokens[1] === '=') {
            // assignment
            const expValue = await this.evalExpression(tokens.slice(2));
            this.setVarValue(tokens[0], expValue);
        } else {
            // expression
            return await this.evalExpression(tokens);
        }
    }

    private isIfStatement(instruction: string): boolean {
        return instruction.trim().startsWith('if ') && instruction[instruction.length - 1] === ':';
    }

    private getLineIndent(line: string): number {
        let cc = 0;
        while (line[cc] === ' ') { cc++; }
        return cc;
    }

    private async runBlock(instuctionLines: CodeLine[], blockIndent: number = 0, ignoreLine = false, context: BlockContext)
        : Promise<any> {
        let lastResult = null;


        while (context.index < instuctionLines.length) {
            if (context.returnCalled) {
                return context.returnObject;
            }

            const instruction = instuctionLines[context.index++].line;

            // ignore empty lines and comment lines
            if (instruction.trim() === ''
                || instruction.trim()[0] === '#') {
                continue;
            }

            if (this.getLineIndent(instruction) < blockIndent) {
                context.index--; // needs to be reevaluated
                return; // return block value here, if relevant;
            }

            if (ignoreLine) {
                continue;
            }

            if (this.isIfStatement(instruction)) {
                const ifCondition = await this.evalInstruction(instruction.replace('if ', '').replace(':', ''));
                blockIndent += INDENT_SIZE;
                await this.runBlock(instuctionLines, blockIndent, !ifCondition, context);
                blockIndent -= INDENT_SIZE;
            } else if (instruction.trim().startsWith('return')) {
                context.returnCalled = true;
                const returnInstruction = instruction.replace('return', '').trim();
                if (returnInstruction.length) {
                    lastResult = context.returnObject = await this.evalInstruction(returnInstruction);
                }
            } else {
                lastResult = await this.evalInstruction(instruction);
            }
        }

        return lastResult;
    }

    addFunction(funcName: string, fn: AnyFunc): Interpreter {
        this.funcs[funcName] = fn;
        return this;
    }

    assignGlobalContext(obj: object): Interpreter {
        Object.assign(this.globalVars, obj);
        return this;
    }

    async evaluate(script: string, context: object = null, entryFunctionName: string = null): Promise<any> {
        // replace all tabs with 2 spaces
        script = script.replace(new RegExp('\t', 'g'), '  ');

        this.entryFunctionName = entryFunctionName;
        this.vars = (context && typeof context === 'object') ?
            { ...this.globalVars, ...context } : { ...this.globalVars };

        const linesContext = { index: 0, returnCalled: false } as BlockContext;
        const instuctionLines = Tokenizer.splitCodeLines(script);

        try {
            if (!this.entryFunctionName || !this.entryFunctionName.length) {
                return await this.runBlock(instuctionLines, 0, false, linesContext);
            } else {
                linesContext.index = instuctionLines
                    .findIndex(i => i.line.startsWith(`def ${this.entryFunctionName}(`) && i.line[i.line.length - 1] === ':');

                if (linesContext.index >= 0) {
                    linesContext.index++;
                    return await this.runBlock(instuctionLines, INDENT_SIZE, false, linesContext);
                } else { return null; }
            }
        } catch (error) {
            const cl = instuctionLines[linesContext.index - 1];
            let ln = String(cl.start);
            if (cl.start !== cl.end) {
                ln += `:${cl.end}`;
            }
            throw Error(`Line (${ln}): ${error}`);
        }

    }
}
