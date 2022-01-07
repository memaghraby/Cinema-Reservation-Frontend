import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieRow.css";
import Img from './image.jpg'
import { Link } from "react-router-dom";

/**
 * Movie Row class
 * @extends Component
 */
export class ReservationRow extends Component {
  state = {
    "name": "",
    "id": "",
    "time":Date,
    "reservation_image": '',
    "duration_ms": Number,
    "minutes": 0,
    "seconds": 0,
  };

  componentDidMount() {
    // this.props.reservation.artists.map((artist) =>
    //     this.setState({ artists: artist.name })
    // );
    this.setState({
        name: this.props.reservation.name,
        id: this.props.reservation.id,
        time: this.props.reservation.time,
        duration_ms: this.props.reservation.duration_ms,
        reservation_image: this.props.reservation.image
    });
    this.millisToMinutesAndSeconds(this.props.reservation.duration_ms);
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
              <img className="movie-row-image" src={Img} alt="reservation pic"/>
            </div>
            <div className="movie-row-details-div">
              <p className="movie-row-name"><big><b>{this.state.name}</b></big></p>
              <p className="movie-row-duration"><big>{this.state.minutes} mins</big></p>
              <p className="movie-row-duration"><big>{this.state.time}</big></p>
            </div>
            <div className="movie-row-buttons-div">
              <Link to="/MovieDetails">
                <button className="movie-row-button" name="Cancel">Cancel</button>
              </Link>
            </div>
        </div>
    );
  }
}

ReservationRow.propTypes = {
  reservation: PropTypes.object.isRequired,
};

export default ReservationRow;
