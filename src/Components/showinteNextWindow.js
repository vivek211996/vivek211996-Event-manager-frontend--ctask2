import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventlist.css'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";

export default class ShowinteNextWindow extends Component {
    
   state = {
        interested: [],
     }; 
     
     
     componentDidMount = () => {
        axios
        .get("https://eventmanager-backend21.herokuapp.com/showinterested")
        .then((response) => {
            this.setState({
                interested:response.data,
            });
        })
        .catch((err) => console.log(err));
    
     
     }; 

     
 
     
     
    render(){
         return (
           
              <div id="list" className="container p-3">
    
                  <h2><center>Upcoming events</center></h2>
               
                 <br></br>   
                 <br></br>
                     <table id="list" className="table" style={{textAlign: "center"}}>
                        <thead>
                          <tr>
                             <th>Event</th>
                             <th>Interested Person</th>
                             
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.interested.map(x => {
                              return (
                                   <tr key={x.Event}>
                                   <td>{x.Event}</td>
                
                                   <td>{x.interesteduser}</td>
                                
                    
                                   
                                   </tr>
                               );
                            })}
                         </tbody>
                     </table>
                     
                     <ul>
<li><center><Link to="/homepage" name={this. props.name}>Back to homepage</Link></center></li>  
</ul>
               
               </div>
           );
                        }
        
}

