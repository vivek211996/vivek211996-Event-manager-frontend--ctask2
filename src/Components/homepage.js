import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventlist from './eventlist.js'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import "./homepage.css"
import Logout from "../logout.js"
function Homepage(props) {
  const name = localStorage.getItem("name")
  
 

function logout() {
  localStorage.clear();
  

}

    return (
    
        
            <div className="jumbotron">
              <Link class="btn btn-danger" onClick={logout} to="/logout" >logout</Link>
           
  <h1 className="display-3">Hello,{name}</h1>
  <p className="lead">Welcome to Event scheduler, a simple application to host-join events.
                  Find all the functionalities below.</p>
  <hr className="my-2"></hr>
  <p>If you want to create an event, click below.</p>
  <p className="lead">

    <Link className="btn btn-primary btn-lg" to="/addevent" name={name}>Create Event</Link>
  </p>
  
  <Eventlist name={name}/>
 





      </div>  

      
    );
}

export default Homepage;
