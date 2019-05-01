var express = require('express');
var router = express.Router();
var storeService = require('../service/StoreService');

router.get('/',(req,res)=>{
    req.url = '/list';
    router.handle(req,res)
});

router.get('/list', function(req, res) {
    storeService.listStores((stores)=>{
        res.status(200).send(stores)
    })
});

router.get('/:storeId/staff', (req,res)=>{
    storeService.queryStaffOfStore(parseInt(req.params.storeId), (staff)=>{
        res.status(200).send(staff)
    })
});

router.get('/:storeId/inventory', (req,res)=>{
    storeService.queryInventoryOfStore(parseInt(req.params.storeId), (staff)=>{
        res.status(200).send(staff)
    })
});

router.get('/:storeId/movies', (req,res)=>{
    storeService.queryFilmsOfStore(parseInt(req.params.storeId), (staff)=>{
        res.status(200).send(staff)
    })
});

module.exports = router;
