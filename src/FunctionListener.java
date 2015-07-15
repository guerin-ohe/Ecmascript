
import org.antlr.v4.runtime.tree.TerminalNode;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author olivier
 */
public class FunctionListener extends ECMAScriptBaseListener {
    
    Graph graph = new Graph();
    String currentFunctionName = null;
    
    public void enterFunctionDeclaraction(ECMAScriptParser.FunctionDeclarationContext ctx) {
        currentFunctionName = ctx.Identifier().getText();
        graph.nodes.add(currentFunctionName);
    }
    
    @Override
    public void enterFunctionExpression(ECMAScriptParser.FunctionExpressionContext ctx) {
        TerminalNode id = ctx.Identifier(); // tester si null car fonction anonyme
        currentFunctionName = id.getText();
        graph.nodes.add(currentFunctionName);
    }
    
    @Override
    public void exitArgumentsExpression(ECMAScriptParser.ArgumentsExpressionContext ctx) {
        //String funcName = ctx.singleExpression().getText(); // ArgumentsExpression = singleExpression arguments
        ECMAScriptParser.IdentifierExpressionContext idCtx = (ECMAScriptParser.IdentifierExpressionContext) ctx.singleExpression();
        String funcName = idCtx.Identifier().getText();
        // map current function to the callee
        graph.edge(currentFunctionName, funcName);
    }
}
