import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ConfigContext } from '../Context/ConfigContext'
//import "./CreateMovie.css";

/**
 * Create movie form
 * @extends Component
 */
export class CreateMovie extends Component {
    static contextType = ConfigContext;
    state = {
        "file": "",
        "title": "",
        "events": [],
        "date": "",
        "startTime": "",
        "endTime": "",
        "screeningRoom": "",
        "screens": JSON.parse(localStorage.getItem("screenids"))
    }

    componentDidMount() { }


    addEvent() {
        let val = {
            "date": new Date(this.state.date).toLocaleDateString('en-US'),
            "startTime": this.state.startTime,
            "endTime": this.state.endTime,
            "screeningRoom": this.state.screeningRoom
        }
        this.state.events.push(val);
        //document.getElementsByName("screeningRoom").value = "";   //set visible values to empty
        this.setState({
            date: "",
            startTime: "",
            endTime: "",
            screeningRoom: ""
        });
        console.log(this.state.events);
        document.getElementById('screen-room').value = '-1'
    }

    removeEvent(i) {
        let events = this.state.events;
        events.splice(i, 1);
        this.setState({ events });
        console.log(this.state.events);
    }

    addMovie(e) {
        let val = {
            "file": this.state.file,
            "title": this.state.title,
            "events": this.state.events
        }
        console.log(val);
        var movieFormData = new FormData();
        movieFormData.append("file", val.file);
        movieFormData.append("title", val.title);
        movieFormData.append("events", JSON.stringify(val.events));

        axios.post(this.context.baseURL + '/movies/manager/add', movieFormData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            if(res.status===200) // Successful
            {
                
                if(res.data.success===true)
                {
                    alert("Movie added")
                    window.location.reload(false);
                }
                else
                {
                    this.setState({errorMessage: res.data.name});
                }
            }
        }).catch((error) => {
            console.log(error.res);
        });
        return false;
    }

    render() {
        return (
            <div id='create-movie-div' className='container-fluid' style={{ textAlign: "left" }}>
                <h1>Add Movie</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={e => this.setState({ title: e.target.value })} />
                    </Form.Group>

                    {
                        this.state.events.map((event, i) => (
                            <div key={i}>
                                <Form.Label><b><big>Event {i + 1}</big></b></Form.Label>
                                <Form.Group controlId="date" className="mb-3">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="text" name="date" placeholder="Date of Event" value={event.date} disabled />
                                </Form.Group>
                                <Form.Group controlId="start" className="mb-3">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control type="time" name="startTime" placeholder="Start Time" value={event.startTime} disabled />
                                </Form.Group>
                                <Form.Group controlId="end" className="mb-3">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control type="time" name="endTime" placeholder="End Time" value={event.endTime} disabled />
                                </Form.Group>
                                <Form.Group controlId="screen" className="mb-3">
                                    <Form.Label>Screening Room</Form.Label>
                                    <Form.Control type="text" name="screeningRoom" placeholder="Screening Room" value={event.screeningRoom} disabled />
                                </Form.Group>
                                <Button className="mb-3" variant="primary" onClick={this.removeEvent.bind(this, i)}>
                                    Delete Event {i + 1}
                                </Button>
                            </div>
                        ))
                    }

                    <Form.Label><b><big>New Event</big></b></Form.Label>
                    <Form.Group controlId="date" className="mb-3">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date of Event" value={this.state.date} onChange={e => this.setState({ date: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="start" className="mb-3">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" name="startTime" placeholder="Start Time" value={this.state.startTime} onChange={e => this.setState({ startTime: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="end" className="mb-3">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" name="endTime" placeholder="End Time" value={this.state.endTime} onChange={e => this.setState({ endTime: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="screen" className="mb-3">
                        <Form.Label>Screening Room</Form.Label>
                        <Form.Control id='screen-room' as="select" name="screeningRoom" placeholder="Screening Room" onChange={e => this.setState({ screeningRoom: e.target.value })} defaultValue={-1}>
                            <option selected={true} disabled value="-1">SELECT AN OPTION</option>
                            {Object.values(this.state.screens).map((screen, idx) => {
                                return (
                                    <option key={screen} value={screen}>{Object.keys(this.state.screens)[idx]}</option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Button className="mb-3" variant="primary" onClick={this.addEvent.bind(this)}>
                        Add Event
                    </Button>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Movie Image</Form.Label>
                        <Form.Control type="file" onChange={e => this.setState({ file: e.target.files[0] })} />
                    </Form.Group>

                    <Button variant="primary" onClick={this.addMovie.bind(this)}>
                        Add Movie
                    </Button>
                </Form>
            </div>

        );
    }
}

export default CreateMovie
