import React, { Component } from 'react'
import MovieRow from './MovieRow.js'
import {ConfigContext} from '../Context/ConfigContext'
import "./MoviesList.css";
import axios from 'axios'

/**
 * List of movies in an album or playlist
 * @extends Component
 */
export class MoviesList extends Component {
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
                <hr/>
                {
                    this.state.movies.map((movie) => (
                        <MovieRow movie={movie} />
                    ))
                }
                <hr/>
            </div>
        );
    }
}

export default MoviesList
