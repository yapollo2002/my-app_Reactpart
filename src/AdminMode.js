import React, {Component} from 'react';
import AdminControl from './AdminControl';
import axios from 'axios';


export default class AdminMode extends Component {
	//const isAdminMode = this.props.isAdminMode;
        constructor(props) {
      super(props);
            this.state={data:[]};
	    this.handle = this.handle.bind(this);
   }
          handle(telnum){
						
			this.setState({telnum:telnum});
			
			const url = 'http://localhost:8080/find';
			axios(url+'/'+telnum )
			
                        .then(result=>this.setState({data:result.data}) )
                        .then(receipts=>console.log(this.state.receipts));

                                   
  			}
		
	
	render () {
    
    return (
	<div > <AdminControl data={this.state.data} handle={this.handle} login={this.props.login} pass={this.props.pass}/>  </div>
        	
           );  
  }
	
}