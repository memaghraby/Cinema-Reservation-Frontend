import React, { Component } from 'react'
import ReservationRow from './ReservationRow.js'
import "./MoviesList.css";
import PropTypes from 'prop-types';

/**
 * List of reservations in an album or playlist
 * @extends Component
 */
export class ReservationsList extends Component {
    state={
        "reservations":[
            {
                name:'BatMan',
                id:'2',
                time:'9pm',
                duration_ms:7200000
            },
            {
                name:'SuperMan',
                id:'3',
                time:'7pm',
                duration_ms:8000000
            }
        ]
    }

    componentDidMount(){}

    render() {
        return (
            <div id='movies-list-div' className='container-fluid'>
                <hr/>
                {
                    this.state.reservations.map((reservation) => (
                        <ReservationRow reservation={reservation} />
                    ))
                }
                <hr/>
            </div>
        );
    }
}

ReservationsList.propTypes = {
    reservations: PropTypes.array.isRequired
}

export default ReservationsList
