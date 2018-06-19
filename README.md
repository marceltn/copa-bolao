# copa bolao
Bolão da copa mundial de futebol

```
yarn
yarn serve
```


## Faced issues:

```
> node build.js

## Built ~\copa-bolao\node_modules\nodent-runtime/dist/index.js

> grpc@1.11.3 install ~\copa-bolao\node_modules\grpc
> node-pre-gyp install --fallback-to-build --library=static_library

module.js:549
    throw err;
    ^

Error: Cannot find module '~\copa-bolao\node_modules\node-pre-gyp\bin\node-pre-gyp'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! grpc@1.11.3 install: `node-pre-gyp install --fallback-to-build --library=static_library`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the grpc@1.11.3 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\marcelt\AppData\Roaming\npm-cache\_logs\2018-06-15T17_52_29_225Z-debug.log
```
```
npm install vuefire@next firebase --save --force
npm install -g node-pre-gyp@0.10.0
```
