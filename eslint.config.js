import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['**/@types/', '**/build/', '**/dist/', '**/gulpfile.ts', '**/stylelint.config.js', '**/_generated/', '**/@generated/'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 6,
		},
		rules: {
			camelcase: 'error',
			quotes: ['error', 'single', { allowTemplateLiterals: true }],
			semi: 'off',
			indent: 'off',
			// indent: ['error', 'tab', { VariableDeclarator: { var: 2, let: 2, const: 3 }, SwitchCase: 1 }],
			'no-tabs': 'off',
			// 'no-tabs': ['error', { allowIndentationTabs: true }],
			'no-trailing-spaces': ['error', { skipBlankLines: true }],
			'array-bracket-newline': ['error', { multiline: true }],
			'implicit-arrow-linebreak': ['error', 'beside'],
			'no-whitespace-before-property': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'no-confusing-arrow': 'error',
			'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
			'eol-last': ['error', 'always'],
			'no-lonely-if': 'error',
			'no-underscore-dangle': 'error',
			'semi-style': ['error', 'last'],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
				{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
				{ blankLine: 'always', prev: 'directive', next: '*' },
				{ blankLine: 'any', prev: 'directive', next: 'directive' },
			],
			'no-unused-vars': 'off',
			'keyword-spacing': ['error', { before: true, overrides: { this: { before: false } } }],
			'space-before-blocks': 'error',
			'arrow-spacing': 'error',
			'space-infix-ops': ['error', { int32Hint: false }],
			'no-empty-function': 'off',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-empty-function': ['error', { allow: ['private-constructors'] }],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-magic-numbers': [
				'warn',
				{
					ignoreArrayIndexes: true,
					ignoreTypeIndexes: true,
					ignoreEnums: true,
					ignoreReadonlyClassProperties: true,
					ignore: [-1, 0, 1, 1000, 60, 24],
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
			// "@typescript-eslint/no-explicit-any": "off",
		},
	},
	// overrides
	{
		files: ['**/*.{e2e-spec,spec,test}.ts', '**/{tests,prisma}/**/*.ts'],
		rules: {
			'@typescript-eslint/no-magic-numbers': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['*.{js,cjs}'],
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-magic-numbers': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},
	{
		files: ['vite.config.ts'],
		rules: {
			camelcase: 'off',
		},
	},
);
