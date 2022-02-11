# eslint-config

Shared [ESLint config](https://eslint.org/docs/developer-guide/shareable-configs) for my projects.

## Install

```bash
npm install --save-dev @v-ed/eslint-config
```

## Usage

`.eslintrc.json`

```jsonc
{
  "extends": ["@v-ed/eslint-config"], // or ["@v-ed"]
  "overrides": {
    ...
  }
}
```

OR

`package.json`

```jsonc
{
  "eslintConfig": {
    "extends": ["@v-ed/eslint-config"]
    "overrides": {
      ...
    }
  },
}
```
