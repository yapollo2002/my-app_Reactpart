import React, {Component} from 'react';
import './App.css';
import AdminNav from './AdminNav';
import LogOut from './LogOut';
import Output from './Output';
import ModifierOutput from './ModifierOutput';
import CreateModifierOutput from './CreateModifierOutput';
import UpdateModifierOutput from './UpdateModifierOutput';



export default class AdminControl extends Component {
	constructor(props) {
      super(props);
	  this.state={inputtext:' '};
          this.state={createStatus:'false'};
          this.state={updateStatus: 'false'};
          this.state={ismodifier: 'true'};
          
          this.handler = this.handler.bind(this);
          this.updateHandler= this.updateHandler.bind(this);
          this.createHandler= this.createHandler.bind(this);
          
   }
   
   
	
	 handler(inputtextin){
		 this.setState({inputtext:inputtextin});
		 }

        createHandler(status){this.setState({updateStatus:false}); this.setState({createStatus:status}); }

        updateHandler(status){this.setState({createStatus:false}); this.setState({updateStatus:status});}
                                                                                                                                                 
	render() {
		
		if(this.state.createStatus){return(
                <div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} createHandler={this.createHandler} updateHandler={this.updateHandler} />
		< LogOut/>
                <CreateModifierOutput/>
		</div>
		
                );
                }
                
                if(this.state.updateStatus){return(
                <div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} updateHandler={this.updateHandler} createHandler={this.createHandler} />
		< LogOut/>
                <UpdateModifierOutput data={this.props.data}/>
		</div>
		);
                }

                return(
		<div className="AdminControl">
		< AdminNav  handle={this.props.handle} handler={this.handler} createHandler={this.createHandler} updateHandler={this.updateHandler}/>
		< LogOut/>
                <Output  data={this.props.data }/>
		</div>
		);
		
	}
  
}