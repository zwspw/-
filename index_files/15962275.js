// document.write ('<a href="http://www.51.la/?15962275" target="_blank"><img alt="&#x35;&#x31;&#x2E;&#x6C;&#x61;&#x20;&#x4E13;&#x4E1A;&#x3001;&#x514D;&#x8D39;&#x3001;&#x5F3A;&#x5065;&#x7684;&#x8BBF;&#x95EE;&#x7EDF;&#x8BA1;" src="http://icon.ajiang.net/icon_9.gif" style="border:none" /></a>\n');
var a2275tf = "51la";
var a2275pu = "";
var a2275pf = "51la";
var a2275su = window.location;
var a2275sf = document.referrer;
var a2275of = "";
var a2275op = "";
var a2275ops = 1;
var a2275ot = 1;
var a2275d = new Date();
var a2275color = "";
if (navigator.appName == "Netscape") {
    a2275color = screen.pixelDepth;
} else {
    a2275color = screen.colorDepth;
}
try {
    a2275tf = top.document.referrer;
} catch (e) {}
try {
    a2275pu = window.parent.location;
} catch (e) {}
try {
    a2275pf = window.parent.document.referrer;
} catch (e) {}
try {
    a2275ops = document.cookie.match(new RegExp("(^| )AJSTAT_ok_pages=([^;]*)(;|$)"));
    a2275ops = (a2275ops == null) ? 1 : (parseInt(unescape((a2275ops)[2])) + 1);
    var a2275oe = new Date();
    a2275oe.setTime(a2275oe.getTime() + 60 * 60 * 1000);
    document.cookie = "AJSTAT_ok_pages=" + a2275ops + ";path=/;expires=" + a2275oe.toGMTString();
    a2275ot = document.cookie.match(new RegExp("(^| )AJSTAT_ok_times=([^;]*)(;|$)"));
    if (a2275ot == null) {
        a2275ot = 1;
    } else {
        a2275ot = parseInt(unescape((a2275ot)[2]));
        a2275ot = (a2275ops == 1) ? (a2275ot + 1) : (a2275ot);
    }
    a2275oe.setTime(a2275oe.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "AJSTAT_ok_times=" + a2275ot + ";path=/;expires=" + a2275oe.toGMTString();
} catch (e) {}
try {
    if (document.cookie == "") {
        a2275ops = -1;
        a2275ot = -1;
    }
} catch (e) {}
a2275of = a2275sf;
if (a2275pf !== "51la") {
    a2275of = a2275pf;
}
if (a2275tf !== "51la") {
    a2275of = a2275tf;
}
a2275op = a2275pu;
try {
    lainframe
} catch (e) {
    a2275op = a2275su;
}
document.write('<img style="width:0px;height:0px" src="http://web1.51.la:82/go.asp?svid=8&id=15962275&tpages=' + a2275ops + '&ttimes=' + a2275ot + '&tzone=' + (0 - a2275d.getTimezoneOffset() / 60) + '&tcolor=' + a2275color + '&sSize=' + screen.width + ',' + screen.height + '&referrer=' + escape(a2275of) + '&vpage=' + escape(a2275op) + '" />');