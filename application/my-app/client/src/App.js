import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import CreatePost from './CreatePost';
import PostConfirmation from './PostConfirmation';
import SignIn from './SignIn';
import Results from './Results';
import Teampage from './Teampage';
import BobbyR from './BobbyR';
import MichaelW from './MichaelW';
import MichaelA from './MichaelA';
import MikeD from './MikeD';
import WilliamR from './WilliamR';
import Homepage from './Homepage';
import Product from './Product';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" exact element ={<Homepage/>} />
       <Route path="/createuser" exact element ={<CreateUser/>} />
       <Route path="/createpost" exact element ={<CreatePost/>} />
       <Route path="/postconfirmation" exact element ={<PostConfirmation/>} />
       <Route path="/signin" exact element ={<SignIn/>} />
       <Route path="/results" exact element ={<Results/>} />
       <Route path="/team" exact element ={<Teampage/>} />
       <Route path="/team/BobbyR" exact element ={<BobbyR/>} />
       <Route path="/team/MichaelW" exact element ={<MichaelW/>} />
       <Route path="/team/MichaelA" exact element ={<MichaelA/>} />
       <Route path="/team/MikeD" exact element ={<MikeD/>} />
       <Route path="/team/WilliamR" exact element ={<WilliamR/>} />
       <Route path="/Product" exact element = {<Product/>} />
     </Routes>
   </Router>
  );
}

export default App;
