import React from 'react'
import movieStore from '../store/MovieStore'
import StoresStore from "../store/StoresStore";

class MovieInformationPanel extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { movie: null };
    }

    _onChange(){
        this.setState({movie : movieStore._selectedMovie});
    }

    componentDidMount(){
        movieStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        movieStore.removeChangeListener(this._onChange)
    }

    render(){
        if(this.state.movie === null){
            return (<p>Loading</p>)
        }
        return (
            <p>{this.state.movie['Title']}</p>
        )
    }
}

export default MovieInformationPanel;