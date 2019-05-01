var storeDAO = require('../dao/StoreDAO');


class StoreService{

    listStores(callback){
        storeDAO.readStores((stores) =>{
            callback(stores);
        })
    }

    queryStaffOfStore(storeId, callback){
        storeDAO.readStaff(storeId, (staff)=>{
            callback(staff);
        })
    }
}

module.exports = new StoreService();