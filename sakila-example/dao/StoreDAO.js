var MongoClient = require('mongodb').MongoClient;
var SakilaConstants = require('./SakilaConstants')

const url = 'mongodb://172.21.0.10:27017';


class StoreDAO{

    readStores(callback){
        var client = MongoClient(url);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([])
            }
            var db = client.db(SakilaConstants.dbName);
            var collection = db.collection(SakilaConstants.collections.customers)
            collection.find().toArray((err,docs) =>{
                callback(docs)
            })
        })
    }
}

module.exports = new StoreDAO()