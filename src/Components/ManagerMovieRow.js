import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieRow.css";
import Img from './image.jpg'
//import { Link } from "react-router-dom";

/**
 * Movie Row class
 * @extends Component
 */
export class ManagerMovieRow extends Component {
  state = {
    name: "",
    artists: [],
    id: "",
    movie_image: '',
    duration_ms: Number,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    console.log(this.props);
    // this.props.movie.artists.map((artist) =>
    //     this.setState({ artists: artist.name })
    // );
    this.setState({
        name: this.props.movie.name,
        id: this.props.movie.id,
        duration_ms: this.props.movie.duration_ms,
        movie_image: this.props.movie.image
    });
    this.millisToMinutesAndSeconds(this.props.movie.duration_ms);
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    this.setState({
      minutes: minutes,
      seconds: seconds,
    });
  }

  render() {
    return (
        <div id="movie-row-div" className="container-fluid">
            <div className="movie-row-image-div">
                <img className="movie-row-image" src={Img} alt="movie pic"/>
            </div>
            <div className="movie-row-details-div">
                <p className="movie-row-name"><big><b>{this.state.name}</b></big></p>
                <p className="movie-row-duration"><big>{this.state.minutes} mins</big></p>
            </div>
            <div className="movie-row-buttons-div">
                <button className="movie-row-button" name="VIEW">View</button>
                <button className="movie-row-button" name="EDIT">Edit</button>
            </div>
        </div>
    );
  }
}

ManagerMovieRow.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ManagerMovieRow;
