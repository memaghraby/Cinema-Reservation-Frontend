import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ConfigContext } from '../Context/ConfigContext'
//import "./EditMovie.css";

/**
 * Create movie form
 * @extends Component
 */
export class EditMovie extends Component {
    static contextType = ConfigContext;

    state = {
        "name": "",
        "movie_image": '',
        "events": [],
        "eventid": "",
        "screenid": "",
        "seats": []
    };

    screens = JSON.parse(localStorage.getItem("screenids"))

    componentDidMount() {
        this.movieDetails();
    }

    movieDetails() {
        const id = localStorage.getItem("movie_id");
        axios.get(this.context.baseURL + '/movies/manager/details/' + id
        ).then(res => {
            console.log(res.data);
            if (res.status === 200) // Successful
            {

                if (res.data.success === true) {
                    this.setState({
                        eventid: res.data.movie.events[0]._id,
                        screenid: res.data.movie.events[0].screeningRoom,
                        id: res.data.movie._id,
                        name: res.data.movie.title,
                        movie_image: res.data.movie.posterImage,
                        events: res.data.movie.events
                    });
                    this.setState({ poster: null });
                    console.log(res.data.movie.events);
                }
                else {
                    this.setState({ errorMessage: res.data.name });
                }
            }
            else { }
        }).catch(err => {
            alert(err)
        })
    }

    selectPoster(e) {
        console.log(e.target.files);
        if (e.target.files && e.target.files.length) {
            let url = URL.createObjectURL(e.target.files[0]);
            document.getElementById("movie-image").src = url;
            this.setState({ poster: e.target.files[0] });
        }
    }

    openInputFile() {
        document.getElementById("select-poster").click();
    }

    updateMovie() {
        var movieFormData = new FormData();
        if (document.getElementById("select-poster").files.length > 0)
            movieFormData.append("file", document.getElementById("select-poster").files[0]);

        movieFormData.append("title", document.getElementById('movie-title').value);

        var event = null
        if (document.getElementById('movie-date').value !== '' &&
            document.getElementById('movie-start').value !== '' &&
            document.getElementById('movie-end').value !== '' &&
            document.getElementById('movie-room').value !== '-1') {
            event = [{
                date: new Date(document.getElementById('movie-date').value).toLocaleDateString('en-US'),
                startTime: document.getElementById('movie-start').value,
                endTime: document.getElementById('movie-end').value,
                screeningRoom: document.getElementById('movie-room').value
            }];
        }
        if (event != null)
            movieFormData.append("events", JSON.stringify(event));

        const id = localStorage.getItem("movie_id");

        axios.patch('/movies/manager/details/' + id, movieFormData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            console.log(response.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error.response);
        });
    }

    render() {
        return (
            <div id='create-movie-div' className='container-fluid' style={{ textAlign: "left" }}>
                <div id='movie-details-div-id' className='container-fluid'>
                    <div className='row'>
                        <div className="col-6">
                            <input type="file" id="select-poster" accept="image/*" hidden={true} onChange={this.selectPoster.bind(this)} />
                            <img id="movie-image" className="movie-image " src={this.state.movie_image} alt="movie pic" onClick={this.openInputFile.bind()} />
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="movie-title" className="form-label fs-2">Title:</label>
                                <input type="text" className="form-control" id="movie-title" placeholder="Movie Title" defaultValue={this.state.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="movie-title" className="form-label fs-2">Events:</label>
                                <div className='row border rounded m-1 p-2'>
                                    {this.state.events.map((event, idx) => {
                                        return (
                                            <div className='col-12 my-1 py-2' key={event._id}>
                                                <div className='row border rounded d-flex align-items-center'>
                                                    <div className='col-4'>
                                                        <p className='m-0'>{Object.keys(this.screens)[Object.values(this.screens).findIndex(item => item == event.screeningRoom)]}</p>
                                                    </div>
                                                    <div className='col-4'>
                                                        <p className='m-0'>{new Date(event.date).toLocaleDateString("en-UK")}</p>
                                                    </div>
                                                    <div className='col-4'>
                                                        <p className='m-0'>From: {new Date("1/1/1999 " + event.startTime).toLocaleTimeString()} <br /> To: &nbsp;&nbsp;&nbsp;&nbsp; {new Date("1/1/1999 " + event.endTime).toLocaleTimeString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="mb-3">
                                <p htmlFor="movie-title" className="form-label fs-2">Add Event:</p>
                                <label htmlFor="movie-title" className="form-label">Date:</label>
                                <input type="date" className="form-control" id="movie-date" placeholder="Movie Date" />
                                <div className='row mt-2'>
                                    <div className='col-6'>
                                        <label htmlFor="movie-start" className="form-label">Start Time:</label>
                                        <input type="time" className="form-control" id="movie-start" placeholder="Movie Start Time" />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="movie-end" className="form-label">End Time:</label>
                                        <input type="time" className="form-control" id="movie-end" placeholder="Movie Start End" />
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor='movie-room' className='form-label'>Select Room:</label>
                                        <select className='form-control' id="movie-room">
                                            <option selected={true} disabled value="-1">SELECT AN OPTION</option>
                                            {Object.values(this.screens).map((screen, idx) => {
                                                // if (!this.state.events.find(event => event.screeningRoom == Object.values(this.screens)[idx])) {
                                                return (
                                                    <option key={screen} value={screen}>{Object.keys(this.screens)[idx]}</option>
                                                );
                                                // }
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary btn-lg float-end' onClick={this.updateMovie.bind()}>
                                Update Movie
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default EditMovie;
