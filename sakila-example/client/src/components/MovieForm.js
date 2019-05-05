import React from 'react'
import MovieActions from "../actions/MovieActions";
import MovieStore from "../store/MovieStore";

class MovieForm extends React.Component{

    constructor(props) {
        super(props);
        // MovieActions.fetchRatings();
        // MovieActions.fetchCategories();
        this._onChange = this._onChange.bind(this);
        this.state = {
            ratings : MovieStore._ratings,
            categories : MovieStore._categories,
            movie : {
                title : "",
                rating : "",
                category : "",
                description : ""
            }
        }

    }

    _onChange(){
        this.setState({categories : MovieStore._categories});
    }

    componentDidMount(){
        MovieStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        MovieStore.removeChangeListener(this._onChange)
    }

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">Title</div>
                        <div className="col-8"><input type="text"/></div>
                    </div>
                    <div className="row">
                        <div className="col-4">Rating</div>
                        <div className="col-8">
                            <select
                                onChange={(event)=>{
                                    this.state.movie.rating = event.target.value
                                    this.setState({movie : this.state.movie});
                                }}
                            >
                                <option defaultValue={null} label="---"></option>
                                {this.state.ratings.map((rating)=>{
                                    return (
                                        <option key={rating} value={rating}>
                                            {rating}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">Category</div>
                        <div className="col-8">
                            <select defaultValue="Category"
                                onChange={(event)=>{
                                    this.state.movie.category = event.target.value
                                    this.setState({movie : this.state.movie});
                            }}>
                                <option defaultValue={null} label="---"></option>
                                {this.state.categories.map((category)=>{
                                    return (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">Description</div>
                        <div className="col-8"><input type="text"/></div>
                    </div>

                    <button
                        onClick={()=>{MovieActions.addMovie(this.state.movie)}}
                        className="btn btn-success">
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieForm