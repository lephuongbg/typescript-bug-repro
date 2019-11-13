### TypeScript Bug Reproduction Repository

See **index.js** for specific line that triggered following bug:

```
$ ./node_modules/.bin/tsc --noEmit --watch
/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:78566
                throw e;
                ^

TypeError: Cannot read property 'length' of undefined
    at Object.find (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:207:35)
    at getDeclarationWithTypeAnnotation (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:31333:31)
    at isTypeRepresentableAsFunctionNamespaceMerge (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:31275:26)
    at serializeMaybeAliasAssignment (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:31251:29)
    at serializeVariableOrProperty (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:31059:25)
    at serializeSymbolWorker (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:30927:25)
    at serializeSymbol (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:30894:38)
    at /tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:30875:25
    at Map.forEach (<anonymous>)
    at visitSymbolTable (/tmp/typescript-bug-repro/node_modules/typescript/lib/tsc.js:30874:33)
```