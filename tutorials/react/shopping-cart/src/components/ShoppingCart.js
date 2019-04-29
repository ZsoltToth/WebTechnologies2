import React from 'react'

class ShoppingCart  extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            cart: []
            /*
                [ {item : { _id : 1, name : "apple", price : 5}, quantity : 2},
                {item : { _id : 3, name : "peach", price : 7}, quantity : 2}]
                */
        }
    }

    insertItem(item){
        var itemIndex = this.state.cart.findIndex((element) => {return JSON.stringify(element.item) === JSON.stringify(item)})

        if(itemIndex === -1){
            this.setState({cart : this.state.cart.concat({item : item, quantity : 1})})
        }
        else{
            //Should be modified to this.setState()
            this.state.cart[itemIndex].quantity += 1
            this.forceUpdate()
        }

    }

    removeItem(item){
        var itemIndex = this.state.cart.findIndex((element) => {return JSON.stringify(element.item) === JSON.stringify(item)})
        if(itemIndex === -1){
            return
        }
        this.state.cart[itemIndex].quantity -= 1
        if(this.state.cart[itemIndex].quantity === 0){
            this.state.cart.splice(itemIndex)
        }
        //Should be replace with setState()
        this.forceUpdate()
    }




    render(){
        return (
            <div className="card">
            <div className="card-header"
                 onClick={() => {this.insertItem({_id: 0, name :"grape"})}}>Shopping Cart</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.state.cart.map(
                            (element) => {
                                return (
                                    <li
                                        className="list-group-item"
                                        key={element.item.name}>
                                        {element.item.name}
                                        <span className="float-right badge-info">{element.quantity}</span>
                                        </li>
                                )
                            }
                        )}
                    </ul>
                </div>
                <div className="card-footer" onClick={() => {this.removeItem({_id: 0, name :"grape"})}}>
                    <span>Total Cost:</span>
                    <span className="float-right">0</span>
                </div>
        </div>)
    }
}

export default ShoppingCart