import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Seats.css";

/**
 * Movie Row className
 * @extends Component
 */
export class Seats extends Component {
    state = {
        "selected_seats": []
    }

    componentDidMount() {}

    render() {
        return (
            <div id="theatre" className="container-fluid">
                <div className="cinema-seats left">
                    <div className="cinema-row row-1">
                    <div className={this.props.seats.includes("A1")? "seat reserved" : "seat"} id="A1" ></div>
                    <div className={this.props.seats.includes("B1")? "seat reserved" : "seat"} id="B1" ></div>
                    <div className={this.props.seats.includes("C1")? "seat reserved" : "seat"} id="C1" ></div>
                    <div className={this.props.seats.includes("D1")? "seat reserved" : "seat"} id="D1" ></div>
                    <div className={this.props.seats.includes("E1")? "seat reserved" : "seat"} id="E1" ></div>
                    <div className={this.props.seats.includes("F1")? "seat reserved" : "seat"} id="F1" ></div>
                    <div className={this.props.seats.includes("G1")? "seat reserved" : "seat"} id="G1" ></div>
                    </div>

                    <div className="cinema-row row-2">
                    <div className={this.props.seats.includes("A2")? "seat reserved" : "seat"} id="A2" ></div>
                    <div className={this.props.seats.includes("B2")? "seat reserved" : "seat"} id="B2" ></div>
                    <div className={this.props.seats.includes("C2")? "seat reserved" : "seat"} id="C2" ></div>
                    <div className={this.props.seats.includes("D2")? "seat reserved" : "seat"} id="D2" ></div>
                    <div className={this.props.seats.includes("E2")? "seat reserved" : "seat"} id="E2" ></div>
                    <div className={this.props.seats.includes("F2")? "seat reserved" : "seat"} id="F2" ></div>
                    <div className={this.props.seats.includes("G2")? "seat reserved" : "seat"} id="G2" ></div>
                    </div>

                    <div className="cinema-row row-3">
                    <div className={this.props.seats.includes("A3")? "seat reserved" : "seat"} id="A3" ></div>
                    <div className={this.props.seats.includes("B3")? "seat reserved" : "seat"} id="B3" ></div>
                    <div className={this.props.seats.includes("C3")? "seat reserved" : "seat"} id="C3" ></div>
                    <div className={this.props.seats.includes("D3")? "seat reserved" : "seat"} id="D3" ></div>
                    <div className={this.props.seats.includes("E3")? "seat reserved" : "seat"} id="E3" ></div>
                    <div className={this.props.seats.includes("F3")? "seat reserved" : "seat"} id="F3" ></div>
                    <div className={this.props.seats.includes("G3")? "seat reserved" : "seat"} id="G3" ></div>
                    </div>

                    <div className="cinema-row row-4">
                    <div className={this.props.seats.includes("A4")? "seat reserved" : "seat"} id="A4" ></div>
                    <div className={this.props.seats.includes("B4")? "seat reserved" : "seat"} id="B4" ></div>
                    <div className={this.props.seats.includes("C4")? "seat reserved" : "seat"} id="C4" ></div>
                    <div className={this.props.seats.includes("D4")? "seat reserved" : "seat"} id="D4" ></div>
                    <div className={this.props.seats.includes("E4")? "seat reserved" : "seat"} id="E4" ></div>
                    <div className={this.props.seats.includes("F4")? "seat reserved" : "seat"} id="F4" ></div>
                    <div className={this.props.seats.includes("G4")? "seat reserved" : "seat"} id="G4" ></div>
                    </div>

                    <div className="cinema-row row-5">
                    <div className={this.props.seats.includes("A5")? "seat reserved" : "seat"} id="A5" ></div>
                    <div className={this.props.seats.includes("B5")? "seat reserved" : "seat"} id="B5" ></div>
                    <div className={this.props.seats.includes("C5")? "seat reserved" : "seat"} id="C5" ></div>
                    <div className={this.props.seats.includes("D5")? "seat reserved" : "seat"} id="D5" ></div>
                    <div className={this.props.seats.includes("E5")? "seat reserved" : "seat"} id="E5" ></div>
                    <div className={this.props.seats.includes("F5")? "seat reserved" : "seat"} id="F5" ></div>
                    <div className={this.props.seats.includes("G5")? "seat reserved" : "seat"} id="G5" ></div>
                    </div>

                    <div className="cinema-row row-6">
                    <div className={this.props.seats.includes("A6")? "seat reserved" : "seat"} id="A6" ></div>
                    <div className={this.props.seats.includes("B6")? "seat reserved" : "seat"} id="B6" ></div>
                    <div className={this.props.seats.includes("C6")? "seat reserved" : "seat"} id="C6" ></div>
                    <div className={this.props.seats.includes("D6")? "seat reserved" : "seat"} id="D6" ></div>
                    <div className={this.props.seats.includes("E6")? "seat reserved" : "seat"} id="E6" ></div>
                    <div className={this.props.seats.includes("F6")? "seat reserved" : "seat"} id="F6" ></div>
                    <div className={this.props.seats.includes("G6")? "seat reserved" : "seat"} id="G6" ></div>
                    </div>

                    <div className="cinema-row row-7">
                    <div className={this.props.seats.includes("A7")? "seat reserved" : "seat"} id="A7" ></div>
                    <div className={this.props.seats.includes("B7")? "seat reserved" : "seat"} id="B7" ></div>
                    <div className={this.props.seats.includes("C7")? "seat reserved" : "seat"} id="C7" ></div>
                    <div className={this.props.seats.includes("D7")? "seat reserved" : "seat"} id="D7" ></div>
                    <div className={this.props.seats.includes("E7")? "seat reserved" : "seat"} id="E7" ></div>
                    <div className={this.props.seats.includes("F7")? "seat reserved" : "seat"} id="F7" ></div>
                    <div className={this.props.seats.includes("G7")? "seat reserved" : "seat"} id="G7" ></div>
                    </div>
                </div>


                <div className="cinema-seats right">
                    <div className="cinema-row row-1">
                    <div className={this.props.seats.includes("A8")? "seat reserved" : "seat"} id="A8" ></div>
                    <div className={this.props.seats.includes("B8")? "seat reserved" : "seat"} id="B8" ></div>
                    <div className={this.props.seats.includes("C8")? "seat reserved" : "seat"} id="C8" ></div>
                    <div className={this.props.seats.includes("D8")? "seat reserved" : "seat"} id="D8" ></div>
                    <div className={this.props.seats.includes("E8")? "seat reserved" : "seat"} id="E8" ></div>
                    <div className={this.props.seats.includes("F8")? "seat reserved" : "seat"} id="F8" ></div>
                    <div className={this.props.seats.includes("G8")? "seat reserved" : "seat"} id="G8" ></div>
                    </div>

                    <div className="cinema-row row-2">
                    <div className={this.props.seats.includes("A9")? "seat reserved" : "seat"} id="A9" ></div>
                    <div className={this.props.seats.includes("B9")? "seat reserved" : "seat"} id="B9" ></div>
                    <div className={this.props.seats.includes("C9")? "seat reserved" : "seat"} id="C9" ></div>
                    <div className={this.props.seats.includes("D9")? "seat reserved" : "seat"} id="D9" ></div>
                    <div className={this.props.seats.includes("E9")? "seat reserved" : "seat"} id="E9" ></div>
                    <div className={this.props.seats.includes("F9")? "seat reserved" : "seat"} id="F9" ></div>
                    <div className={this.props.seats.includes("G9")? "seat reserved" : "seat"} id="G9" ></div>
                    </div>

                    <div className="cinema-row row-3">
                    <div className={this.props.seats.includes("A10")? "seat reserved" : "seat"} id="A10" ></div>
                    <div className={this.props.seats.includes("B10")? "seat reserved" : "seat"} id="B10" ></div>
                    <div className={this.props.seats.includes("C10")? "seat reserved" : "seat"} id="C10" ></div>
                    <div className={this.props.seats.includes("D10")? "seat reserved" : "seat"} id="D10" ></div>
                    <div className={this.props.seats.includes("E10")? "seat reserved" : "seat"} id="E10" ></div>
                    <div className={this.props.seats.includes("F10")? "seat reserved" : "seat"} id="F10" ></div>
                    <div className={this.props.seats.includes("G10")? "seat reserved" : "seat"} id="G10" ></div>
                    </div>

                    <div className="cinema-row row-4">
                    <div className={this.props.seats.includes("A11")? "seat reserved" : "seat"} id="A11" ></div>
                    <div className={this.props.seats.includes("B11")? "seat reserved" : "seat"} id="B11" ></div>
                    <div className={this.props.seats.includes("C11")? "seat reserved" : "seat"} id="C11" ></div>
                    <div className={this.props.seats.includes("D11")? "seat reserved" : "seat"} id="D11" ></div>
                    <div className={this.props.seats.includes("E11")? "seat reserved" : "seat"} id="E11" ></div>
                    <div className={this.props.seats.includes("F11")? "seat reserved" : "seat"} id="F11" ></div>
                    <div className={this.props.seats.includes("G11")? "seat reserved" : "seat"} id="G11" ></div>
                    </div>

                    <div className="cinema-row row-5">
                    <div className={this.props.seats.includes("A12")? "seat reserved" : "seat"} id="A12" ></div>
                    <div className={this.props.seats.includes("B12")? "seat reserved" : "seat"} id="B12" ></div>
                    <div className={this.props.seats.includes("C12")? "seat reserved" : "seat"} id="C12" ></div>
                    <div className={this.props.seats.includes("D12")? "seat reserved" : "seat"} id="D12" ></div>
                    <div className={this.props.seats.includes("E12")? "seat reserved" : "seat"} id="E12" ></div>
                    <div className={this.props.seats.includes("F12")? "seat reserved" : "seat"} id="F12" ></div>
                    <div className={this.props.seats.includes("G12")? "seat reserved" : "seat"} id="G12" ></div>
                    </div>

                    <div className="cinema-row row-6">
                    <div className={this.props.seats.includes("A13")? "seat reserved" : "seat"} id="A13" ></div>
                    <div className={this.props.seats.includes("B13")? "seat reserved" : "seat"} id="B13" ></div>
                    <div className={this.props.seats.includes("C13")? "seat reserved" : "seat"} id="C13" ></div>
                    <div className={this.props.seats.includes("D13")? "seat reserved" : "seat"} id="D13" ></div>
                    <div className={this.props.seats.includes("E13")? "seat reserved" : "seat"} id="E13" ></div>
                    <div className={this.props.seats.includes("F13")? "seat reserved" : "seat"} id="F13" ></div>
                    <div className={this.props.seats.includes("G13")? "seat reserved" : "seat"} id="G13" ></div>
                    </div>

                    <div className="cinema-row row-7">
                    <div className={this.props.seats.includes("A14")? "seat reserved" : "seat"} id="A14" ></div>
                    <div className={this.props.seats.includes("B14")? "seat reserved" : "seat"} id="B14" ></div>
                    <div className={this.props.seats.includes("C14")? "seat reserved" : "seat"} id="C14" ></div>
                    <div className={this.props.seats.includes("D14")? "seat reserved" : "seat"} id="D14" ></div>
                    <div className={this.props.seats.includes("E14")? "seat reserved" : "seat"} id="E14" ></div>
                    <div className={this.props.seats.includes("F14")? "seat reserved" : "seat"} id="F14" ></div>
                    <div className={this.props.seats.includes("G14")? "seat reserved" : "seat"} id="G14" ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seats;
