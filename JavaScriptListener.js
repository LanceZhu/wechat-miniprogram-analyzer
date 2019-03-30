const antlr4 = require('antlr4/index');
const JavaScriptLexer = require('./lib/JavaScriptLexer');
const JavaScriptParser = require('./lib/JavaScriptParser');
var JavaScriptParserListener = require('./lib/JavaScriptParserListener').JavaScriptParserListener;

JavaScriptListener = function(res){
    this.Res = res;
    JavaScriptParserListener.call(this); // inherit default listener
    return this;
}

// inherit default listener
JavaScriptListener.prototype = Object.create(JavaScriptParserListener.prototype);
JavaScriptListener.prototype.constructor = JavaScriptListener;

// override default listener behavior
// Enter a parse tree produced by JavaScriptParser#program.
JavaScriptListener.prototype.enterProgram = function(ctx) {
    console.log(ctx.getChildCount())
};

// Exit a parse tree produced by JavaScriptParser#program.
JavaScriptListener.prototype.exitProgram = function(ctx) {
};

exports.JavaScriptListener = JavaScriptListener;