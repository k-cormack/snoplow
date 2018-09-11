let router = require('express').Router()
let Provider = require('../models/provider')

router.get('/',(req,res,next)=>{
    Provider.find({providerId: req.session.uid})
    .then (data=>{
        res.send(data)
    })
    .catch(err=>{
    console.log(err)
    next()
    })
    })
    router.post('/',(req, res, next)=>{
        req.body.providerId = req.session.uid
        Provider.create(req.body)
        .then(newReq=>{
            res.send(newReq)
        })
        .catch(err=>{
            res.status(400).send(err)
            next()
        })
    })
    router.put('/:id',(req,res,next)=>{
        Provider.findById(req.params.id)
        .then(provider=>{
            provider.update(req.body,(err)=>{
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
        Provider.findByIdAndRemove(req.params.id)
        .then(data=>{
            res.send('deleted')
        })
    })
    
    module.exports = router