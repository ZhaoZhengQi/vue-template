// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    // 'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json',
    // 为了保证格式化后代码都以prettier为准，把项配置放到数组最后
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: [2, 'single'], // 要求尽可能地使用单引号
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/prefer-default-export': 'off',
    'no-redeclare': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off', // 在定义变量之前禁止使用变量
    'func-names': 'off', // 需要或禁止命名 function 表达式
    'prefer-rest-params': 'off', // 需要剩余参数而不是 arguments
    'prefer-promise-reject-errors': 'off', // 要求使用 Error 对象作为 Promise 拒绝的原因
    'class-methods-use-this': 'off', // 强制类方法使用 this
    'import/export': 'off', // 禁止使用一些指定的通过 import 加载的指定的模块
    'prefer-template': 'off', // 需要模板文本而不是字符串串联
    'prefer-regex-literals': 'off', // 要求在正则表达式中使用 u标志
    radix: 'off', // 强制在parseInt()使用基数参数
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    'no-undef': 'error', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    camelcase: 'off', // 允许下划线使用
    'no-new': 'off', // 允许new使用
    'no-continue': 'off', // 允许使用if语句中的continue
    'no-bitwise': 'off', // 允许使用特殊运算符
    'prefer-destructuring': ['error', { object: false, array: false }], // 不检测数组和对象解构
  },
}
