import React, { Component } from "react";
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import Imagecarousel from './image.js'
export default class ShowInterested extends Component {
 
  
    render() {
        return (
            <div class="jumbotron">
  <p class="lead">You can see the interested people for different events here.</p>
  <hr class="my-2"></hr>
  <p>click to view.</p>
  <p class="lead">
  <Link className="btn btn-primary btn-lg" to="/showinteNextWindow">Show</Link>
    <Imagecarousel/>
  </p>
</div>
     
        );
    }
}