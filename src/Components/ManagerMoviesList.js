import React, { Component } from 'react'
import ManagerMovieRow from './ManagerMovieRow.js'
import NavBar from '../Components/Navbar'
import "./MoviesList.css";
import PropTypes from 'prop-types';

/**
 * List of movies in an album or playlist
 * @extends Component
 */
export class ManagerMoviesList extends Component {
    state={
        "movies":[
            {
                name:'SpiderMan',
                id:'1',
                duration_ms:7000000
            },
            {
                name:'BatMan',
                id:'2',
                duration_ms:7200000
            },
            {
                name:'SuperMan',
                id:'3',
                duration_ms:8000000
            }
        ]
    }

    componentDidMount(){
        console.log("movie list", this.props);
    }
    
    render() {
        return (
            <div id='movies-list-div' className='container-fluid'>
                <NavBar></NavBar>
                <div>
                    <hr/>
                    {
                        this.state.movies.map((movie) => (
                            <ManagerMovieRow movie={movie} />
                        ))
                    }
                    <hr/>
                </div>
                <div className='movie-list-button-div'>
                    <button className="movie-list-button" name="ADD MOVIE">Add Movie</button>
                </div>
            </div>
        );
    }
}

ManagerMoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default ManagerMoviesList
