let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
let bcrypt = require('bcryptjs')
const SALT = 13

let address = new Schema({
  street: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: {type: Number, required: true },

})


let schema = new Schema({
  name: { type: String, required: true },
  //every email must be unique on the database
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  phone2: { type: String },
  address: [ address ],
  provider: {type: Boolean, default: false, required: true},
  providerId: {type: ObjectId, ref: "Provider"},
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

module.exports = mongoose.model('Customer', schema)