/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//package ecmascript;

import java.io.FileInputStream;
import java.io.IOException;
import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;

/**
 *
 * @author olivier
 */
public class Ecmascript {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        if (args.length == 1) {
            try {
                // parsing
                // create file input stream
                FileInputStream source = new FileInputStream(args[0]);
                // create a CharStream that reads from standard input
                ANTLRInputStream input = new ANTLRInputStream(source);
                // create a lexer that feeds off of input CharStream
                ECMAScriptLexer lexer = new ECMAScriptLexer(input);
                // create a buffer of tokens pulled from the lexer
                CommonTokenStream tokens = new CommonTokenStream(lexer);
                // create a parser that feeds off the tokens buffer
                ECMAScriptParser parser = new ECMAScriptParser(tokens);
                ParseTree tree = parser.program(); // begin parsing at init rule
                
                // dump ast
                System.out.println("AST is : " + tree.toStringTree(parser)); // print LISP-style tree
                
                // build call graph
                ParseTreeWalker walker = new ParseTreeWalker();
                FunctionListener collector = new FunctionListener();
                walker.walk(collector, tree);
                System.out.println(collector.graph.toString());
                System.out.println(collector.graph.toDOT());
                
                } catch (IOException e) {
                System.out.print("error: " + e.getMessage());
            }
        }
        else {
            System.out.print("error: syntax is Cymbol <file path> !");
        }
    }
    
}
