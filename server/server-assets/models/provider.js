let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
let bcrypt = require('bcryptjs')
const SALT = 12

let address = new Schema({
    street: { type: String, required: true },
    street2: { type: String },
    city: { type: String, required: true },
    zipCode: {type: Number, required: true },
  
  })


let schema = new Schema({
  name: { type: String, required: true },
  //every email must be unique on the database
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  businessName: { type: String},
  businessPhone: { type: String, required: true },
  altPhone: { type: String },
  address: [address],
  created: { type: Number, required: true, default: Date.now() }
})


//THESE TWO METHODS CAN BE COPIED FOR ALL USER SCHEMA'S

//statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//schema.methods are used to add a method to a Model instance
schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Provider', schema)