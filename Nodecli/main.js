const program = require("commander");
const fs = require("fs");
const md2html = require('./md2html');


program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, {encoding: "utf-8"}, (err, file) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
        return;
    }
    const html = md2html(file, program.opts());
    console.log(html);
});
