var filmDAO = require('../dao/FilmDAO');

class FilmService{

    listFilms(callback){
        filmDAO.readFilms(callback);
    }

    listFilmById(filmId,callback){
        filmDAO.readFilmById(filmId,callback);
    }

    listFilmsByCategory(category, callback){
        filmDAO.readFilmByCategory(category,callback);
    }

    listActors(callback){
        filmDAO.readActors(callback);
    }
}

module.exports = new FilmService();