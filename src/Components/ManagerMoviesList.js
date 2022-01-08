import React, { Component } from 'react'
import ManagerMovieRow from './ManagerMovieRow.js'
import NavBar from '../Components/Navbar'
import "./MoviesList.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ConfigContext } from '../Context/ConfigContext'
/**
 * List of movies in an album or playlist
 * @extends Component
 */
export class ManagerMoviesList extends Component {
    static contextType = ConfigContext;
    state = {
        "movies": []
    }

    componentDidMount() {
        axios.get(this.context.baseURL + '/movies/guest'
        ).then(res => {
            console.log(res.data);
            if (res.status === 200) // Successful
            {

                if (res.data.success === true) {
                    this.setState({ movies: res.data.movies });
                }
                else {
                    this.setState({ errorMessage: res.data.name });
                }
            }
            else { }
        }).catch(err => { alert(err) })
    }

    render() {
        return (
            <div id='movies-list-div' className='container-fluid'>
                <NavBar></NavBar>
                <div>
                    <hr />
                    {
                        this.state.movies.map((movie) => (
                            <ManagerMovieRow movie={movie} />
                        ))
                    }
                    <hr />
                </div>
                <div className='movie-list-button-div'>
                    <Link to="/createmovie">
                        <button className="movie-list-button" name="ADD MOVIE">Add Movie</button>
                    </Link>
                </div>
            </div>
        );
    }
}

ManagerMoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default ManagerMoviesList
