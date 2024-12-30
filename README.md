# eslint-config

Shared [ESLint config](https://eslint.org/docs/developer-guide/shareable-configs) for my projects.

Do note that since version `v0.2.0`, this is built for eslint flat configs.

## Install

```bash
npm install --save-dev @v-ed/eslint-config
```

```bash
pnpm install -D @v-ed/eslint-config
```

## Usage

### Simple

`eslint.config.mjs`

```ts
import vedConfigs from '@v-ed/eslint-config';

/** @type { import('eslint').Linter.Config[] } */
export default [...vedConfigs];
```

### With overrides

`eslint.config.mjs`

```ts
import vedConfigs from '@v-ed/eslint-config';

/** @type { import('eslint').Linter.Config[] } */
export default [
  {
    ignores: ['**/.vercel/', '**/.svelte-kit/', '**/tailwind.config.cjs'],
  },
  ...vedConfigs,
  {
    files: ['**/schemas/**/*.ts', '**/schemas.ts'],
    rules: {
      camelcase: [
        'error',
        {
          allow: ['required_error'],
        },
      ],
    },
  },
];
```

> [!TIP]
> do note how the ignores list goes above the shared configs for them to be applied to all the configs
