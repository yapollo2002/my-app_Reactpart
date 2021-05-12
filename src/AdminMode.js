import React, {Component} from 'react';
import AdminControl from './AdminControl';


export default class AdminMode extends Component {
	//const isAdminMode = this.props.isAdminMode;
        constructor(props) {
      super(props);
            this.state={data:[]};
	 // this.state={inputtext:' '};
      //this.handler = this.handler.bind(this);
   }

	
	render () {
    
    return (
	<div > <AdminControl data={this.state.data}/>  </div>
        	
           );  
  }
	
}