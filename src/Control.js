import React, {Component} from 'react';
import './App.css';
import UserNav from './UserNav';
import Login from './Login';



export default class Control extends Component {
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
		< UserNav handle={this.props.handle} handler={this.handler} />
		< Login/>
		</div>
		);
		
	}
  
}