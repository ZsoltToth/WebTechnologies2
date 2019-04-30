import {EventEmitter} from 'events'

class ShoppingCartStore extends EventEmitter{

    _items = [];

    getItems() {
        return this._items;
    }

    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.on('change',callback)
    }

    removeChangeListener(callback){
        this.removeListener('change',callback);
    }
}

export default new ShoppingCartStore();

