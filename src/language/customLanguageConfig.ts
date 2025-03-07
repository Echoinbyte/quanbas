import { languages } from "monaco-editor";

export const languageId = "qb";

// All QBasic keywords and built-in functions.
export const Keywords = [
  "ABS",
  "ABSOLUTE",
  "ACCESS",
  "ALIAS",
  "AND",
  "AS",
  "ASC",
  "ATN",
  "BASE",
  "BEEP",
  "BINARY",
  "BLOAD",
  "BSAVE",
  "CALL",
  "CALLS",
  "CASE",
  "CDBL",
  "CDECL",
  "CHAIN",
  "CHDIR",
  "CHR$",
  "CINT",
  "CIRCLE",
  "CLEAR",
  "CLNG",
  "CLOSE",
  "CLS",
  "COLOR",
  "COM",
  "COMMAND$",
  "COMMON",
  "CONST",
  "COS",
  "CSNG",
  "CSRLIN",
  "CVD",
  "CVDMBF",
  "CVI",
  "CVL",
  "CVS",
  "CVSMBF",
  "DATA",
  "DATE$",
  "DECLARE",
  "DEF",
  "DEFDBL",
  "DEFINT",
  "DEFLNG",
  "DEFSNG",
  "DEFSTR",
  "DIM",
  "DO",
  "DOUBLE",
  "DRAW",
  "ELSE",
  "ELSEIF",
  "END",
  "ENVIRON$",
  "EOF",
  "ERASE",
  "ERDEV",
  "ERDEV$",
  "ERL",
  "ERR",
  "ERROR",
  "EXIT",
  "EXP",
  "FIELD",
  "FILEATTR",
  "FILES",
  "FIX",
  "FN",
  "FOR",
  "FRE",
  "FREEFILE",
  "FUNCTION",
  "GET",
  "GOSUB",
  "GOTO",
  "HEX$",
  "IF",
  "INKEY$",
  "INP",
  "INPUT",
  "INPUT$",
  "INSTR",
  "INT",
  "INT86OLD",
  "INT86XOLD",
  "INTEGER",
  "INTERRUPT",
  "INTERRUPTX",
  "IOCTL",
  "IOCTL$",
  "IS",
  "KEY",
  "KILL",
  "LBOUND",
  "LCASE$",
  "LEFT$",
  "LEN",
  "LET",
  "LINE",
  "LOC",
  "LOCATE",
  "LOCK",
  "LOF",
  "LOG",
  "LONG",
  "LOOP",
  "LPOS",
  "LPRINT",
  "LSET",
  "LTRIM$",
  "MID$",
  "MKD$",
  "MKDIR",
  "MKDMBF$",
  "MKI$",
  "MKL$",
  "MKS$",
  "MKSMBF$",
  "MOD",
  "NAME",
  "NEXT",
  "NOT",
  "OCT$",
  "OFF",
  "ON",
  "OPEN",
  "OPTION",
  "OR",
  "OUT",
  "OUTPUT",
  "PAINT",
  "PALETTE",
  "PCOPY",
  "PEEK",
  "PEN",
  "PLAY",
  "PMAP",
  "POINT",
  "POKE",
  "POS",
  "PRESET",
  "PRINT",
  "PSET",
  "PUT",
  "RANDOM",
  "RANDOMIZE",
  "READ",
  "REDIM",
  "RESET",
  "RESTORE",
  "RESUME",
  "RETURN",
  "RIGHT$",
  "RMDIR",
  "RND",
  "RSET",
  "RTRIM$",
  "RUN",
  "SADD",
  "SCREEN",
  "SEEK",
  "SEG",
  "SELECT",
  "SETMEM",
  "SGN",
  "SHARED",
  "SHELL",
  "SIN",
  "SINGLE",
  "SLEEP",
  "SOUND",
  "SPACE$",
  "SPC",
  "SQR",
  "STATIC",
  "STEP",
  "STICK",
  "STOP",
  "STR$",
  "STRIG",
  "STRING",
  "STRING$",
  "SUB",
  "SWAP",
  "SYSTEM",
  "TAB",
  "TAN",
  "THEN",
  "TIME$",
  "TIMER",
  "TO",
  "TROFF",
  "TRON",
  "TYPE",
  "UBOUND",
  "UCASE$",
  "UEVENT",
  "UNLOCK",
  "UNTIL",
  "USING",
  "VAL",
  "VARPTR",
  "VARPTR$",
  "VARSEG",
  "VIEW",
  "WAIT",
  "WEND",
  "WHILE",
  "WIDTH",
  "WINDOW",
  "WRITE",
];

export const languageExtensionPoint: languages.ILanguageExtensionPoint = {
  id: languageId,
  extensions: [".bas"],
  aliases: ["QBasic", "QodeNestASIC", "qb"],
};

export const languageConfiguration: languages.LanguageConfiguration = {
  comments: {
    lineComment: "'",
  },
  brackets: [
    ["[", "]"],
    ["(", ")"],
    ["def", "end def"],
    ["function", "end function"],
    ["if", "end if"],
    ["select", "end select"],
    ["sub", "end sub"],
    ["type", "end type"],
  ],
  autoClosingPairs: [
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: '"', close: '"', notIn: ["string", "comment"] },
  ],
};

export const languageType: languages.IMonarchLanguage = {
  ignoreCase: true,
  brackets: [
    { token: "delimiter.array", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },

    { token: "keyword.tag-def", open: "def", close: "end def" },
    { token: "keyword.tag-function", open: "function", close: "end function" },
    { token: "keyword.tag-if", open: "if", close: "end if" },
    { token: "keyword.tag-select", open: "select", close: "end select" },
    { token: "keyword.tag-sub", open: "sub", close: "end sub" },
    { token: "keyword.tag-type", open: "type", close: "end type" },

    { token: "keyword.tag-do", open: "do", close: "loop" },
    { token: "keyword.tag-for", open: "for", close: "next" },
  ],
  keywords: Object.values(Keywords),
  tagwords: [
    "def",
    "function",
    "if",
    "select",
    "sub",
    "do",
    "loop",
    "for",
    "next",
  ],
  tokenizer: {
    root: [
      { include: "@whitespace" },

      // End tags
      [/next(?!\w)/, { token: "keyword.tag-for" }],
      [/loop(?!\w)/, { token: "keyword.tag-do" }],
      [
        /end\s+(?!for|do)(def|function|if|select|sub|type)/,
        { token: "keyword.tag-$1" },
      ],

      // Identifiers, tagwords, and keywords
      [
        /[a-zA-Z_][a-zA-Z0-9_]*[\$%#&!]?/,
        {
          cases: {
            "@tagwords": { token: "keyword.tag-$0" },
            "@keywords": { token: "keyword.$0" },
            "@default": "identifier",
          },
        },
      ],

      // Numeric constants
      [/\d+[de]([-+]?\d+)?[#!]?/, "number.float"],
      [/\d*\.\d+([de][-+]?\d+)?[#!]?/, "number.float"],
      [/\d+[#!]/, "number.float"],
      [/&h[0-9a-f]+&?/, "number.hex"],
      [/&o?[0-7]+&?/, "number.octal"],
      [/\d+&?/, "number"],

      // Symbols
      [/[()\[\]]/, "@brackets"],
      [/[=><!;\.,:&|+\-*\/\^%\\]+/, "delimiter"],

      // Strings
      [/"/, { token: "string.quote", next: "@string" }],
    ],

    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/(\'|REM(?!\w)).*$/, "comment"],
    ],

    string: [
      [/[^"]+/, "string"],
      [/"/, { token: "string.quote", next: "@pop" }],
    ],
  },
};

export function setupLanguage() {
  languages.register(languageExtensionPoint);
  languages.onLanguage(languageId, () => {
    languages.setLanguageConfiguration(languageId, languageConfiguration);
    languages.setMonarchTokensProvider(languageId, languageType);
  });
}
