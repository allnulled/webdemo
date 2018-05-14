const chokidar = require("chokidar");
const javadoc = require("javadoc");
const exec = require("execute-command-sync");
const path = require("path");
const root = path.resolve(__dirname + "/..");

/*
 *
 *
 *
 */
chokidar.watch([
	path.resolve(root, "docs/README.ini.md"),
	path.resolve(root, "docs/README.end.md"),
	path.resolve(root, "src/**/*.js")
]).on('all', (event, path) => {
	exec("npm run docs", {
		cwd: root
	});
});