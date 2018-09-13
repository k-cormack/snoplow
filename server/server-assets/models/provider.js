let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 





let schema = new Schema({

 
  
  
  businessName: { type: String},
<<<<<<< HEAD
  businessPhone: { type: Number, required: true },
  altPhone: { type: Number },
=======
  businessPhone: { type: String, required: true },
  altPhone: { type: String },
  address: [address],
>>>>>>> 733e59e68f470656e551ccf3ed7036dfc102456d
  created: { type: Number, required: true, default: Date.now() }
})



module.exports = mongoose.model('Provider', schema)