import React, { Component } from 'react'
import Seats from './Seats.js'
import NavBar from '../Components/Navbar'
import Img from './image.jpg'
import "./MovieDetails.css";
import { ConfigContext } from '../Context/ConfigContext'

/**
 * Movie Details
 * @extends Component
 */
export class ManagerMovieDetails extends Component {
    static contextType = ConfigContext;

    state = {
        "name": "SpiderMan",
        "artists": [],
        "id": "",
        "movie_image": '',
        "movie_times": ['5pm', '9pm', '12am'],
        "duration_ms": Number,
        "minutes": 120,
        "seconds": 0,
    };

    componentDidMount() { }

    render() {
        return (
            <div id='movie-details-div-id' className='container-fluid'>
                <NavBar></NavBar>
                <div className='movie-details-div'>
                    <div className="movie-image-div">
                        <img className="movie-image" src={Img} alt="movie pic" />
                    </div>
                    <div className="movie-name-div">
                        <p className="movie-name"><big><b>{this.state.name}</b></big></p>
                        <p className="movie-duration"><big>{this.state.minutes} mins</big></p>
                        <select name="times" id="times">
                            {
                                this.state.movie_times.map((movie_time) => (
                                    <option key={movie_time} value={movie_time}>{movie_time}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <hr />
                <div className='seats-layout-div'>
                    <Seats />
                </div>
                <hr />
                <div className='movie-details-button-div'>
                    <button className="movie-details-button" name="EDIT MOVIE">Edit Movie</button>
                </div>
            </div>
        );
    }
}

export default ManagerMovieDetails
