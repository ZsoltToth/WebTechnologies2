import {Dispatcher} from 'flux'
import ShoppingCartConstants from '../constants/ShoppingCartConstants'

class ShoppingCartDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            action : action
        });
    }
}

const dispatcher = new ShoppingCartDispatcher();
dispatcher.register((data)=>{
    if(data.action.actionType === ShoppingCartConstants.INSERT_ITEM){
        console.log(data.action.payload)
    }
})

export default dispatcher