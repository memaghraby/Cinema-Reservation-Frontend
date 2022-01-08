import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Seats.css";
import axios from 'axios'
import {ConfigContext} from '../Context/ConfigContext'

/**
 * Movie Row className
 * @extends Component
 */
export class CustomerSeats extends Component {
    static contextType=ConfigContext;

    state = {
        "selected_seats": []
    }

    componentDidMount() {}

    seatClicked = (e) => {
        if (this.props.seats.includes(e.target.id)){
            alert("Already reserved");
            return;
        }
        var index = this.state.selected_seats.indexOf(e.target.id);
        if (index !== -1){
            this.state.selected_seats.splice(index, 1);
            document.getElementById(e.target.id).classList.remove('active');
        }
        else{
            this.state.selected_seats.push(e.target.id);
            document.getElementById(e.target.id).classList.add('active');
        }
    };

    reserveSeats(){
        if(this.props.event_id === ""){
            alert("select event");
            return
        }
        if(this.state.selected_seats.length === 0){
            alert("Select seats");
            return;
        }
        const eventid = this.props.event_id
        const movieid = localStorage.getItem("movie_id")
        console.log(localStorage.getItem('userId'))
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'id': localStorage.getItem('userId')
        }

        axios.post(this.context.baseURL+'/movies/customer/reserve',
        {
            "movieid": movieid,
            "eventid": eventid,
            "seatsindices": this.state.selected_seats
        },
        {
            headers: headers
        })
        .then(res => {
            if(res.status===200) // Successful
            {

                if(res.data.success===true)
                {
                    this.setState({
                        selected_seats: []
                    })
                    this.props.reserveSeats()
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
            <div className="container-fluid">
                <div id="theatre">
                    <div className="cinema-seats left">
                        <div className="cinema-row row-1">
                            <div className={this.props.seats.includes("A1")? "seat reserved" : "seat"} id="A1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B1")? "seat reserved" : "seat"} id="B1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C1")? "seat reserved" : "seat"} id="C1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D1")? "seat reserved" : "seat"} id="D1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E1")? "seat reserved" : "seat"} id="E1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F1")? "seat reserved" : "seat"} id="F1" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G1")? "seat reserved" : "seat"} id="G1" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-2">
                            <div className={this.props.seats.includes("A2")? "seat reserved" : "seat"} id="A2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B2")? "seat reserved" : "seat"} id="B2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C2")? "seat reserved" : "seat"} id="C2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D2")? "seat reserved" : "seat"} id="D2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E2")? "seat reserved" : "seat"} id="E2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F2")? "seat reserved" : "seat"} id="F2" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G2")? "seat reserved" : "seat"} id="G2" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-3">
                            <div className={this.props.seats.includes("A3")? "seat reserved" : "seat"} id="A3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B3")? "seat reserved" : "seat"} id="B3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C3")? "seat reserved" : "seat"} id="C3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D3")? "seat reserved" : "seat"} id="D3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E3")? "seat reserved" : "seat"} id="E3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F3")? "seat reserved" : "seat"} id="F3" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G3")? "seat reserved" : "seat"} id="G3" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-4">
                            <div className={this.props.seats.includes("A4")? "seat reserved" : "seat"} id="A4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B4")? "seat reserved" : "seat"} id="B4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C4")? "seat reserved" : "seat"} id="C4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D4")? "seat reserved" : "seat"} id="D4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E4")? "seat reserved" : "seat"} id="E4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F4")? "seat reserved" : "seat"} id="F4" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G4")? "seat reserved" : "seat"} id="G4" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-5">
                            <div className={this.props.seats.includes("A5")? "seat reserved" : "seat"} id="A5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B5")? "seat reserved" : "seat"} id="B5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C5")? "seat reserved" : "seat"} id="C5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D5")? "seat reserved" : "seat"} id="D5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E5")? "seat reserved" : "seat"} id="E5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F5")? "seat reserved" : "seat"} id="F5" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G5")? "seat reserved" : "seat"} id="G5" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-6">
                            <div className={this.props.seats.includes("A6")? "seat reserved" : "seat"} id="A6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B6")? "seat reserved" : "seat"} id="B6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C6")? "seat reserved" : "seat"} id="C6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D6")? "seat reserved" : "seat"} id="D6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E6")? "seat reserved" : "seat"} id="E6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F6")? "seat reserved" : "seat"} id="F6" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G6")? "seat reserved" : "seat"} id="G6" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-7">
                            <div className={this.props.seats.includes("A7")? "seat reserved" : "seat"} id="A7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B7")? "seat reserved" : "seat"} id="B7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C7")? "seat reserved" : "seat"} id="C7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D7")? "seat reserved" : "seat"} id="D7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E7")? "seat reserved" : "seat"} id="E7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F7")? "seat reserved" : "seat"} id="F7" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G7")? "seat reserved" : "seat"} id="G7" onClick={this.seatClicked}></div>
                        </div>
                    </div>


                    <div className="cinema-seats right">
                        <div className="cinema-row row-1">
                            <div className={this.props.seats.includes("A8")? "seat reserved" : "seat"} id="A8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B8")? "seat reserved" : "seat"} id="B8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C8")? "seat reserved" : "seat"} id="C8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D8")? "seat reserved" : "seat"} id="D8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E8")? "seat reserved" : "seat"} id="E8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F8")? "seat reserved" : "seat"} id="F8" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G8")? "seat reserved" : "seat"} id="G8" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-2">
                            <div className={this.props.seats.includes("A9")? "seat reserved" : "seat"} id="A9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B9")? "seat reserved" : "seat"} id="B9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C9")? "seat reserved" : "seat"} id="C9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D9")? "seat reserved" : "seat"} id="D9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E9")? "seat reserved" : "seat"} id="E9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F9")? "seat reserved" : "seat"} id="F9" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G9")? "seat reserved" : "seat"} id="G9" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-3">
                            <div className={this.props.seats.includes("A10")? "seat reserved" : "seat"} id="A10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B10")? "seat reserved" : "seat"} id="B10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C10")? "seat reserved" : "seat"} id="C10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D10")? "seat reserved" : "seat"} id="D10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E10")? "seat reserved" : "seat"} id="E10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F10")? "seat reserved" : "seat"} id="F10" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G10")? "seat reserved" : "seat"} id="G10" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-4">
                            <div className={this.props.seats.includes("A11")? "seat reserved" : "seat"} id="A11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B11")? "seat reserved" : "seat"} id="B11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C11")? "seat reserved" : "seat"} id="C11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D11")? "seat reserved" : "seat"} id="D11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E11")? "seat reserved" : "seat"} id="E11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F11")? "seat reserved" : "seat"} id="F11" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G11")? "seat reserved" : "seat"} id="G11" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-5">
                            <div className={this.props.seats.includes("A12")? "seat reserved" : "seat"} id="A12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B12")? "seat reserved" : "seat"} id="B12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C12")? "seat reserved" : "seat"} id="C12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D12")? "seat reserved" : "seat"} id="D12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E12")? "seat reserved" : "seat"} id="E12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F12")? "seat reserved" : "seat"} id="F12" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G12")? "seat reserved" : "seat"} id="G12" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-6">
                            <div className={this.props.seats.includes("A13")? "seat reserved" : "seat"} id="A13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B13")? "seat reserved" : "seat"} id="B13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C13")? "seat reserved" : "seat"} id="C13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D13")? "seat reserved" : "seat"} id="D13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E13")? "seat reserved" : "seat"} id="E13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F13")? "seat reserved" : "seat"} id="F13" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G13")? "seat reserved" : "seat"} id="G13" onClick={this.seatClicked}></div>
                        </div>

                        <div className="cinema-row row-7">
                            <div className={this.props.seats.includes("A14")? "seat reserved" : "seat"} id="A14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("B14")? "seat reserved" : "seat"} id="B14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("C14")? "seat reserved" : "seat"} id="C14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("D14")? "seat reserved" : "seat"} id="D14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("E14")? "seat reserved" : "seat"} id="E14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("F14")? "seat reserved" : "seat"} id="F14" onClick={this.seatClicked}></div>
                            <div className={this.props.seats.includes("G14")? "seat reserved" : "seat"} id="G14" onClick={this.seatClicked}></div>
                        </div>
                    </div>
                </div>
                <div className='seats-button-div'>
                    <button className="seats-button" name="RESERVE" onClick={this.reserveSeats.bind(this)}>Reserve</button>
                </div>
            </div>
        );
    }
}

export default CustomerSeats;
