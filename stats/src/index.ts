import { MatchReader } from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import { MatchResult } from "./MatchResult"
//encoding:-utf8 means we are reading some kind of text file and want a string in response intead of buffer

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)

matchReader.load()

//const dateOfFirstMatch = reader.data[0][0]

// const homeWin='H';
// const awayWin = 'A'


//enum -enumeration




let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united wins ${manUnitedWins}`);
