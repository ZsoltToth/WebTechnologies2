var express = require('express');
var router = express.Router();
var storeService = require('../service/StoreService')

router.get('/',(req,res,next)=>{
    req.url = '/list';
    router.handle(req,res)
});

router.get('/list', function(req, res, next) {
    storeService.listStores((stores)=>{
        res.status(200).send(stores)
    })
});

module.exports = router;
