import React, { Component } from "react";
export default class Eventadding extends Component {
    state = { 
              Eventname: "",
              venue:"",
              Date: "",
              Host: ""
            };

    handleTitleChange = (event) => {
        this.setState({
            Eventname: event.target.value,
            

        });
    }
    handlevenueChange = (event) => {
        this.setState({
            
             venue: event.target.value,
           

        });
    }
     
    handledateChange = (event) => {
        this.setState({
            
             Date: event.target.value,
            

        });
    }

    handlehostChange = (event) => {
        this.setState({
            
             Host: event.target.value

        });
    }


    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({

            Eventname: this.state.Eventname,
            venue: this.state.venue,
            Date: this.state.Date,
            Host: this.state.Host
            
        });
        this.setState({
            Eventname: "",
            venue:"",
            Date: "",
            Host: ""
            
        });
    };

    render() {
        return (
            <div className="container p-3">
                <h3 style={{textAlign: "center"}}>
                    Eventlist
                </h3>
                <br></br>
                <form onSubmit={this.handleToDoSubmit} >                    
                    <div className="form-group" >
                        <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter event name"  />
                        <input value={this.state.Venue} onChange={this.handlevenueChange} className="form-control" placeholder="Enter venue"  />
                        <input value={this.state.Date} type="date"onChange={this.handledateChange} className="form-control" placeholder="enter date"  />
                        <input value={this.state.Host} onChange={this.handlehostChange} className="form-control" placeholder="Enter host name"  />
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add</button>
                </form>
            </div>
        );
    }
}