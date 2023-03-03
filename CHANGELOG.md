# @ctx-core/dir

## 8.1.8

### Patch Changes

- @ctx-core/env: ^17.2.22 -> ^17.2.23

## 8.1.7

### Patch Changes

- @ctx-core/env: ^17.2.20 -> ^17.2.21
- Updated dependencies
  - @ctx-core/env@17.2.22

## 8.1.6

### Patch Changes

- @ctx-core/env: ^17.2.18 -> ^17.2.19
- Updated dependencies
  - @ctx-core/env@17.2.20

## 8.1.5

### Patch Changes

- dependencies: fix: @ctx-core/env

## 8.1.4

### Patch Changes

- import*meta_env*() instead of process.env
- Updated dependencies
  - @ctx-core/env@17.2.18

## 8.1.3

### Patch Changes

- tsconfig.json: - importsNotUsedAsValues

## 8.1.2

### Patch Changes

- tsx: ^3.8.2 -> ^3.9.0

## 8.1.1

### Patch Changes

- fix: chdir export

## 8.1.0

### Minor Changes

feat: chdir

- .js + .d.ts instead of .ts

  fix: TMP_DIR

## 8.0.39

### Patch Changes

- package.json: exports: update

## 8.0.38

### Patch Changes

- sideEffects = false

## 8.0.37

### Patch Changes

- @swc/core: ^1.2.125 -> ^1.2.127

## 8.0.36

### Patch Changes

- version bump

## 8.0.35

### Patch Changes

- .js + .d.ts instead of .ts

## 8.0.34

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts

## 8.0.33

### Patch Changes

- tsconfig.json: "target": "ES2021"

## 8.0.32

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience

## 8.0.31

### Patch Changes

- fix: build

## 8.0.30

### Patch Changes

- \*.d.ts export

## 8.0.29

### Patch Changes

- fix: tsconfig.json: "rootDir": "."

## 8.0.28

### Patch Changes

- fix: package.json: exports

## 8.0.27

### Patch Changes

- package.json: svelte: ./dist/index.js

## 8.0.26

### Patch Changes

- package.json: - module

## 8.0.25

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 8.0.24

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 8.0.23

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 8.0.22

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 8.0.21

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 8.0.20

### Patch Changes

- @swc/core: ^1.2.110 -> ^1.2.111

## 8.0.19

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 8.0.18

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 8.0.17

### Patch Changes

- compile using swc

## 8.0.16

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4

## 8.0.15

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 8.0.14

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 8.0.13

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 8.0.12

### Patch Changes

- exports: + "package.json": "./package.json"

## 8.0.11

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 8.0.10

### Patch Changes

- tsconfig.json: "target": "es2019"

## 8.0.9

### Patch Changes

- fix: cjs: load as a Promise

## 8.0.8

### Patch Changes

- "main": "./dist/index.cjs"

## 8.0.7

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 8.0.6

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 8.0.5

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 8.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 8.0.3

### Patch Changes

- support cjs & esm: + "exports"

## 8.0.2

### Patch Changes

- fix: "type": "module"

## 8.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 8.0.0

### Major Changes

- "type": "module": module npm type

## 7.0.10

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 7.0.9

### Patch Changes

- dist directory

## 7.0.8

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 7.0.7

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 7.0.6

### Patch Changes

- fix: deploying \*.js files

## 7.0.5

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 7.0.4

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 7.0.3

### Patch Changes

- fix: npm run clean

## 7.0.2

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 7.0.1

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 7.0.0

### Major Changes

- move from dist to src directory

## 6.3.3

### Patch Changes

- version bump: run build

## 6.3.2

### Patch Changes

- fix: build: clean up old build files in dist

## 6.3.1

### Patch Changes

- update dependencies

## 6.3.0

### Minor Changes

- fix tsc build directory issues

## 6.2.1

### Patch Changes

- .gitignore: - \*.js

## 6.2.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 6.1.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 6.1.2

### Patch Changes

- .npmignore: + ~

## 6.1.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 6.1.0

### Minor Changes

- "noImplicitAny": true

## 6.0.10

### Patch Changes

- update dependencies

## 6.0.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 6.0.8

### Patch Changes

- version bump

## 6.0.7

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 6.0.6

### Patch Changes

- fix: npm run compile: tsc -b .

## 6.0.5

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 6.0.4

### Patch Changes

- version bump

## 6.0.3

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 6.0.2

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 6.0.1

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 6.0.0

### Major Changes

- src directory

## 5.0.58

### Patch Changes

- remove @ctx-core/env dependency

## 5.0.57

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.3.0

## 5.0.56

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.1.22

## 5.0.55

### Patch Changes

- @ctx-core/env@9.1.21

## 5.0.54

### Patch Changes

- @ctx-core/env@9.1.20

## 5.0.53

### Patch Changes

- @ctx-core/env@9.1.19

## 5.0.52

### Patch Changes

- @ctx-core/env@9.1.18

## 5.0.51

### Patch Changes

- @ctx-core/env@9.1.17

## 5.0.50

### Patch Changes

- @ctx-core/env@9.1.16

## 5.0.49

### Patch Changes

- @ctx-core/env@9.1.15

## 5.0.48

### Patch Changes

- @ctx-core/env@9.1.14

## 5.0.47

### Patch Changes

- - .rush
- Updated dependencies [undefined]
  - @ctx-core/env@9.1.13

## 5.0.46

### Patch Changes

- @ctx-core/env@9.1.12

## 5.0.45

### Patch Changes

- @ctx-core/env@9.1.11

## 5.0.44

### Patch Changes

- @ctx-core/env@9.1.10

## 5.0.43

### Patch Changes

- @ctx-core/env@9.1.9

## 5.0.42

### Patch Changes

- @ctx-core/env@9.1.8

## 5.0.41

### Patch Changes

- @ctx-core/env@9.1.7

## 5.0.40

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.1.6

## 5.0.39

### Patch Changes

- @ctx-core/env@9.1.5

## 5.0.38

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3
- Updated dependencies [undefined]
  - @ctx-core/env@9.1.4

## 5.0.37

### Patch Changes

- @ctx-core/env@9.1.3

## 5.0.36

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.1.2

## 5.0.35

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.1.1

## 5.0.34

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/env@9.1.0

## 5.0.33

### Patch Changes

- @ctx-core/env@9.0.34

## 5.0.32

### Patch Changes

- @ctx-core/env@9.0.33

## 5.0.31

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.32

## 5.0.30

### Patch Changes

- @ctx-core/env@9.0.30

## 5.0.29

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2
- Updated dependencies [undefined]
  - @ctx-core/env@9.0.29

## 5.0.28

### Patch Changes

- @ctx-core/env@9.0.28

## 5.0.27

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.27

## 5.0.26

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.26

## 5.0.25

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5
- Updated dependencies [undefined]
  - @ctx-core/env@9.0.25

## 5.0.24

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.24

## 5.0.23

### Patch Changes

- @ctx-core/env@9.0.23

## 5.0.22

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.22

## 5.0.21

### Patch Changes

- @ctx-core/env@9.0.21

## 5.0.20

### Patch Changes

- @ctx-core/env@9.0.20

## 5.0.19

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.19

## 5.0.18

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.18

## 5.0.17

### Patch Changes

- @ctx-core/env@9.0.17

## 5.0.16

### Patch Changes

- @ctx-core/env@9.0.16

## 5.0.15

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.15

## 5.0.14

### Patch Changes

- @ctx-core/env@9.0.14

## 5.0.13

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.13

## 5.0.12

### Patch Changes

- @ctx-core/env@9.0.12

## 5.0.11

### Patch Changes

- @ctx-core/env@9.0.11

## 5.0.10

### Patch Changes

- @ctx-core/env@9.0.10

## 5.0.9

### Patch Changes

- @ctx-core/env@9.0.9

## 5.0.8

### Patch Changes

- @ctx-core/env@9.0.8

## 5.0.7

### Patch Changes

- @ctx-core/env@9.0.7

## 5.0.6

### Patch Changes

- @ctx-core/env@9.0.6

## 5.0.5

### Patch Changes

- @ctx-core/env@9.0.5

## 5.0.4

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.4

## 5.0.3

### Patch Changes

- @ctx-core/env@9.0.3

## 5.0.2

### Patch Changes

- @ctx-core/env@9.0.2

## 5.0.1

### Patch Changes

- fix: install issues: using explicit workspace: versioning
- Updated dependencies [undefined]
  - @ctx-core/env@9.0.1

## 5.0.0

### Major Changes

- Typescript strict checking

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/env@9.0.0

## 4.1.99

### Patch Changes

- fix: npm run compile: path to tsc
- Updated dependencies [undefined]
  - @ctx-core/env@8.4.1

## 4.1.98

### Patch Changes

- typescript updates
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/env@8.4.0
