import React from 'react'
import ShoppingCartStore from "../store/ShoppingCartStore";

class ShoppingCart  extends React.Component{

    constructor(props) {
        super(props);
        //this._onChange = this._onChange().bind(this);
        this.onChange = this.onChange.bind(this)
        this.state = {
            cart: []
        }
    }

    onChange(){
        this.setState({cart : ShoppingCartStore.getItems()})
        console.log({state: this.state})
        console.log({store : ShoppingCartStore.getItems()})
    }

    componentDidMount(){
        ShoppingCartStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        ShoppingCartStore.removeChangeListener(this.onChange)
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
                                        key={element.item._id}>
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
                    <span className="float-right">0</span>
                </div>
        </div>)
    }
}

export default ShoppingCart