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
          this.state={createStatus:'false'};
          this.state={ismodifier: 'true'};
          
          this.handler = this.handler.bind(this);
          this.createHandler= this.createHandler.bind(this);
   }
   
   
	
	 handler(inputtextin){
		 this.setState({inputtext:inputtextin});
		 }

        createHandler(status){this.setState({createStatus:status});}


	render() {
		
		if(this.state.createStatus){return(
                <div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} createHandler={this.createHandler} />
		< LogOut/>
                <ModifierOutput/>
		</div>
		
                );
                }

                return(
		<div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} createHandler={this.createHandler}/>
		< LogOut/>
                <Output  data={this.props.data }/>
		</div>
		);
		
	}
  
}