import MovieConstants from '../constants/MovieConstants'
import SakilaDispatcher from '../dispatcher/SakilaDispatcher'
class MovieActions {

    showMovieInformation(filmId){
        SakilaDispatcher.handleViewAction({
            actionType : MovieConstants.SHOW_MOVIE_INFORMATION,
            payload : parseInt(filmId)
        });
    }

    fetchCategories(){
        SakilaDispatcher.handleViewAction({
            actionType: MovieConstants.READ_CATEGORY_LIST,
            payload : null
        });
    }



}

export default new MovieActions();