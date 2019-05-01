var storeDAO = require('../dao/StoreDAO')


class StoreService{

    listStores(callback){
        storeDAO.readStores((stores) =>{
            callback(stores)
        })
    }
}

module.exports = new StoreService()