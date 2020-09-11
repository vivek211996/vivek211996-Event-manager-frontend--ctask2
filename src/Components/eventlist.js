import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventlist.css'
import ShowInterested from './showinterested.js'
import swal from "sweetalert";
import Loading from '../loading.js'

export default class Eventlist extends Component {
    name=this.props.name
    //const [LoginUsername, setLoginUsername] = useState("")
name=this.props.name
   state = {
        todos: [],
        loading:false
     }; 
     
     
     componentDidMount = () => {
         axios
         .get("https://5f142b812710570016b37c94.mockapi.io/api/login/tasks")
         .then((response) => {
             this.setState({
                 todos:response.data,
             });
         })
         .catch((err) => console.log(err));
     
     }; 

    async Interested (id) 
  { 
      this.state.loading=true;
    
console.log(id)
try{
    let data = await fetch("https://eventmanager-backend21.herokuapp.com/interested",{
         method:"POST",
         headers:{
             "content-type" : "application/json"
         },
         body: JSON.stringify({
             Event: id,
             interesteduser:this.props.name,
            
         })
     })
     this.state.loading=false
     swal("Added in interested")
     console.log(data)
     }

     catch(error)
     {
         console.log(error)
     }
    
  }
     
 
     
     
    render(){
         return (
              <div className="container p-3">
                  <h2><center>Upcoming events</center></h2>
               
                 <br></br>   
                 <br></br>
                     <table className="table" style={{textAlign: "center"}}>
                        <thead>
                          <tr>
                             <th>Event</th>
                             <th>Interested</th>
                             <th>Venue</th>
                             <th>Date</th>
                             <th>Host</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(x => {
                              return (
                                   <tr key={x.Eventname}>
                                   <td>{x.Eventname}</td>
                <button className="btn btn-outline-success" id ={x.Eventname} onClick={()=>(this.Interested(x.Eventname))}>Interested</button>
                {this.state.loading === true ? <Loading /> :null}
                                   <td>{x.venue}</td>
                                
                                   <td>{x.Date}</td>
                                   <td>{x.Host}</td>
                                   
                                   </tr>
                               );
                            })}
                         </tbody>
                     </table>
<ShowInterested name={this. props.name}/>
               </div> 
           );
                        }
        
}

