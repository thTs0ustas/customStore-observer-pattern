module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-typescript/base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json',
	},
	plugins: ['import'],
	rules: {
		indent: ['off'],
		'react/react-in-jsx-scope': 'off',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/indent': ['off', 2],
		'react/prop-types': 'off',
		'import/extensions': 'off',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
};
