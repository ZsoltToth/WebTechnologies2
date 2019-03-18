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

router.post('/submitRequest', (req,res) =>{
    if(req.body['student'] == undefined){
        res.status(414).send("Student must be defined");
        return;
    }
    if(req.body['student']['name'] == undefined || req.body['student']['name'] === ""){
        res.status(414).send("Student name must be defined");
        return;
    }
    if(req.body['student']['studentId'] == undefined || req.body['student']['studentId'] === ""){
        res.status(414).send("Student ID must be defined");
        return;
    }
    if(req.body['student']['programme'] == undefined || req.body['student']['programme'] === ""){
        res.status(414).send("Student programme name must be defined");
        return;
    }
    if(req.body['desc'] == undefined || req.body['desc'] === ""){
        res.status(414).send("Request description must be defined");
        return;
    }
    studentRequestService.submitRequest(
        {student : req.body['student'], desc : req.body['desc']},
        () => {res.status(200).send("Request recorded")},
        (cause) => {res.status(400).send(cause)}
        )
})

module.exports = router;