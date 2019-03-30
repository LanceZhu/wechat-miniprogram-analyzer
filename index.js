const antlr4 = require('antlr4/index');
const JavaScriptLexer = require('./lib/JavaScriptLexer');
const JavaScriptParser = require('./lib/JavaScriptParser');
const JavaScriptListener = require('./JavaScriptListener').JavaScriptListener;
const JavaScriptParserListener = require('./lib/JavaScriptParserListener').JavaScriptParserListener;

var res = "";

var input = "console.log(\"test\")";
var chars = new antlr4.InputStream(input)
var lexer = new JavaScriptLexer.JavaScriptLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new JavaScriptParser.JavaScriptParser(tokens);
parser.buildParserTrees = true;
var tree = parser.program();
// console.log('tree',tree);
// var listener = new JavaScriptParserListener(res);
var listener = new JavaScriptListener(res);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log('res',res);