import { MatchReader } from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import {HtmlReport}from './reportTargets/HtmlReport'

//encoding:-utf8 means we are reading some kind of text file and want a string in response intead of buffer

//const csvFileReader = new CsvFileReader('football.csv')

const matchReader = MatchReader.fromCsv('football.csv')
//
matchReader.load()

//const dateOfFirstMatch = reader.data[0][0]

// const homeWin='H';
// const awayWin = 'A'


//enum -enumeration

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)






