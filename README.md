# Simple Express Boilerplate for TypeScript API

This is just a simple Express boilerplate setup with the following:

- TypeScript
- Express
  - Cors middleware
  - dotenv for loading environment variables (will no longer need after Node 20.6.0)
- Jest for testing
- ESLint for linting
- Nodemon with ts-node for file reload during development

To use this clone the repo and remove the git files in order to make it yours

```
git clone
cd
rm -rf .git
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

```json
// package.json
{
  "scripts": {
    "dev": "nodemon src/index.ts"
  }
}
```

5. Create a file `tsconfig.json` in root directory and copy from my tsconfig or run `tsc --init` to use the default configuration. If using the default configuration make sure to uncomment `outDir` and set it to `./dist` in the `compilerOptions`

```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

```json
// package.json
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

```json
// package.json
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

```json
// package.json
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

8. Optionally create a .prettierrc file in the root directory and populate it with whatever configurations you would want
