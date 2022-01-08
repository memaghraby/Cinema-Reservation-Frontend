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

//Routes
import {CustomerProtectedRoute} from './ProtectedRoutes/CustomerProtectedRoute.js'
import {ManagementProtectedRoute} from './ProtectedRoutes/ManagementProtectedRoute.js'
import {NotLoggedInRoute} from './ProtectedRoutes/NotLoggedInRoute.js'

import ConfigContextProvider from './Context/ConfigContext';


function App() {
  
  return (
    
    <div className='App'>
      <Router> 
        <ConfigContextProvider>
        <Routes>

          {/*Not Logged In */}
          <Route exact path='/' element={<NotLoggedInRoute/>}>
            <Route exact path='/' element={<Login/>}/>
          </Route>
          <Route exact path='/signup' element={<NotLoggedInRoute/>}>
            <Route exact path='/signup' element={<SignUp/>}/>
          </Route>
          <Route exact path='/createmovie' element={<NotLoggedInRoute/>}>
            <Route exact path='/createmovie' element={<CreateMovie/>}></Route>
          </Route>
          <Route exact path='/movieslist' element={<NotLoggedInRoute/>}>
            <Route exact path='/movieslist' element={<MoviesList/>}></Route>
          </Route>
          <Route exact path='/moviedetails/:id' element={<NotLoggedInRoute/>}>
            <Route exact path='/moviedetails/:id' element={<MovieDetails/>}></Route>
          </Route>

          {/*Manager */}
          <Route exact path='/managermovieslist' element={<ManagementProtectedRoute/>}>
            <Route exact path='/managermovieslist' element={<ManagerMoviesList/>}/>
          </Route>
          <Route exact path='/createmovie' element={<ManagementProtectedRoute/>}>
            <Route exact path='/createmovie' element={<CreateMovie/>}/>
          </Route>
          <Route exact path='/managermoviedetails/:id' element={<ManagementProtectedRoute/>}>
            <Route exact path='/managermoviedetails/:id' element={<ManagerMovieDetails/>}/>
          </Route>

          {/*Customer */}
          <Route exact path='/customermovieslist' element={<CustomerProtectedRoute/>}>
            <Route exact path='/customermovieslist' element={<CustomerMoviesList/>}/>
          </Route>
          <Route exact path='/customermoviedetails/:id' element={<CustomerProtectedRoute/>}>
            <Route exact path='/customermoviedetails/:id' element={<CustomerMovieDetails/>}/>
          </Route>
          <Route exact path='/customerreservations' element={<CustomerProtectedRoute/>}>
            <Route exact path='/customerreservations' element={<CustomerReservationsList/>}/>
          </Route>
          

        </Routes>
        </ConfigContextProvider>
      </Router>
    </div>
  );
}

export default App;
