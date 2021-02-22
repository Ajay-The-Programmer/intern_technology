declare module TestString {

    export interface StringsFunc {
        isString(str: string): boolean;
        convertToUpperCase(str: string): string;
        convertToLowerCase(str: string): string;
        convertToStringBold(str: string): string;
    }
}

declare let StringChecks:TestString.StringsFunc;