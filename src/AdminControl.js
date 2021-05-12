import React, {Component} from 'react';
import './App.css';
import AdminNav from './AdminNav';
import Login from './Login';
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
                <div className="Control">
		< AdminNav  handle={this.props.handle} handler={this.handler} />
		< Login/>
                <ModifierOutput/>
		</div>
		
                );
                }

                return(
		<div className="Control">
		< AdminNav  handle={this.props.handle} handler={this.handler} />
		< Login/>
                <Output  data={this.props.data }/>
		</div>
		);
		
	}
  
}