import React, {Component} from 'react';


export default class AdminMode extends Component {
	//const isAdminMode = this.props.isAdminMode;
	
	render () {
    const  isAdminMode= this.props.isAdminMode;
    return (
	
	<button > 
	enter {isAdminMode}
	</button>
	)
  }
	
}