  
import React from 'react';
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import AddEvent from'./Components/AddEvent.js'
import Homepage from'./Components/homepage.js'
import ShowinteNextWindow from './Components/showinteNextWindow.js'
import App from './App.js';
import "./index.css"
import Logout from "./logout.js"

const Routepage = () => {
  
    return (
     
      <Router>
        <div>
             
          <switch>
          <Route path ="/appview">
          <App/>
                   </Route>
                   <Route path ="/logout">
          <Logout/>
                   </Route>
           
          <Route path ="/addevent">
          <AddEvent/>
                   </Route>
                   <Route path ="/homepage">
          <Homepage/>
                   </Route>
                   <Route path ="/showinteNextWindow">
          <ShowinteNextWindow/>
                   </Route>
              
                               
                   </switch>
          <br></br>
         
          <Redirect to="/appview"/>
          </div>  
       
      </Router>
      
      
    
  )
}


ReactDOM.render(
<React.StrictMode>
<Routepage/>
</React.StrictMode>,
document.getElementById('root')

);