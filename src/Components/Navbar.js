import React, { Component } from 'react'
import {ConfigContext} from '../Context/ConfigContext'
import "./MoviesList.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    static contextType=ConfigContext;

    componentDidMount(){
    }

    signOut(){
      localStorage.clear();
      window.location.reload(false);
    }
    
    render() {
        return (
            <div id='navbar-div' style={{width:"100%", height:"50px", textAlign:"right"}} className='container-fluid'>
                <button name="Cancel" onClick={this.signOut} style={{height: "40px", width:"120px"}}>Sign Out</button>
            </div>
        );
    }
}

export default Navbar
