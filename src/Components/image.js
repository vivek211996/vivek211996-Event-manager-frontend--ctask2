import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './eventlist.css'


export default class Imagecarousel extends Component {
    
 
     
 
     
     
    render(){
         return (
            <div className="bd-example">
                <h2><center>Events gallery</center></h2>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Sunburn-Festival.jpg" alt="First slide"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Sun burn GOA </h3>
                    <p>2019</p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img className="d-block w-100" src="https://c.ndtvimg.com/2019-10/1qpe4158_festival_625x300_25_October_19.jpg" alt="Second slide"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Food festival MUMBAI</h3>
                    <p>2018</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
         
           );
                        }
        
}

