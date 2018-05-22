# CI/CD test repo

[![npm version](https://badge.fury.io/js/%40gitm8%2Fci-test.svg)](https://badge.fury.io/js/%40gitm8%2Fci-test)
[![npm](https://img.shields.io/npm/l/%40gitm8%2Fci-test.svg)](./LICENSE)

Testing CI/CD for npm packages

## install and setup

```
npm i -g commitizen
npm i -D cz-conventional-changelog semantic-release
```

Update package.json to include
```
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```
## expected interface
The application/library/package MUST expose the following commands:

Command|Description
---|---
`npm test`|all tests (including linting and dependency checks) go here
`npm run build`|triggering a build (MUST exist and exit with 0)


## environment variables
CI has to set the following environment variables:

env|usecase|where to get
---|---|---
`GH_TOKEN`|push tags and updated files to GitHub|[GitHub personal API token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) (set `repo` scope)
`NPM_TOKEN`|publish package to NPM registry|[NPM API token](https://docs.npmjs.com/getting-started/working_with_tokens#how-to-create-new-tokens)

## ToDo
* [ ] add code coverage
* [ ] add dependency check
* [ ] add linting
