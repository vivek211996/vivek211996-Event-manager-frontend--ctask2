import React, { Component } from "react";
import axios from "axios";
import Eventadding from './Eventadding.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import "./eventlist.css"
export default class AddEvent extends Component {

   state = {
        events: [],
     }; 
     
     
 
     
     
    addToDo = (newTodo) =>  {
         console.log(newTodo);
         axios
         .post("https://5f142b812710570016b37c94.mockapi.io/api/login/tasks", newTodo)
         .then((response) => {
             this.setState({
                 events: [...this.state.events,response.data],
             });
         });
     };
     
    deleteToDo = (todo) => {
         console.log(todo);
         
         axios.delete(`https://5f142b812710570016b37c94.mockapi.io/api/login/tasks/${todo.id}`)
     .then(response => {
    
      const update =this.state.events.filter(item =>{
         return item.id !== todo.id;
        
     }) 
     
     this.setState({events:update})
     
     })
     }  
     
     
    render(){
         return (
              <div className="container p-3">
                
                  <h2><center>New events can be added here</center></h2>
                   <Eventadding onAdd={this.addToDo}></Eventadding>  
               
                 <br></br>   
                 <br></br>
                     <table className="table" id="list" style={{textAlign: "center"}}>
                        <thead>
                          <tr>
                             <th>Event</th>
                             <th>Venue</th>
                             <th>Date</th>
                             <th>Host</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map(x => {
                              return (
                                   <tr key={x.Eventname}>
                                   <td>{x.Eventname}</td>
                
                                   <td>{x.venue}</td>
                                
                                   <td>{x.Date}</td>
                                   <td>{x.Host}</td>
                                   <td>
                              <button className="btn btn-danger" onClick={() => this.deleteToDo(x)}>
                                Delete
                              </button>
                              </td>
                                   </tr>
                               );
                            })}
                         </tbody>
                     </table>
                     <ul>
<li><center><Link to="/homepage" name={this.props.name}>Back to homepage</Link></center></li>  
</ul> 
               </div> 
           );
                        }
        
}
