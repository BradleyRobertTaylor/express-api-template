# Minimal Express Boilerplate for TypeScript API

This is just my minimal Express boilerplate setup with the following:

- [Express](https://www.pnpmjs.com/package/express) is an unopinionated web framework for Node.js
- [TypeScript](https://www.pnpmjs.com/package/typescript) is a typed programming language that builds on JavaScript, giving better tooling at any scale
- [Dotenv](https://www.pnpmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [CORS](https://www.pnpmjs.com/package/cors) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [ts-node](https://www.pnpmjs.com/package/ts-node) is a execution and REPL for node.js, with source map and native ESM support
- [Nodemon](https://www.pnpmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
- [ESLint](https://www.pnpmjs.com/package/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [TypeScriptESLint](https://typescript-eslint.io/) enables ESLint to support TypeScript
- [Jest](https://www.pnpmjs.com/package/jest) is a JavaScript Testing Framework with a focus on simplicity
- [Supertest](https://www.pnpmjs.com/package/supertest) is a SuperAgent driven library for testing HTTP servers
- [Zod](https://zod.dev/) is a TypeScript first schema validation library with static type inference

## Setup

To use this clone the repo and remove the git files in order to make it yours

```
git clone https://github.com/BradleyRobertTaylor/express-api-template.git
cd express-api-template
rm -rf .git
```

### Install Dependencies

```
pnpm install
```

### Lint

```
pnpm run lint
```

### Test

```
pnpm run test
```

### Development

```
pnpm run dev
```

### Compile

```
pnpm run build
```

### Run Compiled Code

```
pnpm start
```

## How to get this configuration from scratch

1. Create a new folder and run the following command to create a package.json and accept all defaults

```
npm init -y
```

2. Install TypeScript

```
pnpm i -D typescript
```

3. Install Express, Cors, and dotenv with their types

```
pnpm i express cors dotenv
pnpm i -D @types/express @types/cors
```

4. Install Nodemon and Ts-node for reloading during development and set up a script in package.json

```
pnpm i -D nodemon ts-node
```

package.json

```json
{
  "scripts": {
    "dev": "nodemon src/server.ts"
  }
}
```

5. Create a file `tsconfig.json` in root directory and copy from my tsconfig or run `tsc --init` to use the default configuration. If using the default configuration make sure to uncomment `outDir` and set it to `./dist` in the `compilerOptions`

tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

package.json

```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc"
  }
}
```

6. Install ts-jest and it's dependencies and then set up a jest config file with the following commands

```
pnpm i -D jest ts-jest @types/jest
npx ts-jest config:init
```

package.json

```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "test": "jest"
  }
}
```

7. Install ESLint and it's dependencies by running the following command

```
pnpm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
```

- Create an `.eslintrc.cjs` file in the root directory and populate it with the following

```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
};
```

package.json

```json
{
  "scripts": {
    "start": "node dist/src/server.js",
    "dev": "nodemon src/server.ts",
    "lint": "eslint . --ext .ts",
    "build": "tsc",
    "test": "jest"
  }
}
```
