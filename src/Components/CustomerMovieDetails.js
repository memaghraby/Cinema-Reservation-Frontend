import React, { Component } from 'react'
import CustomerSeats from './CustomerSeats.js'
import Img from './image.jpg'
import "./MovieDetails.css";
import axios from 'axios'
import NavBar from '../Components/Navbar'
import {ConfigContext} from '../Context/ConfigContext'

/**
 * Movie Details
 * @extends Component
 */
export class CustomerMovieDetails extends Component {
    static contextType=ConfigContext;

    state = {
        "name": "SpiderMan",
        "movie_image": '',
        "events":[],
        "eventid":"",
        "screenid":"",
        "seats":[]
    };

    componentDidMount(){
        this.movieDetails();
    }
    
    handleChange = (e) => {
        let eventId = e.target.value;
        let screenId = this.state.events.find(event => event._id === eventId).screeningRoom;
        this.setState({
            eventid: eventId,
            screenid: screenId
        })

        axios.get(this.context.baseURL+'/movies/seats',{
            headers:{
            "screenid": screenId,
            "eventid": eventId}
        })
        .then(res => {
            console.log("inside view seats res");
            console.log(res.data);
            if(res.status===200) // Successful
            {
                if(res.data.success===true)
                {
                    this.setState({
                        seats: (res.data.hasOwnProperty('seats')) ? res.data.seats : []
                    });
                }
                else
                {
                    this.setState({errorMessage: res.data.name});
                }
            }
            else
            {               }}).catch(err =>{alert(err)
        })
    };

    movieDetails(){
        const id = localStorage.getItem("movie_id");
        axios.get(this.context.baseURL+'/movies/manager/details/'+id
        ).then(res => {
            console.log(res.data);
            if(res.status===200) // Successful
            {
                
                if(res.data.success===true)
                {
                    this.setState({
                        eventid: res.data.movie.events[0]._id,
                        screenid: res.data.movie.events[0].screeningRoom,
                        id: res.data.movie._id,
                        name: res.data.movie.title,
                        movie_image: res.data.movie.posterImage,
                        events: res.data.movie.events
                    });
                }
                else
                {
                    this.setState({errorMessage: res.data.name});
                }
            }
            else
            {               }}).catch(err =>{alert(err)
        })
    }

    reserveSeats(){
        window.location.reload(false);
    }
    
    render() {
        return (
            <div id='movie-details-div-id' className='container-fluid'>
                <NavBar></NavBar>
                <div className='movie-details-div'>
                    <div className="movie-image-div">
                        <img className="movie-image" src={this.state.movie_image} alt="movie pic"/>
                    </div>
                    <div className="movie-name-div">
                        <p className="movie-name"><big><b>{this.state.name}</b></big></p>
                        <select name="times" id="times" onChange={this.handleChange} >
                            <option value="">Choose Event</option>
                            {
                                this.state.events.map((event) => (
                                    <option value={event._id}>{event.date + " " + event.startTime + " - " + event.endTime}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <hr/>
                <div className='seats-layout-div'>
                    <CustomerSeats reserveSeats={this.reserveSeats} event_id={this.state.eventid} seats={this.state.seats}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default CustomerMovieDetails
