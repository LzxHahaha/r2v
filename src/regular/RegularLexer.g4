lexer grammar RegularLexer;

HTML_COMMENT: '<!--' .*? '-->';

RGL_COMMENT: '{!' .*? '!}';

SEA_WS:  (' '|'\t'|'\r'? '\n')+;

TAG_OPEN: '<' -> pushMode(TAG);

RGL_EXPR_OPEN: '{' -> pushMode(RGL_EXPR);

HTML_TEXT: ~[<{]+;

mode TAG;

TAG_CLOSE: '>' -> popMode;

TAG_SLASH_CLOSE: '/>' -> popMode;

TAG_SLASH: '/';

TAG_EQUALS: '=' -> pushMode(ATTVALUE);

SELF_CLOSING_TAG_NAME
    : 'area'
    | 'base'
    | 'br'
    | 'col'
    | 'embed'
    | 'hr'
    | 'img'
    | 'input'
    | 'link'
    | 'meta'
    | 'param'
    | 'source'
    | 'track'
    | 'wbr'
    ;

TAG_NAME: TAG_NameStartChar TAG_NameChar*;

TAG_WHITESPACE: [ \t\r\n] -> skip;

fragment
TAG_NameChar
    : TAG_NameStartChar
    | '-'
    | '_'
    | '.'
    | [0-9]
    ;

fragment
TAG_NameStartChar: [a-zA-Z];

mode ATTVALUE;

ATTVALUE_VALUE
    : [ ]* ATTRIBUTE -> popMode
    ;

ATTRIBUTE
    : '"' ~[<"]* '"'
    | '\'' ~[<']* '\''
    | [0-9]
    ;

mode RGL_EXPR;

HASH: '#';
DOUBLE_QUOTE: '"';
SINGLE_QUOTE: '\'';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
OPEN_BRACE: '{' -> pushMode(RGL_OBJ);
CLOSE_BRACE: '}' -> popMode;
COMMA: ',';
ASSIGN: '=';
QUESTION_MARK: '?';
COLON: ':';
DOT: '.';
PLUS_PLUS: '++';
MINUS_MINUS: '--';
PLUS: '+';
MINUS: '-';
BIT_NOT: '~';
NOT: '!';
MULTIPLY: '*';
DIVIDE: '/';
MODULUS: '%';
LESS_THAN: '<';
MORE_THAN: '>';
LESS_THAN_EQUALS: '<=';
GREATER_THAN_EQUALS: '>=';
EQUALS: '==';
NOT_EQUALS: '!=';
IDENTITY_EQUALS: '===';
IDENTITY_NOT_EQUALS: '!==';
AND: '&&';
OR: '||';
MULTIPLY_ASSIGN: '*=';
DIVIDE_ASSIGN: '/=';
MODULUS_ASSIGN: '%=';
PLUS_ASSIGN: '+=';
MINUS_ASSIGN: '-=';
FILTER_START: '|';
BOOLEAN
    : 'true'
    | 'false'
    ;

IF: 'if';
ELSEIF: 'elseif';
ELSE: 'else';
LIST: 'list';
INC: 'inc' 'lude'?;

ID: IdStart IdChar*;

fragment
IdChar
    : IdStart
    | [0-9]
    ;

fragment
IdStart: [a-zA-Z$_];

STRING
    : '"' DoubleStringChars '"'
    | '\'' SingleStringChars '\''
    ;

fragment
DoubleStringChars
    : ~["\\\r\n]
    | StringChars
    ;

fragment
SingleStringChars
    : ~['\\\r\n]
    | StringChars
    ;

fragment
StringChars: '\\' EscapeSequence;

fragment
EscapeSequence
    : ['"\\bfnrtv]
    | ~['"\\bfnrtv0-9xu\r\n]
    | [\r\n\u2028\u2029]
    | '0'
    ;

DECIMAL
    : DecimalInt '.' [0-9]*
    | '.' [0-9]*
    | DecimalInt
    ;

fragment
DecimalInt
    : '0'
    | [1-9] [0-9]*
    ;

fragment
NUMBER: [0-9];

mode RGL_OBJ;

RGL_OBJ_OPEN: '{' -> pushMode(RGL_OBJ);
RGL_OBJ_CLOSE: '}' -> popMode;
