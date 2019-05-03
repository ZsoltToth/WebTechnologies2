import {Dispatcher} from 'flux'
import React from 'react'
import ReactDOM from 'react-dom'


import StoreConstants from '../constants/StoreConstants'
import StoresStore from '../store/StoresStore'
import StoreDetails from "../components/StoreDetails";
import MovieStore from "../store/MovieStore";
import MovieInformationPanel from "../components/MovieInformationPanel";

class SakilaDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            payload : action
        });
    }
}

const dispatcher = new SakilaDispatcher();

dispatcher.register((data)=>{
    if(data.payload.actionType !== StoreConstants.LIST_STORES){
        return;
    }
    fetch('/stores',{
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    }).then(response =>{ return response.json()})
        .then(result =>{
            StoresStore._stores = result;
            StoresStore.emitChange();
        });
});

dispatcher.register((data)=>{
    if(data.payload.actionType !== StoreConstants.DETAIL_STORE){
        return;
    }

    StoresStore._selectedStore = StoresStore._stores.find( (store)=>{
        return store._id === data.payload.payload;
    });
    fetch('/stores/'+data.payload.payload+'/movies',{
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    }).then((response) => { return response.json()})
        .then((res) =>{
            StoresStore._selectedStore['inventory'] = res;
            StoresStore.emitChange();
        });

    ReactDOM.render(
        React.createElement(StoreDetails),
        document.getElementById('mainContentPanel'))
    StoresStore.emitChange();
});

dispatcher.register((data)=>{
   if(data.payload.actionType !== StoreConstants.SHOW_MOVIE_INFORMATION){
       return;
   }
   fetch('/movies/id/'+data.payload.payload)
       .then((response)=>{return response.json()})
       .then((response)=>{
           MovieStore._selectedMovie = response;
           MovieStore.emitChange();
       });
   ReactDOM.render(
       React.createElement(MovieInformationPanel),
       document.getElementById('mainContentPanel')
   );
   MovieStore.emitChange();

});

export default dispatcher;