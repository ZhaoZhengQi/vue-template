console.log(process.env.npm_execpath, "process.env.npm_execpath");

if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    "\u001b[33m这个仓库必须使用pnpm作为包管理器才能正常运行脚本。 " +
      "\n请使用 npm install -g pnpm 进行安装pnpm包管理器。 \u001b[39m\n" +
      "\u001b[33m了解更多访问 https://pnpm.io/zh/ \u001b[39m\n",
  );
  process.exit(1);
}
