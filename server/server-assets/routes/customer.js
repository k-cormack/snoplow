let router = require('express').Router()
let Customer = require('../models/customer')

router.get('/',(req,res,next)=>{
Customer.find({customerId: req.session.uid})
.then (data=>{
    res.send(data)
})
.catch(err=>{
console.log(err)
next()
})
})
router.post('/',(req, res, next)=>{
    req.body.customerId = req.session.uid
    Customer.create(req.body)
    .then(newJob=>{
        res.send(newJob)
    })
    .catch(err=>{
        res.status(400).send(err)
        next()
    })
})

router.put('/:id',(req,res,next)=>{
    Customer.findById(req.params.id)
    .then(customer=>{
        customer.update(req.body,(err)=>{
            if(err){
            res.status(400).send(err)
            next()
            return
            }
            res.send("Success")
        })
    })
})
router.delete('/:id',(req , res , next)=>{
    Customer.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.send('deleted')
    })
})

module.exports = router