var MongoClient = require('mongodb').MongoClient;
var SakilaConstants = require('./SakilaConstants');

const url = 'mongodb://172.21.0.10:27017';


class FilmDAO {

    readFilms(callback){
        var client = MongoClient(url);
        client.connect((err)=>{
           if(err !== null){
               console.log(err);
               callback([]);
               return;
           }
           var db = client.db(SakilaConstants.dbName);
           var films = db.collection(SakilaConstants.collections.films.collectionName);
           var fields = SakilaConstants.collections.films;
           var projection = {};
           projection[fields.id] = 1;
           projection[fields.title] = 1;
           projection[fields.category] = 1;
           projection[fields.description] = 1;
           projection[fields.length] = 1;
           projection[fields.rating] = 1;
           projection[fields.rentalDurantion] = 1;
           projection[fields.replacementCost] = 1;
           projection[fields.specialFeatures] = 1;
           films.find({}).project(projection).toArray((err, docs)=>{
               callback(docs)
           })
        });

    }

    readFilmById(filmId, callback){
        var client = MongoClient(url);
        client.connect((err)=>{
           if(err !== null){
               console.log(err);
               callback({});
               return;
           }
           var db = client.db(SakilaConstants.dbName);
           var films = db.collection(SakilaConstants.collections.films.collectionName);
           films.findOne({_id : filmId}, (err, document) => {
               callback(document);
           });
        });
    }

    readActorsOfFilm(filmId,callback){
        this.readFilmById(filmId, (film)=>{
            callback(film[SakilaConstants.collections.films.actors]);
        })
    }

    readFilmByCategory(category, callback){
        var client = MongoClient(url);
        client.connect((err)=> {
            if (err !== null) {
                console.log(err);
                callback({});
                return;
            }
            var db = client.db(SakilaConstants.dbName);
            var films = db.collection(SakilaConstants.collections.films.collectionName);
            var selection = {}
            selection[SakilaConstants.collections.films.category] = category;
            films.find(selection).toArray((err,docs) =>{
                callback(docs);
            })
        });
    }

    readActors(callback){
        var client = MongoClient(url);
        client.connect((err)=>{
            if(err !== null){
                console.log(err);
                callback({});
                return;
            }
            var db = client.db(SakilaConstants.dbName);
            var films = db.collection(SakilaConstants.collections.films.collectionName);

            var projection = {};
            projection[SakilaConstants.collections.films.actors] = 1;
            films.find({}).project(projection).toArray((err,documents) =>{

                var actors = [];
                documents.forEach((document)=>{
                    document[SakilaConstants.collections.films.actors].forEach((currentActor)=>{
                        if(actors.findIndex((actor) =>{
                            return actor.actorId === currentActor.actorId;
                        }) === -1){
                            actors.push(currentActor);
                        }
                    });

                });
                callback(actors);
            })
        })
    }
}

module.exports = new FilmDAO();