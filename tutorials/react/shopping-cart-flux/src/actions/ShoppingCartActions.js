import ShoppingCartConstants from '../constants/ShoppingCartConstants'
import ShoppingCartDispatcher from "../dispatcher/ShoppingCartDispatcher";

class ShoppingCartActions {

    insertItem(item){
        ShoppingCartDispatcher.handleViewAction({
            actionType : ShoppingCartConstants.INSERT_ITEM,
            payload : item
        });
    }

    removeSingleItem(item){
        console.log('remove-single-item')
    }

    removeAllItems(item){
        console.log('remove-all-items')
    }

}

export default new ShoppingCartActions();