import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Header.css';

class Summary extends Component {
   constructor(props){
       super(props);
       this.state = {

       };
   }
   render(){
       return(
        <div className="form">
        <Button variant="contained" className="savebtn" color="primary">SUBMIT</Button>
        </div>
       );
   }
}
export default Summary;