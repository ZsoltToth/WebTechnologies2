import React from 'react'
import movieStore from '../store/MovieStore'
import ActorActions from "../actions/ActorActions";

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
        console.log(this.state.movie)
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <p>{this.state.movie['Title']} <span className="float-right badge-info">{this.state.movie['Rating']}</span></p>
                </div>
            </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            {this.state.movie['Length']} mins,
                            {this.state.movie['Category']},
                            Special Features: <i>{this.state.movie['Special Features']}</i>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span>
                            {
                                this.state.movie['Actors'].map((actor)=>{
                                   return (<span
                                       key={actor['actorId']}
                                       onClick={()=>{ActorActions.showActor(actor['actorId'])}}>
                                       <i className="text-capitalize">{actor['First name'].toLowerCase()} {actor['Last name'].toLowerCase()}</i>
                                   </span> )
                                })
                            }
                        </span>

                    </div>
                </div>
            <div className="row">
                <div className="col-12">
                    <p>{this.state.movie['Description']}</p>
                </div>
            </div>
                </>
        )
    }
}

export default MovieInformationPanel;