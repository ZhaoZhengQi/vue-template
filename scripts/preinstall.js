// Jenkins使用的是npm，所以这里需要判断一下 如果是Jenkins就不报错 待完善
// if (process.env.JENKINS_HOME) {
//   process.exit(0)
// }
// 这里是为了防止使用npm安装依赖，因为npm安装依赖会导致依赖的版本不一致
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33m这个仓库必须使用pnpm作为包管理器才能正常运行脚本。 ' +
      '\n请使用 npm install -g pnpm 进行安装pnpm包管理器。 \u001b[39m\n' +
      '\u001b[33m了解更多访问 https://pnpm.io/zh/ \u001b[39m\n',
  )
  process.exit(1)
}
