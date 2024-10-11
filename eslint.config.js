// eslint.config.js
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
// import stylistic from "@stylistic/eslint-plugin";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "public"],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs["flat/recommended"],

  // stylistic.configs.customize({
  //   indent: 2,
  //   quotes: "single",
  //   semi: false,
  //   jsx: true,
  //   braceStyle: "1tbs",
  //   arrowParens: "always",
  // }),

  /**
   * javascript 规则
   */
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: "latest",
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      "vue/no-mutating-props": [
        "error",
        {
          shallowOnly: true,
        },
      ],
      "vue/multi-word-component-names": "off", // 关闭组件命名规则
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 允许使用 any
      "@typescript-eslint/no-unused-vars": "off", // 定义了但是没有使用
    },
  },

  /**
   * prettier 配置
   * 会合并根目录下的.prettier.config.js 文件
   * @see https://prettier.io/docs/en/options
   */
  eslintPluginPrettierRecommended,
);
