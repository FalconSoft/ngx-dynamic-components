
export interface CodeLine {
    line: string;
    start: number;
    end: number;
}

export class Tokenizer {

    static splitCodeLines(text: string): CodeLine[] {
        const lines = [];

        let startLineNum = 1;
        let endLineNum = 1;
        this.splitAll(text, ['\n'], (newToken) => {
            endLineNum = endLineNum + newToken.split('\n').length - 1;

            if (newToken.length) {
                lines.push({
                    line: newToken,
                    start: startLineNum,
                    end: endLineNum
                });
            }
            endLineNum++;
            startLineNum = endLineNum;
        });
        return lines;
    }

    static splitAll(text: string, separators: string[] = [' '], tokenCreatedCallback: (token: string) => void = null): string[] {
        const result = [];
        const stringChar = '"';
        let index = 0;
        let token = '';

        function nextChar(): string {
            return text[index++];
        }
        function appendToken(chr: string): void {
            token += chr;
        }

        function completeToken(): void {
            if (tokenCreatedCallback && typeof tokenCreatedCallback === 'function') {
                tokenCreatedCallback(token);
            }
            if (token.length) {
                result.push(token);
                token = '';
            }
        }

        function iterateString(chr: string): void {
            do {
                appendToken(chr);
                chr = nextChar();

                if (chr === stringChar) {
                    break;
                }
            }
            while (index < text.length);
            appendToken(chr);
        }

        function iterateBlock(chr: string, openBlock: string, closeBlock: string): void {
            let cc = 1;
            do {
                appendToken(chr);
                chr = nextChar();

                if (chr === stringChar) {
                    iterateString(chr);
                    chr = nextChar();
                }

                if (chr === closeBlock) { cc--; }
                if (chr === openBlock) { cc++; }

                if (cc === 0) { break; }

            } while (index < text.length);

            appendToken(chr);
        }

        while (index < text.length) {
            const chr = nextChar();

            // iterate through a string
            if (chr === stringChar) {
                iterateString(chr);
                continue;
            }

            if (chr === '(') {
                iterateBlock(chr, '(', ')');
                continue;
            }
            if (chr === '{') {
                iterateBlock(chr, '{', '}');
                continue;
            }
            if (chr === '[') {
                iterateBlock(chr, '[', ']');
                continue;
            }

            if (separators.indexOf(chr) < 0) {
                appendToken(chr);
            } else {
                completeToken();
            }
        }

        // last token
        if (token.length) {
            completeToken();
        }

        return result;
    }

}
