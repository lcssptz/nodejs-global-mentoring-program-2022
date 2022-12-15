// Preset
const fs = require('fs')
const csv = require('csvtojson')

const convertCsvToJson = (sour, dest) => {
  try {
    const readableStream = fs.createReadStream(sour, 'utf8')
    const writableStream = fs.createWriteStream(dest, 'utf8')

    readableStream
    .pipe(csv())
    .pipe(writableStream)
  } catch(err) {
    console.error(JSON.stringify(err))
  }
}

const sourCSV = './csvx/nodejs-hw1-ex1.csv'
const destJSON = './csv/nodejs-hw1-ex1.txt'

convertCsvToJson(sourCSV, destJSON)
