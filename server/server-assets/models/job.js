let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
// let schemaName = 'Job'


  
let schema = new Schema({
  customerId: { type: ObjectId,ref:"customer", required: true },
  customerName: { type: String, required: true },
  street: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  lat: {type: String},
  long: {type: String},
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  pending: { type: Boolean, default: true, required: true },
  active: { type: Boolean, default: false, required: true},
  completed: {type: Boolean, default: false},
  messages: [],
})


module.exports = mongoose.model('Job', schema)