// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/aeb7701fbef3b7fc7261d67c025c823666ab98ea/empower/empower.d.ts
declare function empower(originalAssert:any, formatter:any, options?:empower.Options):any;

declare module empower {
    export interface Options {
        destructive?: boolean;
        modifyMessageOnRethrow?: boolean;
        saveContextOnRethrow?: boolean;
        patterns?: string[];
    }
}

declare module "empower" {
    export = empower;
}