import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieRow.css";
import {ConfigContext} from '../Context/ConfigContext'
import axios from 'axios'

/**
 * Movie Row class
 * @extends Component
 */
export class ReservationRow extends Component {
  static contextType=ConfigContext;

  state = {
    "id": ""
  };

  componentDidMount() {
    this.setState({id: this.props.reservation.reservationid})
  }

  cancelReservation(){
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'id': localStorage.getItem('userId')
    }

    console.log("reservation id: ")
    console.log(this.state.id)
    axios.delete(this.context.baseURL+'/movies/customer/reserve',
    {
        headers: headers,
        data:{
          reservationid: this.state.id
        }
    })
    .then(res => {
        if(res.status===200) // Successful
        {
            if(res.data.success===true)
            {
                alert("Reservation Cancelled Successfully");
                window.location.reload(false);
            }
            else
            {
                this.setState({errorMessage: res.data.name});
            }
        }
        else
        {               }
    })
    .catch(err =>{
        alert(err)
    })
  }

  render() {
    return (
        <div id="movie-row-div" className="container-fluid">
            <div className="movie-row-image-div">
              <img className="movie-row-image" src={this.props.reservation.posterImage} alt="reservation pic"/>
            </div>
            <div className="movie-row-details-div">
              <p className="movie-row-name"><big><b>{this.props.reservation.title}</b></big></p>
              <p className="movie-row-duration"><big>{this.props.reservation.event.date}</big></p>
              <p className="movie-row-duration"><big>{this.props.reservation.event.startTime} - {this.props.reservation.event.endTime}</big></p>
            </div>
            <div className="movie-row-buttons-div">
                <button className="movie-row-button" name="Cancel" onClick={this.cancelReservation.bind(this)}>Cancel</button>
            </div>
        </div>
    );
  }
}

ReservationRow.propTypes = {
  reservation: PropTypes.object.isRequired,
};

export default ReservationRow;
