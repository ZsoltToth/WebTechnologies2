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
        /*
        if(this.state.cart[itemIndex].quantity === 0){
            this.state.cart.splice(itemIndex)
        }
        */
        this.state.cart = this.state.cart.filter( (element) => {
            return element.quantity != 0
        })
        //Should be replace with setState()
        this.forceUpdate()
    }

    calculateSum(){

        if(this.state.cart.length === 0) {
            return 0
        }
        var totalPrice = 0
        for(var i = 0; i < this.state.cart.length; i++){
            var element = this.state.cart[i]

            totalPrice += element.item.price * element.quantity
        }
        return totalPrice
    }


    render(){
        return (
            <div className="card">
            <div className="card-header">Shopping Cart</div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.state.cart.map(
                            (element) => {
                                return (
                                    <li
                                        className="list-group-item"
                                        onClick={() => {this.removeItem(element.item)}}
                                        key={element.item.name}>
                                        {element.item.name}
                                        <span className="float-right badge-info">{element.quantity}</span>
                                        </li>
                                )
                            }
                        )}
                    </ul>
                </div>
                <div className="card-footer">
                    <span>Total Cost:</span>
                    <span className="float-right">{this.calculateSum()}</span>
                </div>
        </div>)
    }
}

export default ShoppingCart