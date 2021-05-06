import React, {Component} from 'react';
import './App.css';
import AdminNav from './AdminNav';
import Login from './Login';



export default class AdminControl extends Component {
	constructor(props) {
      super(props);
	  this.state={inputtext:' '};
      this.handler = this.handler.bind(this);
   }
   
   
	
	 handler(inputtextin){
		 this.setState({inputtext:inputtextin});
		//alert(this.state.inputtext);
		
	}
	render() {
		return(
		<div className="Control">
		< AdminNav handle={this.props.handle} handler={this.handler} />
		< Login/>
		</div>
		);
		
	}
  
}