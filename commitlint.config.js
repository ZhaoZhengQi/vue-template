// 这里是通俗的解释 详情请前往官方文档查阅
module.exports = {
  // ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // // 信息以空格开头
    // "body-leading-blank": [2, "always"],
    // "footer-leading-blank": [2, "always"],
    // // 信息最大长度
    // "header-max-length": [2, "always", 108],
    // // 信息不能未空
    // "subject-empty": [2, "never"],
    // // 信息类型不能未空
    // "type-empty": [2, "never"],

    // 提交信息的类型 下文有介绍
    "type-enum": [
      2,
      "always",
      [
        "init", // 初始化项目
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "docs", // 文档（documentation）
        "style", // 格式（不影响代码运行的变动）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "perf", // 优化相关，比如提升性能、体验
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回滚
        "build", // 打包
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
