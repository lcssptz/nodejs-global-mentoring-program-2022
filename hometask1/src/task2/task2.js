// Preset
const fs = require('fs')
const csv = require('csvtojson')

const sourCSV = './csv/nodejs-hw1-ex1.csv'
const destJSON = './csv/nodejs-hw1-ex1.txt'

const convertCsvToJson = (sour, dest) => {
  const readableStream = fs.createReadStream(sourCSV, 'utf8')
  const writableStream = fs.createWriteStream(destJSON, 'utf8')

  try {
    readableStream
    .pipe(csv())
    .pipe(writableStream)
  } catch(err) {
    console.error(JSON.stringify(err))
  }
}

convertCsvToJson(sourCSV, destJSON)
