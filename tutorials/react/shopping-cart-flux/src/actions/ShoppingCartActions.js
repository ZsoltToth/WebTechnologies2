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
        ShoppingCartDispatcher.handleViewAction({
            actionType : ShoppingCartConstants.REMOVE_SINGLE_ITEM,
            payload : item
        })
    }

    removeAllItems(item){
        ShoppingCartDispatcher.handleViewAction({
            actionType : ShoppingCartConstants.REMOVE_ALL_ITEMS,
            payload : item
        })
    }

}

export default new ShoppingCartActions();