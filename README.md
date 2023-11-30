# Minimal Express Boilerplate for TypeScript API

This is just my minimal Express boilerplate setup with the following:

- [express](https://www.npmjs.com/package/express)
  - Express is an unopinionated web framework for Node.js
- [typescript](https://www.npmjs.com/package/typescript)
  - TypeScript is a typed programming language that builds on JavaScript, giving better tooling at any scale
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution and REPL for node.js, with source map and native ESM support
- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [typescript-eslint](https://typescript-eslint.io/)
  - Tooling which enables ESLint to support TypeScript
- [jest](https://www.npmjs.com/package/jest)
  - Jest is a JavaScript Testing Framework with a focus on simplicity
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent

## Setup

To use this clone the repo and remove the git files in order to make it yours

```
git clone https://github.com/BradleyRobertTaylor/express-api-template.git
cd express-api-template
rm -rf .git
```

### Install Dependencies

```
npm install
```

### Lint

```
npm run lint
```

### Test

```
npm run test
```

### Development

```
npm run dev
```

### Build to dist folder

```
npm run build
```

### Run built JavaScript

```
npm start
```

## How to get this configuration from scratch

1. Create a new folder and run the following command to create a package.json and accept all defaults

```
npm init -y
```

2. Install TypeScript

```
npm i -D typescript
```

3. Install Express, Cors, and dotenv with their types

```
npm i express cors dotenv
npm i -D @types/express @types/cors
```

4. Install Nodemon and Ts-node for reloading during development and set up a script in package.json

```
npm i -D nodemon ts-node
```

package.json

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts"
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
    "dev": "nodemon src/index.ts",
    "build": "tsc"
  }
}
```

6. Install ts-jest and it's dependencies and then set up a jest config file with the following commands

```
npm i -D jest ts-jest @types/jest
npx ts-jest config:init
```

package.json

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "test": "jest"
  }
}
```

7. Install ESLint and it's dependencies by running the following command

```
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
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
    "start": "node dist/src/index.js",
    "dev": "nodemon src/index.ts",
    "lint": "eslint . --ext .ts",
    "build": "tsc",
    "test": "jest"
  }
}
```
