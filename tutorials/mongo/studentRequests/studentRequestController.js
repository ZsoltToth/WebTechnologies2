var express = require('express');
var router = express.Router();

const studentRequestService = require('./studentRequestService')

router.get('/listRequests',(req,res) =>{
    if(req.query['studentId'] != undefined){

        studentRequestService.listRequestsOfStudent(req.query['studentId'], (requests)=>{
            res.status(200).send(requests)
        })
        return;
    }
    studentRequestService.listRequests((requests) =>{
        res.status(200).send(requests)
    })
})

module.exports = router;