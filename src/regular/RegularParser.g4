parser grammar RegularParser;

options {
    tokenVocab=RegularLexer;
    language=JavaScript;
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
    : htmlChardata? ((htmlElement | htmlComment) htmlChardata?)*
    ;

htmlAttribute
    : htmlAttributeName TAG_EQUALS htmlAttributeValue
    | htmlAttributeName
    ;

htmlAttributeName
    : TAG_NAME
    ;

htmlAttributeValue
    : ATTVALUE_VALUE
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
