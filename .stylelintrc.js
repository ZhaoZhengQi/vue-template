// @see https://stylelint.bootcss.com/

module.exports = {
	// 注册 stylelint 的 prettier 插件
	// plugins: ['stylelint-prettier'],
	// 继承一系列规则集合
	extends: [
		"stylelint-config-standard", // 配置stylelint拓展插件
		"stylelint-config-html/vue", // 配置 vue 中 template 样式格式化
		"stylelint-config-standard-less", // 配置stylelint less插件
		"stylelint-config-recommended-vue/scss", // 配置 vue 中 scss 样式格式化
		"stylelint-config-recess-order" // 配置stylelint css属性书写顺序插件,
	],
	overrides: [
		{
			files: ["**/*.(less|css|vue|html|scss)"],
			customSyntax: "postcss-less"
		},
		{
			files: ["**/*.(html|vue)"],
			customSyntax: "postcss-html"
		}
	],
	ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.json", "**/*.md", "**/*.yaml"],
	/**
	 * null  => 关闭该规则
	 * always => 必须
	 */
	// 配置 rules 规则
	rules: {
		"value-keyword-case": null, // 在 css 中使用 v-bind，不报错
		"no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		"function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
		"no-empty-source": null, // 关闭禁止空源码
		"selector-class-pattern": null, // 关闭强制选择器类名的格式
		"property-no-unknown": null, // 禁止未知的属性(true 为不允许)
		// 'block-opening-brace-space-before': 'always', // 要求在块的开大括号之前必须有一个空格或不能有空白符
		"value-no-vendor-prefix": null, // 关闭 属性值前缀 --webkit-box
		"property-no-vendor-prefix": null, // 关闭 属性前缀 -webkit-mask
		"scss/dollar-variable-pattern": null, // 关闭强制变量名格式
		"selector-pseudo-class-no-unknown": [
			// 不允许未知的选择器
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"] // 忽略属性，修改element默认样式的时候能使用到
			}
		],
		"font-family-no-missing-generic-family-keyword": null, // 不检测字体风格
		"block-no-empty": null, //允许分行块级样式
		"selector-id-pattern": new RegExp(), //不校验id选择器命名规则
		"no-duplicate-selectors": null //不校验重复选择器
	}
}
