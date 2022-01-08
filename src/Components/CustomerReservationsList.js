import React, { Component } from 'react'
import ReservationRow from './ReservationRow.js'
import "./MoviesList.css";
import PropTypes from 'prop-types';
import NavBar from '../Components/Navbar'
import {ConfigContext} from '../Context/ConfigContext'
import axios from 'axios'

/**
 * List of reservations in an album or playlist
 * @extends Component
 */
export class ReservationsList extends Component {
    static contextType=ConfigContext;

    state={
        "reservations":[]
    }

    componentDidMount(){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'id': localStorage.getItem('userId')
        }

        axios.get(this.context.baseURL+'/movies/customer/reserve',
        {
            headers: headers
        })
        .then(res => {
            if(res.status===200) // Successful
            {
                if(res.data.success===true)
                {
                    this.setState({
                        reservations: res.data.reservations
                    })
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
            <div id='movies-list-div' className='container-fluid'>
                <NavBar></NavBar>
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
