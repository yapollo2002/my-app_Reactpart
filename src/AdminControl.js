import React, {Component} from 'react';
import './App.css';
import AdminNav from './AdminNav';
import LogOut from './LogOut';
import Output from './Output';
import ModifierOutput from './ModifierOutput';




export default class AdminControl extends Component {
	constructor(props) {
      super(props);
	  this.state={inputtext:' '};
          this.state={ismodifier: true};
      this.handler = this.handler.bind(this);
   }
   
   
	
	 handler(inputtextin){
		 this.setState({inputtext:inputtextin});
		//alert(this.state.inputtext);
		
	}
	render() {
		
		if(this.state.ismodifier){return(
                <div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} />
		< LogOut/>
                <ModifierOutput/>
		</div>
		
                );
                }

                return(
		<div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} />
		< LogOut/>
                <Output  data={this.props.data }/>
		</div>
		);
		
	}
  
}