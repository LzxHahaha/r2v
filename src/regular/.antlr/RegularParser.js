// Generated from /Users/hzliangzuxuan/code/revue/src/regular/RegularParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "RegularParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010m\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u001f\n\u0002\f\u0002\u000e\u0002\"\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e",
    "\u0003*\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u00036\n\u0003\f\u0003\u000e\u00039\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003@\n\u0003\f\u0003",
    "\u000e\u0003C\u000b\u0003\u0003\u0003\u0003\u0003\u0005\u0003G\n\u0003",
    "\u0003\u0004\u0005\u0004J\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "N\n\u0004\u0003\u0004\u0005\u0004Q\n\u0004\u0007\u0004S\n\u0004\f\u0004",
    "\u000e\u0004V\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005]\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0005",
    "\ni\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0004\u0004\u0002\u0006\u0006",
    "\b\b\u0003\u0002\u0003\u0004\u0002o\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0004F\u0003\u0002\u0002\u0002\u0006I\u0003\u0002\u0002\u0002\b\\\u0003",
    "\u0002\u0002\u0002\n^\u0003\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002",
    "\u000eb\u0003\u0002\u0002\u0002\u0010d\u0003\u0002\u0002\u0002\u0012",
    "h\u0003\u0002\u0002\u0002\u0014j\u0003\u0002\u0002\u0002\u0016\u0018",
    "\u0005\u0012\n\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001c \u0005\u0004\u0003\u0002\u001d\u001f",
    "\u0005\u0012\n\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\"\u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!\u0003\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007",
    "\u0007\u0002\u0002$(\u0005\u000e\b\u0002%\'\u0005\b\u0005\u0002&%\u0003",
    "\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002",
    "()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002",
    "\u0002+,\u0007\t\u0002\u0002,-\u0005\u0006\u0004\u0002-.\u0007\u0007",
    "\u0002\u0002./\u0007\u000b\u0002\u0002/0\u0005\u000e\b\u000201\u0007",
    "\t\u0002\u00021G\u0003\u0002\u0002\u000223\u0007\u0007\u0002\u00023",
    "7\u0005\u000e\b\u000246\u0005\b\u0005\u000254\u0003\u0002\u0002\u0002",
    "69\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u00028:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\u0007\n",
    "\u0002\u0002;G\u0003\u0002\u0002\u0002<=\u0007\u0007\u0002\u0002=A\u0005",
    "\u000e\b\u0002>@\u0005\b\u0005\u0002?>\u0003\u0002\u0002\u0002@C\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002",
    "BD\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002DE\u0007\t\u0002",
    "\u0002EG\u0003\u0002\u0002\u0002F#\u0003\u0002\u0002\u0002F2\u0003\u0002",
    "\u0002\u0002F<\u0003\u0002\u0002\u0002G\u0005\u0003\u0002\u0002\u0002",
    "HJ\u0005\u0010\t\u0002IH\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JT\u0003\u0002\u0002\u0002KN\u0005\u0004\u0003\u0002LN\u0005\u0014",
    "\u000b\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002NP\u0003",
    "\u0002\u0002\u0002OQ\u0005\u0010\t\u0002PO\u0003\u0002\u0002\u0002P",
    "Q\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RM\u0003\u0002\u0002",
    "\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002U\u0007\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002",
    "WX\u0005\n\u0006\u0002XY\u0007\f\u0002\u0002YZ\u0005\f\u0007\u0002Z",
    "]\u0003\u0002\u0002\u0002[]\u0005\n\u0006\u0002\\W\u0003\u0002\u0002",
    "\u0002\\[\u0003\u0002\u0002\u0002]\t\u0003\u0002\u0002\u0002^_\u0007",
    "\r\u0002\u0002_\u000b\u0003\u0002\u0002\u0002`a\u0007\u000f\u0002\u0002",
    "a\r\u0003\u0002\u0002\u0002bc\u0007\r\u0002\u0002c\u000f\u0003\u0002",
    "\u0002\u0002de\t\u0002\u0002\u0002e\u0011\u0003\u0002\u0002\u0002fi",
    "\u0005\u0014\u000b\u0002gi\u0007\u0006\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002i\u0013\u0003\u0002\u0002\u0002jk\t",
    "\u0003\u0002\u0002k\u0015\u0003\u0002\u0002\u0002\u000e\u0019 (7AFI",
    "MPT\\h"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'<'", null, "'>'", "'/>'", 
                     "'/'", "'='" ];

var symbolicNames = [ null, "HTML_COMMENT", "REGULAR_COMMENT", "REGULAR_EXPRESS", 
                      "SEA_WS", "TAG_OPEN", "HTML_TEXT", "TAG_CLOSE", "TAG_SLASH_CLOSE", 
                      "TAG_SLASH", "TAG_EQUALS", "TAG_NAME", "TAG_WHITESPACE", 
                      "ATTVALUE_VALUE", "ATTRIBUTE" ];

var ruleNames =  [ "htmlElements", "htmlElement", "htmlContent", "htmlAttribute", 
                   "htmlAttributeName", "htmlAttributeValue", "htmlTagName", 
                   "htmlChardata", "htmlMisc", "htmlComment" ];

function RegularParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RegularParser.prototype = Object.create(antlr4.Parser.prototype);
RegularParser.prototype.constructor = RegularParser;

Object.defineProperty(RegularParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RegularParser.EOF = antlr4.Token.EOF;
RegularParser.HTML_COMMENT = 1;
RegularParser.REGULAR_COMMENT = 2;
RegularParser.REGULAR_EXPRESS = 3;
RegularParser.SEA_WS = 4;
RegularParser.TAG_OPEN = 5;
RegularParser.HTML_TEXT = 6;
RegularParser.TAG_CLOSE = 7;
RegularParser.TAG_SLASH_CLOSE = 8;
RegularParser.TAG_SLASH = 9;
RegularParser.TAG_EQUALS = 10;
RegularParser.TAG_NAME = 11;
RegularParser.TAG_WHITESPACE = 12;
RegularParser.ATTVALUE_VALUE = 13;
RegularParser.ATTRIBUTE = 14;

RegularParser.RULE_htmlElements = 0;
RegularParser.RULE_htmlElement = 1;
RegularParser.RULE_htmlContent = 2;
RegularParser.RULE_htmlAttribute = 3;
RegularParser.RULE_htmlAttributeName = 4;
RegularParser.RULE_htmlAttributeValue = 5;
RegularParser.RULE_htmlTagName = 6;
RegularParser.RULE_htmlChardata = 7;
RegularParser.RULE_htmlMisc = 8;
RegularParser.RULE_htmlComment = 9;

function HtmlElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlElements;
    return this;
}

HtmlElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlElementsContext.prototype.constructor = HtmlElementsContext;

HtmlElementsContext.prototype.htmlElement = function() {
    return this.getTypedRuleContext(HtmlElementContext,0);
};

HtmlElementsContext.prototype.htmlMisc = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlMiscContext);
    } else {
        return this.getTypedRuleContext(HtmlMiscContext,i);
    }
};




RegularParser.HtmlElementsContext = HtmlElementsContext;

RegularParser.prototype.htmlElements = function() {

    var localctx = new HtmlElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegularParser.RULE_htmlElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegularParser.HTML_COMMENT) | (1 << RegularParser.REGULAR_COMMENT) | (1 << RegularParser.SEA_WS))) !== 0)) {
            this.state = 20;
            this.htmlMisc();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.htmlElement();
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegularParser.HTML_COMMENT) | (1 << RegularParser.REGULAR_COMMENT) | (1 << RegularParser.SEA_WS))) !== 0)) {
            this.state = 27;
            this.htmlMisc();
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlElement;
    return this;
}

HtmlElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlElementContext.prototype.constructor = HtmlElementContext;

HtmlElementContext.prototype.TAG_OPEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RegularParser.TAG_OPEN);
    } else {
        return this.getToken(RegularParser.TAG_OPEN, i);
    }
};


HtmlElementContext.prototype.htmlTagName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlTagNameContext);
    } else {
        return this.getTypedRuleContext(HtmlTagNameContext,i);
    }
};

HtmlElementContext.prototype.TAG_CLOSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RegularParser.TAG_CLOSE);
    } else {
        return this.getToken(RegularParser.TAG_CLOSE, i);
    }
};


HtmlElementContext.prototype.htmlContent = function() {
    return this.getTypedRuleContext(HtmlContentContext,0);
};

HtmlElementContext.prototype.TAG_SLASH = function() {
    return this.getToken(RegularParser.TAG_SLASH, 0);
};

HtmlElementContext.prototype.htmlAttribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlAttributeContext);
    } else {
        return this.getTypedRuleContext(HtmlAttributeContext,i);
    }
};

HtmlElementContext.prototype.TAG_SLASH_CLOSE = function() {
    return this.getToken(RegularParser.TAG_SLASH_CLOSE, 0);
};




RegularParser.HtmlElementContext = HtmlElementContext;

RegularParser.prototype.htmlElement = function() {

    var localctx = new HtmlElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RegularParser.RULE_htmlElement);
    var _la = 0; // Token type
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 33;
            this.match(RegularParser.TAG_OPEN);
            this.state = 34;
            this.htmlTagName();
            this.state = 38;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RegularParser.TAG_NAME) {
                this.state = 35;
                this.htmlAttribute();
                this.state = 40;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 41;
            this.match(RegularParser.TAG_CLOSE);
            this.state = 42;
            this.htmlContent();
            this.state = 43;
            this.match(RegularParser.TAG_OPEN);
            this.state = 44;
            this.match(RegularParser.TAG_SLASH);
            this.state = 45;
            this.htmlTagName();
            this.state = 46;
            this.match(RegularParser.TAG_CLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.match(RegularParser.TAG_OPEN);
            this.state = 49;
            this.htmlTagName();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RegularParser.TAG_NAME) {
                this.state = 50;
                this.htmlAttribute();
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 56;
            this.match(RegularParser.TAG_SLASH_CLOSE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 58;
            this.match(RegularParser.TAG_OPEN);
            this.state = 59;
            this.htmlTagName();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RegularParser.TAG_NAME) {
                this.state = 60;
                this.htmlAttribute();
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 66;
            this.match(RegularParser.TAG_CLOSE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlContent;
    return this;
}

HtmlContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlContentContext.prototype.constructor = HtmlContentContext;

HtmlContentContext.prototype.htmlChardata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlChardataContext);
    } else {
        return this.getTypedRuleContext(HtmlChardataContext,i);
    }
};

HtmlContentContext.prototype.htmlElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlElementContext);
    } else {
        return this.getTypedRuleContext(HtmlElementContext,i);
    }
};

HtmlContentContext.prototype.htmlComment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HtmlCommentContext);
    } else {
        return this.getTypedRuleContext(HtmlCommentContext,i);
    }
};




RegularParser.HtmlContentContext = HtmlContentContext;

RegularParser.prototype.htmlContent = function() {

    var localctx = new HtmlContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RegularParser.RULE_htmlContent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RegularParser.SEA_WS || _la===RegularParser.HTML_TEXT) {
            this.state = 70;
            this.htmlChardata();
        }

        this.state = 82;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 75;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RegularParser.TAG_OPEN:
                    this.state = 73;
                    this.htmlElement();
                    break;
                case RegularParser.HTML_COMMENT:
                case RegularParser.REGULAR_COMMENT:
                    this.state = 74;
                    this.htmlComment();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 78;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===RegularParser.SEA_WS || _la===RegularParser.HTML_TEXT) {
                    this.state = 77;
                    this.htmlChardata();
                }
         
            }
            this.state = 84;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlAttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlAttribute;
    return this;
}

HtmlAttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlAttributeContext.prototype.constructor = HtmlAttributeContext;

HtmlAttributeContext.prototype.htmlAttributeName = function() {
    return this.getTypedRuleContext(HtmlAttributeNameContext,0);
};

HtmlAttributeContext.prototype.TAG_EQUALS = function() {
    return this.getToken(RegularParser.TAG_EQUALS, 0);
};

HtmlAttributeContext.prototype.htmlAttributeValue = function() {
    return this.getTypedRuleContext(HtmlAttributeValueContext,0);
};




RegularParser.HtmlAttributeContext = HtmlAttributeContext;

RegularParser.prototype.htmlAttribute = function() {

    var localctx = new HtmlAttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RegularParser.RULE_htmlAttribute);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.htmlAttributeName();
            this.state = 86;
            this.match(RegularParser.TAG_EQUALS);
            this.state = 87;
            this.htmlAttributeValue();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 89;
            this.htmlAttributeName();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlAttributeNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlAttributeName;
    return this;
}

HtmlAttributeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlAttributeNameContext.prototype.constructor = HtmlAttributeNameContext;

HtmlAttributeNameContext.prototype.TAG_NAME = function() {
    return this.getToken(RegularParser.TAG_NAME, 0);
};




RegularParser.HtmlAttributeNameContext = HtmlAttributeNameContext;

RegularParser.prototype.htmlAttributeName = function() {

    var localctx = new HtmlAttributeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RegularParser.RULE_htmlAttributeName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(RegularParser.TAG_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlAttributeValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlAttributeValue;
    return this;
}

HtmlAttributeValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlAttributeValueContext.prototype.constructor = HtmlAttributeValueContext;

HtmlAttributeValueContext.prototype.ATTVALUE_VALUE = function() {
    return this.getToken(RegularParser.ATTVALUE_VALUE, 0);
};




RegularParser.HtmlAttributeValueContext = HtmlAttributeValueContext;

RegularParser.prototype.htmlAttributeValue = function() {

    var localctx = new HtmlAttributeValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RegularParser.RULE_htmlAttributeValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(RegularParser.ATTVALUE_VALUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlTagNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlTagName;
    return this;
}

HtmlTagNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlTagNameContext.prototype.constructor = HtmlTagNameContext;

HtmlTagNameContext.prototype.TAG_NAME = function() {
    return this.getToken(RegularParser.TAG_NAME, 0);
};




RegularParser.HtmlTagNameContext = HtmlTagNameContext;

RegularParser.prototype.htmlTagName = function() {

    var localctx = new HtmlTagNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RegularParser.RULE_htmlTagName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(RegularParser.TAG_NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlChardataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlChardata;
    return this;
}

HtmlChardataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlChardataContext.prototype.constructor = HtmlChardataContext;

HtmlChardataContext.prototype.HTML_TEXT = function() {
    return this.getToken(RegularParser.HTML_TEXT, 0);
};

HtmlChardataContext.prototype.SEA_WS = function() {
    return this.getToken(RegularParser.SEA_WS, 0);
};




RegularParser.HtmlChardataContext = HtmlChardataContext;

RegularParser.prototype.htmlChardata = function() {

    var localctx = new HtmlChardataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RegularParser.RULE_htmlChardata);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        _la = this._input.LA(1);
        if(!(_la===RegularParser.SEA_WS || _la===RegularParser.HTML_TEXT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlMiscContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlMisc;
    return this;
}

HtmlMiscContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlMiscContext.prototype.constructor = HtmlMiscContext;

HtmlMiscContext.prototype.htmlComment = function() {
    return this.getTypedRuleContext(HtmlCommentContext,0);
};

HtmlMiscContext.prototype.SEA_WS = function() {
    return this.getToken(RegularParser.SEA_WS, 0);
};




RegularParser.HtmlMiscContext = HtmlMiscContext;

RegularParser.prototype.htmlMisc = function() {

    var localctx = new HtmlMiscContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RegularParser.RULE_htmlMisc);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RegularParser.HTML_COMMENT:
        case RegularParser.REGULAR_COMMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 100;
            this.htmlComment();
            break;
        case RegularParser.SEA_WS:
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.match(RegularParser.SEA_WS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HtmlCommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegularParser.RULE_htmlComment;
    return this;
}

HtmlCommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HtmlCommentContext.prototype.constructor = HtmlCommentContext;

HtmlCommentContext.prototype.HTML_COMMENT = function() {
    return this.getToken(RegularParser.HTML_COMMENT, 0);
};

HtmlCommentContext.prototype.REGULAR_COMMENT = function() {
    return this.getToken(RegularParser.REGULAR_COMMENT, 0);
};




RegularParser.HtmlCommentContext = HtmlCommentContext;

RegularParser.prototype.htmlComment = function() {

    var localctx = new HtmlCommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RegularParser.RULE_htmlComment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if(!(_la===RegularParser.HTML_COMMENT || _la===RegularParser.REGULAR_COMMENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RegularParser = RegularParser;
