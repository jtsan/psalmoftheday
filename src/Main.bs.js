// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var today = new Date();

var firstOfYear = new Date(today.getFullYear(), 0.0);

var x = today.valueOf() - firstOfYear.valueOf();

var dayOfYear = (x / 1000.0 / 60.0 / 60.0 / 24.0 | 0) + 1 | 0;

var psalmOfTheDay = String(dayOfYear % 150);

var linkTo = "<a href=\"https://www.bible.com/en-GB/bible/59/PSA." + (String(psalmOfTheDay) + (".ESV\">Psalm " + (String(psalmOfTheDay) + "</a>")));

var __x = document.getElementById("linkTo");

Belt_Option.map((__x == null) ? undefined : Js_primitive.some(__x), (function (__x) {
        __x.innerHTML = linkTo;
        return /* () */0;
      }));

var D = 0;

var Doc = 0;

var Elem = 0;

exports.D = D;
exports.Doc = Doc;
exports.Elem = Elem;
exports.today = today;
exports.firstOfYear = firstOfYear;
exports.dayOfYear = dayOfYear;
exports.psalmOfTheDay = psalmOfTheDay;
exports.linkTo = linkTo;
/* today Not a pure module */
