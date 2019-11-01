export class TokensIterator {
    private intToken: string = null;
    private currentPosition = 0;
    private separator = [' '];
    private text: string;

    constructor() { }

    static create(): TokensIterator {
        return new TokensIterator();
    }

    setSeparator(separators: string[]): TokensIterator {
        this.separator = separators;
        return this;
    }


    get token(): string {
        return this.intToken;
    }

    reset(): void {
        this.currentPosition = 0;
    }

    next(): string {
        let token = '';

        while (this.currentPosition < this.text.length
            && (this.separator.indexOf(this.text[this.currentPosition]) >= 0)
        ) {
            this.currentPosition++;
        }

        const firstPosition = this.currentPosition;
        const firstChar = this.text[this.currentPosition];

        if (this.separator.indexOf(firstChar) >= 0) {
            throw Error(`Incorrect whitespace at ${this.currentPosition} column`);
        }

        const isString = firstChar === '"';
        const isJsonObject = firstChar === '{';
        const isJsonArray = firstChar === '[';

        let ch = '';
        let internalBrackets = 0;
        let jsonObjectBrakets = 0; // isJsonObject ? 1 : 0;
        let jsonArrayBrakets = 0; // isJsonArray ? 1 : 0;

        let internalString = false;

        while (this.currentPosition < this.text.length) {
            ch = this.text[this.currentPosition];

            if (!internalString && ch === '(') { internalBrackets++; }
            if (!internalString && ch === ')') { internalBrackets--; }

            // switch on or off internal string
            if (ch === '"') { internalString = !internalString; }

            if (isJsonObject) {

                if (!internalString && ch === '{') { jsonObjectBrakets++; }
                if (!internalString && ch === '}') { jsonObjectBrakets--; }

                if (jsonObjectBrakets === 0) {
                    token += ch;
                    this.currentPosition++;
                    break;
                }
            } else if (isJsonArray) {

                if (!internalString && ch === '[') {
                    jsonArrayBrakets++;
                }
                if (!internalString && ch === ']') {
                    jsonArrayBrakets--;
                }

                if (jsonArrayBrakets === 0) {
                    token += ch;
                    this.currentPosition++;
                    break;
                }
            } else if (isString) {

                if (ch === '"'
                    && this.currentPosition + 1 < this.text.length
                    && this.text[this.currentPosition + 1] === '"') {
                    token += ch;
                    this.currentPosition++;
                } else if (ch === '"' && this.currentPosition !== firstPosition) {
                    token += ch;
                    this.currentPosition++;
                    break;
                }
            } else {
                if (internalBrackets === 0 && this.separator.indexOf(ch) >= 0 && token.length) {
                    break;
                }
            }

            token += ch;
            this.currentPosition++;
        }

        this.intToken = token;
        return token.length ? token : null;
    }

    splitAll(text: string, breakFn = null): string[] {
        breakFn = typeof breakFn === 'function' ? breakFn : t => false;
        this.text = text;
        const all = [];
        this.reset();
        while (this.next()) {
            if (breakFn(this.token)) {
                break;
            }
            all.push(this.token);
        }
        return all;
    }
}
