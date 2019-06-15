import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Header.css';

class Personalinfo extends Component {
   constructor(props){
       super(props);
       this.state = {
            firstName:'',
            lastName:'',
            dob:'',
            fathersName:'',
            emailId:'',
            mobileNo:'',
            address:''
       };
   }
   render(){
       return(
        <div className="form">
        <TextField
        id="firstName"
        className="textField"
        label="First Name"
        value={this.state.firstName}
        margin="normal"
        onChange={e=>this.setState({firstName:e.target.value})}
        />
        <TextField
        id="lastName"
        className="textField"
        label="Last Name"
        value={this.state.lastName}
        margin="normal"
        onChange={e=>this.setState({lastName:e.target.value})}
        />
        <TextField
        id="dob"
        className="textField"
        type="date"
        label="Date of Birth"
        value={this.state.dob}
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={e=>this.setState({dob:e.target.value})}
        />
        <TextField
        id="fathersName"
        className="textField"
        label="Fathers Name"
        value={this.state.fathersName}
        margin="normal"
        onChange={e=>this.setState({fathersName:e.target.value})}
        />
        <TextField
        id="emailId"
        className="textField"
        label="Email ID"
        value={this.state.emailId}
        margin="normal"
        onChange={e=>this.setState({emailId:e.target.value})}
        />
        <TextField
        id="mobileNo"
        className="textField"
        label="Mobile Number"
        value={this.state.mobileNo}
        margin="normal"
        onChange={e=>this.setState({mobileNo:e.target.value})}
        />
        <TextField
        id="address"
        className="textField"
        label="Permanent Address"
        fullWidth
        margin="normal"
        value={this.state.address}
        onChange={e=>this.setState({address:e.target.value})}
        />
        <Button variant="contained" className="savebtn" color="primary">SAVE</Button>
        </div>
       );
   }
}
export default Personalinfo;