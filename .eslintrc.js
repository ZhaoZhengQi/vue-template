// eslint.config.js
import { flatESLint } from "@eslint/js"
import vue from "eslint-plugin-vue"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import prettierPlugin from "eslint-plugin-prettier"
import importPlugin from "eslint-plugin-import"

export default [
	// 基础的 ESLint 推荐配置
	flatESLint.recommended,

	// Vue 3 推荐配置
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: "vue-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		plugins: {
			vue,
			"@typescript-eslint": typescriptEslint,
			prettier: prettierPlugin,
			import: importPlugin
		},
		rules: {
			// 继承的规则
			...flatESLint.recommended.rules,
			// 你的自定义规则
			"no-unused-vars": "warn",
			"import/order": ["error", { "newlines-between": "always" }]
			// 其他规则...
		}
	},

	// TypeScript 推荐配置
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: "@typescript-eslint/parser",
			ecmaVersion: "latest",
			sourceType: "module"
		},
		plugins: {
			"@typescript-eslint": typescriptEslint,
			prettier: prettierPlugin,
			import: importPlugin
		},
		rules: {
			// TypeScript 相关规则
			"@typescript-eslint/no-unused-vars": "warn",
			"import/order": ["error", { "newlines-between": "always" }]
			// 其他规则...
		}
	},

	// Prettier 推荐配置
	{
		files: ["**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}"],
		plugins: {
			prettier: prettierPlugin
		},
		rules: {
			"prettier/prettier": "error"
		}
	}
]
