 import React from 'react';
import './App.css';
import UserMode from './UserMode.js';
import AdminMode from './AdminMode.js';


class App extends React.Component {
  constructor(props) {
    super(props);
   // this.handleChange = this.handleChange.bind(this);
   this.state = {isAdminMode: false,                                                            
                 login:'',
                 pass:''
                  };
   
  }
  //const isAdminMode={this.state.isAdminMode};
    changeAdminStatus=(login, pass)=> {
                            this.setState({isAdminMode:true});
                            this.setState({login:login});
                            this.setState({pass:pass});
                           }
	 render() {
		 //const isAdminMode={this.state.isAdminMode};
		 if (this.state.isAdminMode) {
    return <AdminMode isAdminMode={this.state.isAdminMode} login={this.state.login}  pass={this.state.pass} />;
  }
  return <UserMode changeAdminStatus={this.changeAdminStatus}/>;
		 
  } 
  }



export default App;
