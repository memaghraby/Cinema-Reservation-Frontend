import React, { Component } from 'react'
import CustomerMovieRow from './CustomerMovieRow.js'
import {ConfigContext} from '../Context/ConfigContext'
import NavBar from '../Components/Navbar'
import "./MoviesList.css";
import { Link } from "react-router-dom";
import axios from 'axios'

/**
 * List of movies in an album or playlist
 * @extends Component
 */
export class CustomerMoviesList extends Component {
    static contextType=ConfigContext;

    state={
        "movies":[]
    }

    componentDidMount(){
        axios.get(this.context.baseURL+'/movies/guest'
        ).then(res => {
            console.log(res.data);
            if(res.status===200) // Successful
            {
                
                if(res.data.success===true)
                {
                     this.setState({movies: res.data.movies});
                }
                else
                {
                    this.setState({errorMessage: res.data.name});
                }
            }
            else
            {               }}).catch(err =>{alert(err)})
    }
    
    render() {
        return (
            <div id='movies-list-div' className='container-fluid'>
                <NavBar></NavBar>
                <div>
                    <hr/>
                    {
                        this.state.movies.map((movie) => (
                            <CustomerMovieRow movie={movie} />
                        ))
                    }
                    <hr/>
                </div>
                <div className='movie-list-button-div'>
                    <Link to="/customerreservations">
                        <button className="movie-list-button" name="RESERVATIONS">Reservations</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CustomerMoviesList
