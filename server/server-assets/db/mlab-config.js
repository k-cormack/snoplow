var mongoose = require('mongoose')
var connectionString = 'mongodb://kcormack:abc789@ds044689.mlab.com:44689/snoplow' //Changed!
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})