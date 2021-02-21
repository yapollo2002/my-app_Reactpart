import React, {Component} from 'react';
import './App.css';
import Control from './Control';
import Output from './Output';
import {Stocks} from './Stocks';


export default class Usermode extends Component {
	constructor(props){
		super(props);
		this.state={telnum:''};
		this.handle=this.handle.bind(this);
	}
		
		handle(telnum){
						
			this.setState({telnum:telnum});
			
			const url = 'http://localhost:8080';
			
			fetch(url, {
           method: 'POST', 
           body: JSON.stringify(this.state.telnum), 
           headers: {
      'Content-Type': 'application/json'
    }
  });
           
			
			
		}
	
	render() {
		return(
		
		<div className="UserMode">
		<Control handle={this.handle}/>
		<Output telnum={this.state.telnum}/>
			
		</div>
		);
		
	}
  
}