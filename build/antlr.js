const path = require('path');
const childProcess = require('child_process');

const cwd = path.resolve(__dirname, '../src/regular');

module.exports = function() {
    const antlr4 = 'java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -o ./lib';
    return childProcess.execSync(`${antlr4} ./RegularLexer.g4 ./RegularParser.g4`, {
        cwd,
        stdio: 'inherit'
    });
}
