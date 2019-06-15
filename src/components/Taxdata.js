import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Personalinfo from './Personalinfo';
import Incomeinfo from './Incomeinfo';
import Summary from './Summary';
import './Header.css';

class Taxdata extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabval: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value){
     // event.preventDefault();
      //console.log(key);
      this.setState({tabval:value});
    }
    render(){
        return(
          <div className="nxtheader">
            <header>FILE MY TAX</header>
          <AppBar style={{ background: 'green' }} position="static">
            <Tabs value={this.state.tabval} onChange={this.handleChange}>
              <Tab label="Personal Info" />
              <Tab label="Income Information" />
              <Tab label="Summary and submit" />
            </Tabs>
          </AppBar>
          {this.state.tabval === 0 && <Personalinfo/>}
          {this.state.tabval === 1 && <Incomeinfo/>}
          {this.state.tabval === 2 && <Summary/>}
          </div>
        );
    }
}
export default Taxdata;