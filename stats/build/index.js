"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//encoding:-utf8 means we are reading some kind of text file and want a string in response intead of buffer
//const csvFileReader = new CsvFileReader('football.csv')
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
//
matchReader.load();
//const dateOfFirstMatch = reader.data[0][0]
// const homeWin='H';
// const awayWin = 'A'
//enum -enumeration
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
