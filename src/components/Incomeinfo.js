import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Header.css';

class Incomeinfo extends Component {
   constructor(props){
       super(props);
       this.state = {
            totalincome:'',
            taxableincome:'',
            deduction80C:'',
            deduction80D:'',
            deduction80CCC:''
       };
   }
   render(){
       return(
        <div className="form">
        <TextField
        id="totalincome"
        className="textField"
        type="number"
        label="Total Income"
        value={this.state.totalincome}
        margin="normal"
        onChange={e=>this.setState({totalincome:e.target.value})}
        />
        <TextField
        id="taxableincome"
        className="textField"
        label="Total taxable Income"
        value={this.state.taxableincome}
        margin="normal"
        onChange={e=>this.setState({taxableincome:e.target.value})}
        />
        <TextField
        id="deduction80C"
        className="textField"
        label="80C Deductions"
        value={this.state.deduction80C}
        margin="normal"
        onChange={e=>this.setState({deduction80C:e.target.value})}
        />
        <TextField
        id="deduction80D"
        className="textField"
        label="80D Deductions"
        value={this.state.deduction80D}
        margin="normal"
        onChange={e=>this.setState({deduction80D:e.target.value})}
        />
        <TextField
        id="deduction80CCC"
        className="textField"
        label="80CCC Deductions"
        value={this.state.deduction80CCC}
        margin="normal"
        onChange={e=>this.setState({deduction80CCC:e.target.value})}
        />
        <Button variant="contained" className="savebtn" color="primary">SAVE</Button>
        </div>
       );
   }
}
export default Incomeinfo;