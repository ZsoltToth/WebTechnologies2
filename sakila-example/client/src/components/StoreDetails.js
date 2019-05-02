import React from 'react'
import StoresStore from "../store/StoresStore";

class StoreDetails extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { store : {}};
    }

    _onChange(){
        this.setState({store: StoresStore._selectedStore});
    }

    componentDidMount(){
        StoresStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        StoresStore.removeChangeListener(this._onChange)
    }

    render(){
        return (
            <>
            <div className="row">
                <table className="table table-bordered, table-striped">
                    <caption>Store Details</caption>
                    <tbody>
                    <tr>
                        <td>Address</td>
                        <td>{this.state.store.Address}, {this.state.store.City}, {this.state.store.Country}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{this.state.store.City}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{this.state.store.Country}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
                {this.state.store.inventory !== undefined &&
                    <div className="row"><h1>Movies</h1><br/>
                        <ul className="list-group">
                            {
                                this.state.store.inventory.map((movie) => {
                                    return (
                                        <li key={movie.filmId}
                                            className="list-group-item">
                                            {movie.title}
                                            </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </>
        )
    }
}

export default StoreDetails