let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
// let schemaName = 'Job'

let address = new Schema({
    street: { type: String, required: true },
    street2: { type: String },
    city: { type: String, required: true },
    zipCode: {type: Number, required: true },
  
  })
  
let schema = new Schema({
  customerId: { type: ObjectId, required: true },
  customerName: { type: String, required: true },
  location: [{ type: address, required: true }],
  geoCoords: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: Number, required: true },
  created: { type: Number, required: true, default: Date.now() },
  pending: { type: Boolean, default: false, required: true },
  completed: { type: Boolean, default: false, required: true},
  messages: [],
})


module.exports = mongoose.model('Job', schema)