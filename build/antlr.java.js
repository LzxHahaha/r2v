const path = require('path');
const childProcess = require('child_process');

const cwd = path.resolve(__dirname, '../src/regular');
const libCwd = path.resolve(cwd, './javalib');

const antlr4 = 'java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -o ./javalib';
childProcess.execSync(`${antlr4} ./RegularLexer.g4 ./RegularParser.g4 && cd ./javalib && javac -g *.java`, {
    cwd,
    stdio: 'inherit'
});

const grun = 'java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig';
childProcess.execSync(`javac -g *.java && ${grun} Regular htmlElements -gui ../../../resources/test.html`, {
    cwd: libCwd,
    stdio: 'inherit'
});
