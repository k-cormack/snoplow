let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 





let schema = new Schema({

 
  
  
  businessName: { type: String},
  businessPhone: { type: Number},
  altPhone: { type: Number },
  created: { type: Number,  default: Date.now() }
})



module.exports = mongoose.model('Provider', schema)