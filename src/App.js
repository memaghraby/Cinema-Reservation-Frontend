import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

//Components
import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'

import ManagerMoviesList from './Components/ManagerMoviesList.js'
import CreateMovie from './Components/CreateMovie.js'
//import EditMovie from './Components/EditMovie.js'
import ManagerMovieDetails from './Components/ManagerMovieDetails.js'

import CustomerMoviesList from './Components/CustomerMoviesList.js'
import CustomerMovieDetails from './Components/CustomerMovieDetails.js'
import CustomerReservationsList from './Components/CustomerReservationsList.js'

import MoviesList from './Components/MoviesList.js'
import MovieDetails from './Components/MovieDetails.js'

import EditMovie from './Components/EditMovie';

//Routes
import { CustomerProtectedRoute } from './ProtectedRoutes/CustomerProtectedRoute.js'
import { ManagementProtectedRoute } from './ProtectedRoutes/ManagementProtectedRoute.js'
import { NotLoggedInRoute } from './ProtectedRoutes/NotLoggedInRoute.js'

import ConfigContextProvider from './Context/ConfigContext';

import axios from 'axios';

axios.interceptors.response.use(
  response => response,
  manageErrors
)

function manageErrors(error) {
  document.getElementById('modal-title').innerHTML = "ERROR";
  document.getElementById('error-message').innerHTML = error.response.data.message;
  document.getElementById('open-modal').click();
}

function App() {

  return (

    <div className='App'>
      <Router>
        <ConfigContextProvider>
          <Routes>

            {/*Not Logged In */}
            <Route exact path='/login' element={<NotLoggedInRoute />}>
              <Route exact path='/login' element={<Login />} />
            </Route>
            <Route exact path='/signup' element={<NotLoggedInRoute />}>
              <Route exact path='/signup' element={<SignUp />} />
            </Route>
            <Route exact path='/createmovie' element={<NotLoggedInRoute />}>
              <Route exact path='/createmovie' element={<CreateMovie />}></Route>
            </Route>
            <Route exact path='/movieslist' element={<NotLoggedInRoute />}>
              <Route exact path='/movieslist' element={<MoviesList />}></Route>
            </Route>
            <Route exact path='/moviedetails/:id' element={<NotLoggedInRoute />}>
              <Route exact path='/moviedetails/:id' element={<MovieDetails />}></Route>
            </Route>

            {/*Manager */}
            <Route exact path='/managermovieslist' element={<ManagementProtectedRoute />}>
              <Route exact path='/managermovieslist' element={<ManagerMoviesList />} />
            </Route>
            <Route exact path='/createmovie' element={<ManagementProtectedRoute />}>
              <Route exact path='/createmovie' element={<CreateMovie />} />
            </Route>
            <Route exact path='/managermoviedetails/:id' element={<ManagementProtectedRoute />}>
              <Route exact path='/managermoviedetails/:id' element={<ManagerMovieDetails />} />
            </Route>
            <Route exact path='/editmoviedetails/:id' element={<ManagementProtectedRoute />}>
              <Route exact path='/editmoviedetails/:id' element={<EditMovie />} />
            </Route>

            {/*Customer */}
            <Route exact path='/customermovieslist' element={<CustomerProtectedRoute />}>
              <Route exact path='/customermovieslist' element={<CustomerMoviesList />} />
            </Route>
            <Route exact path='/createmovie' element={<CustomerProtectedRoute />}>
              <Route exact path='/createmovie' element={<CreateMovie />} />
            </Route>
            <Route exact path='/customermoviedetails/:id' element={<CustomerProtectedRoute />}>
              <Route exact path='/customermoviedetails/:id' element={<CustomerMovieDetails />} />
            </Route>
            <Route exact path='/customerreservations' element={<CustomerProtectedRoute />}>
              <Route exact path='/customerreservations' element={<CustomerReservationsList />} />
            </Route>


          </Routes>
        </ConfigContextProvider>
      </Router>
      <button id='open-modal' type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#error-modal">
      </button>
      <div id="error-modal" className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="modal-title" className="modal-title">Error</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="error-message" className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
