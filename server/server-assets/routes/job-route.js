let router = require('express').Router()
let Jobs = require('../models/job')


//GET
router.get('/', (req, res, next) => {
  Jobs.find({ authorId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

router.get('/:jobId', (req, res, next) => {
  Jobs.findById(req.params.jobId)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//POST
router.post('/', (req, res, next) => {
  Jobs.create(req.body)
    .then(newJob => {
      res.send(newJob)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT
router.put('/:id', (req, res, next) => {
  Jobs.findById(req.params.id)
    .then(job => {
      // @ts-ignore
      if (!job.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      job.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Job Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE
router.delete('/:id', (req, res, next) => {
  Jobs.findById(req.params.id)
    .then(job => {
      // @ts-ignore
      if (!job.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      Jobs.findByIdAndRemove(req.params.id)
        .then(data => {
          res.send('Job Successfully Deleted')
        })
    })
})


module.exports = router