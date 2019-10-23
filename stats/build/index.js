"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
//encoding:-utf8 means we are reading some kind of text file and want a string in response intead of buffer
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// const homeWin='H';
// const awayWin = 'A'
//enum -enumeration
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man united wins " + manUnitedWins);
