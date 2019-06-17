lexer grammar RegularLexer;

options {
    language=JavaScript;
}

HTML_COMMENT
    : '<!--' .*? '-->'
    ;

REGULAR_COMMENT
    : '{!' .*? '!}'
    ;

SEA_WS
    :  (' '|'\t'|'\r'? '\n')+
    ;

TAG_OPEN
    : '<' -> pushMode(TAG)
    ;

REGULAR_EXPRESS_OPEN
    : '{' -> pushMode(REGULAR)
    ;

REGULAR_EXPRESS_CLOSE
    : '}'
    ;

HTML_TEXT
    : ~[<{]+
    ;

// tag declarations
mode TAG;

TAG_CLOSE
    : '>' -> popMode
    ;

TAG_SLASH_CLOSE
    : '/>' -> popMode
    ;

TAG_SLASH
    : '/'
    ;

//
// lexing mode for attribute values
//
TAG_EQUALS
    : '=' -> pushMode(ATTVALUE)
    ;

TAG_NAME
    : TAG_NameStartChar TAG_NameChar*
    ;

TAG_WHITESPACE
    : [ \t\r\n] -> skip
    ;

fragment
HEXDIGIT
    : [a-fA-F0-9]
    ;

fragment
DIGIT
    : [0-9]
    ;

fragment
TAG_NameChar
    : TAG_NameStartChar
    | '-'
    | '_'
    | '.'
    | DIGIT
    |   '\u00B7'
    |   '\u0300'..'\u036F'
    |   '\u203F'..'\u2040'
    ;

fragment
TAG_NameStartChar
    :   [:a-zA-Z]
    |   '\u2070'..'\u218F'
    |   '\u2C00'..'\u2FEF'
    |   '\u3001'..'\uD7FF'
    |   '\uF900'..'\uFDCF'
    |   '\uFDF0'..'\uFFFD'
    ;

// attribute values
mode ATTVALUE;

ATTVALUE_VALUE
    : [ ]* ATTRIBUTE -> popMode
    ;

ATTRIBUTE
    : DOUBLE_QUOTE_STRING
    | SINGLE_QUOTE_STRING
    | ATTCHARS
    | HEXCHARS
    | DECCHARS
    ;

fragment ATTCHAR
    : '-'
    | '_'
    | '.'
    | '/'
    | '+'
    | ','
    | '?'
    | '='
    | ':'
    | ';'
    | '#'
    | [0-9a-zA-Z]
    ;

fragment ATTCHARS
    : ATTCHAR+ ' '?
    ;

fragment HEXCHARS
    : '#' [0-9a-fA-F]+
    ;

fragment DECCHARS
    : [0-9]+ '%'?
    ;

fragment DOUBLE_QUOTE_STRING
    : '"' ~[<"]* '"'
    ;
fragment SINGLE_QUOTE_STRING
    : '\'' ~[<']* '\''
    ;

// regular rule
mode REGULAR;

REGULAR_RULE_START_OPEN
    : '#'
    ;

REGULAR_RULE_END_OPEN
    : '/'
    ;

REGULAR_RULE_NAME
    : ('if'|'elseif'|'else'|'list'|'inc' 'lude'?)
    ;

REGULAR_LIST_AS
    : 'as'
    ;

REGULAR_LIST_VAR_NAME
    : REGULAR_LIST_VarNameStart REGULAR_LIST_VarNameChar*
    ;

fragment REGULAR_LIST_VarNameStart
    : [a-zA-Z]
    ;

fragment REGULAR_LIST_VarNameChar
    : [0-9a-zA-Z]
    ;
