import {Dispatcher} from 'flux'
import ShoppingCartConstants from '../constants/ShoppingCartConstants'
import ShoppingCartStore from '../store/ShoppingCartStore'

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
        var itemIndex = ShoppingCartStore._items.findIndex((element) => {
            return element.item._id === data.action.payload._id
        })
        if(itemIndex === -1){
            ShoppingCartStore._items.push({
                item : data.action.payload,
                quantity : 1
            })
        }
        else{
            ShoppingCartStore._items[itemIndex].quantity += 1
        }
        ShoppingCartStore.emitChange()
    }
})

dispatcher.register((data) => {
    if(data.action.actionType === ShoppingCartConstants.REMOVE_SINGLE_ITEM){
        var index = ShoppingCartStore._items.findIndex((element) => {
            return element.item._id === data.action.payload._id;
        })
        ShoppingCartStore._items[index].quantity -= 1;
        ShoppingCartStore._items = ShoppingCartStore._items.filter((element) => {return element.quantity > 0});
        ShoppingCartStore.emitChange()
    }
});

dispatcher.register((data) => {
    if(data.action.actionType === ShoppingCartConstants.REMOVE_ALL_ITEMS){
        ShoppingCartStore._items = ShoppingCartStore._items.filter((element) => {return element.item._id !== data.action.payload._id})
        ShoppingCartStore.emitChange()
    }
});

export default dispatcher