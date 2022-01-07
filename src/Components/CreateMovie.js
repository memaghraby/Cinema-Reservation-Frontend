import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
//import "./CreateMovie.css";

/**
 * Create movie form
 * @extends Component
 */
export class CreateMovie extends Component {
    state={
        "file":"",
        "title":"",
        "events":[],
        "date":"",
        "startTime":"",
        "endTime":"",
        "screeningRoom":""
    }

    componentDidMount(){}


    addEvent(){
        let val = {
            "date":this.state.date,
            "startTime":this.state.startTime,
            "endTime":this.state.endTime,
            "screeningRoom":this.state.screeningRoom
        }
        this.state.events.push(val);
        //document.getElementsByName("screeningRoom").value = "";   //set visible values to empty
        this.setState({
            date:"",
            startTime:"",
            endTime:"",
            screeningRoom: ""
        });
        console.log(this.state.events);
    }

    removeEvent(i){
        let events = this.state.events;
        events.splice(i,1);
        this.setState({ events });
        console.log(this.state.events);
    }

    addMovie(){
        let val = {
            "file":this.state.file,
            "title":this.state.title,
            "events":this.state.events
        }
        console.log(val);
    }

    render() {
        return (
            <div id='create-movie-div' className='container-fluid' style={{textAlign: "left"}}>
                <h1>Add Movie</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title"  onChange={e => this.setState({ title: e.target.value })}/>
                    </Form.Group>

                    {
                        this.state.events.map((event, i)=>(
                            <div>
                                <Form.Label><b><big>Event {i+1}</big></b></Form.Label>
                                <Form.Group controlId="date" className="mb-3">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="date" placeholder="Date of Event" value={event.date} disabled/>
                                </Form.Group>
                                <Form.Group controlId="start" className="mb-3">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control type="time" name="startTime" placeholder="Start Time" value={event.startTime} disabled/>
                                </Form.Group>
                                <Form.Group controlId="end" className="mb-3">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control type="time" name="endTime" placeholder="End Time" value={event.endTime} disabled/>
                                </Form.Group>
                                <Form.Group controlId="screen" className="mb-3">
                                    <Form.Label>Screening Room</Form.Label>
                                    <Form.Control type="text" name="screeningRoom" placeholder="Screening Room" value={event.screeningRoom} disabled/>
                                </Form.Group>
                                <Button className="mb-3" variant="primary" onClick={this.removeEvent.bind(this, i)}>
                                    Delete Event {i+1}
                                </Button>
                            </div>
                        ))
                    }

                    <Form.Label><b><big>New Event</big></b></Form.Label>
                    <Form.Group controlId="date" className="mb-3">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date of Event" value={this.state.date} onChange={e => this.setState({ date: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="start" className="mb-3">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" name="startTime" placeholder="Start Time" value={this.state.startTime} onChange={e => this.setState({ startTime: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="end" className="mb-3">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" name="endTime" placeholder="End Time" value={this.state.endTime} onChange={e => this.setState({ endTime: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="screen" className="mb-3">
                        <Form.Label>Screening Room</Form.Label>
                        <Form.Control type="text" name="screeningRoom" placeholder="Screening Room" value={this.state.screeningRoom} onChange={e => this.setState({ screeningRoom: e.target.value })}/>
                    </Form.Group>
                    <Button className="mb-3" variant="primary" onClick={this.addEvent.bind(this)}>
                        Add Event
                    </Button>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Movie Image</Form.Label>
                        <Form.Control type="file"  onChange={e => this.setState({ file: e.target.value })}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.addMovie.bind(this)}>
                        Add Movie
                    </Button>
                </Form>
            </div>

        );
    }
}

export default CreateMovie
