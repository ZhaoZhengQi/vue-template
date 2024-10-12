// eslint-disable-next-line @typescript-eslint/no-require-imports
const viewGenerator = require("./plop-templates/prompt.js")

module.exports = (plop) => {
	plop.setGenerator("view", viewGenerator)
}
