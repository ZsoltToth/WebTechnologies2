import StoreConstants from '../constants/StoreConstants'
import SakilaDispatcher from '../dispatcher/SakilaDispatcher'
class MovieActions {

    showMovieInformation(filmId){
        SakilaDispatcher.handleViewAction({
            actionType : StoreConstants.SHOW_MOVIE_INFORMATION,
            payload : parseInt(filmId)
        });
    }

}

export default new MovieActions();