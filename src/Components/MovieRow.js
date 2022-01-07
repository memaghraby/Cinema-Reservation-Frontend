import React, { Component } from "react";
import PropTypes from "prop-types";
import {ConfigContext} from '../Context/ConfigContext'
import "./MovieRow.css";
import Img from './image.jpg'
import { Link } from "react-router-dom";

/**
 * Movie Row class
 * @extends Component
 */
export class MovieRow extends Component {
  static contextType=ConfigContext;

  state = {
    "name": "",
    "id": "",
    "movie_image": '',
    "events":[]
  };

  componentDidMount() {
    console.log(this.props);
    // this.props.movie.artists.map((artist) =>
    //     this.setState({ artists: artist.name })
    // );
    this.setState({
        name: this.props.movie.title,
        id: this.props.movie._id,
        events: this.props.movie.events,
        movie_image: this.props.movie.posterImage
    });
  }

  handleClick = (e) => {
    localStorage.setItem("movie_id", this.state.id);
  };

  render() {
    return (
        <div id="movie-row-div" className="container-fluid">
            <div className="movie-row-image-div">
              <img className="movie-row-image" src={this.state.movie_image} alt="movie pic"/>
            </div>
            <div className="movie-row-details-div">
              <p className="movie-row-name"><big><b>{this.state.name}</b></big></p>
            </div>
            <div className="movie-row-buttons-div">
              <Link to={"/moviedetails/"+this.state.id} onClick={this.handleClick}>
                <button className="movie-row-button" name="VIEW">View</button>
              </Link>
            </div>
        </div>
    );
  }
}

MovieRow.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieRow;
