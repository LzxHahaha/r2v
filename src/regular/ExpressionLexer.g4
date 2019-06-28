lexer grammar ExpressionLexer;

mode RGL_EXPR;

RGL_EXPR_CLOSE
    : '}' -> popMode
    ;

RGL_EXPR_OBJ_OPEN
    : '{' -> pushMode(RGL_EXPR_OBJ)
    ;

RGL_EXPR_RULE_START
    : '#'
    ;

RGL_EXPR_RULE_END
    : '/'
    ;

RGL_EXPR_RULE_IF
    : 'if'
    ;
RGL_EXPR_RULE_ELSEIF
    : 'elseif'
    ;
RGL_EXPR_RULE_ELSE
    : 'else'
    ;
RGL_EXPR_RULE_INC
    : 'inc' 'lude'?
    ;
RGL_EXPR_RULE_LIST
    : 'list'
    ;

mode RGL_EXPR_OBJ;

RGL_EXPR_NESTED_OBJ_OPEN
    : '{' -> pushMode(RGL_EXPR_OBJ)
    ;

RGL_EXPR_OBJ_CLOSE
    : '}' -> popMode
    ;
