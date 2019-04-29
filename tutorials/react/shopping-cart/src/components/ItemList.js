import React from 'react'

class ItemList extends React.Component{

    constructor(props) {
        super(props);
        //Predefined Items
        //It should be provided by the server
        this.state = {
            items : [
                { _id : 1, name : "Apple", price : 5},
                { _id : 2, name : "Peach", price : 7},
                { _id : 3, name : "Cherry", price : 3},
                { _id : 4, name : "Plum", price : 8},
                { _id : 5, name : "Grape", price : 2},
                { _id : 6, name : "Orange", price : 9},
                { _id : 7, name : "Watermelon", price : 5},
                { _id : 8, name : "Kiwi", price : 6},
            ]
        }
    }

    addCart(item){
        console.log(item)
    }

    render() {
        return(
            <ul className="list-group">
                {this.state.items.map(
                    (item) => {
                        return (<li key={item._id} className="list-group-item" onClick={() => this.addCart(item)}>
                            <span>{item.name}</span>
                            <span className="float-right badge-info"> {item.price}$ </span>
                            </li>)
                    }
                )}
            </ul>
        )
    }

}

export default ItemList