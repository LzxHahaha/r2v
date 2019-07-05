parser grammar RegularParser;

options {
    tokenVocab=RegularLexer;
}

htmlElements
    : htmlMisc* htmlElement htmlMisc*
    ;

htmlElement
    : TAG_OPEN htmlSelfClosingTagName htmlAttribute* TAG_SLASH? TAG_CLOSE
    | TAG_OPEN htmlTagName htmlAttribute* TAG_CLOSE htmlContent TAG_OPEN TAG_SLASH htmlTagName TAG_CLOSE
    | TAG_OPEN htmlTagName htmlAttribute* TAG_SLASH_CLOSE
    | TAG_OPEN htmlTagName htmlAttribute* TAG_CLOSE
    ;

htmlContent
    : htmlChardata? ((rglStatement | htmlElement | htmlComment) htmlChardata?)*
    ;

htmlAttribute
    : htmlAttributeName TAG_EQUALS htmlAttributeValue
    | htmlAttributeName
    ;

htmlAttributeName
    : TAG_NAME
    ;

htmlAttributeValue
    : DOUBLE_QUOTE rglStatement DOUBLE_QUOTE
    | SINGLE_QUOTE rglStatement SINGLE_QUOTE
    | rglStatement
    | ATTVALUE_VALUE
    ;

htmlSelfClosingTagName
    : SELF_CLOSING_TAG_NAME
    ;

htmlTagName
    : TAG_NAME
    ;

htmlChardata
    : HTML_TEXT
    | SEA_WS
    ;

htmlMisc
    : htmlComment
    | SEA_WS
    ;

htmlComment
    : HTML_COMMENT
    | RGL_COMMENT
    ;

rglStatement
    : RGL_EXPR_OPEN rglRuleOpen CLOSE_BRACE
    | RGL_EXPR_OPEN rglRuleClose CLOSE_BRACE
    | RGL_EXPR_OPEN rglExpr rglFilters CLOSE_BRACE
    ;

rglRuleOpen
    : HASH (IF | ELSEIF | LIST | INC) rglExpr
    | HASH ELSE
    ;

rglRuleClose
    : OPEN_BRACE DIVIDE (IF | LIST)
    ;

rglExpr
    : 
    ;

rglFilters
    : rglFilter+
    |
    ;

rglFilter
    : SEA_WS* FILTER_START SEA_WS* ID rglFilterParams
    ;

rglFilterParams
    : COLON rglFilterParam (COMMA rglFilterParam)*
    |
    ;
rglFilterParam
    : 
    ;
