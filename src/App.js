 import React from 'react';
import './App.css';
import UserMode from './UserMode.js';
import AdminMode from './AdminMode.js';


class App extends React.Component {
  constructor(props) {
    super(props);
   // this.handleChange = this.handleChange.bind(this);
   this.state = {isAdminMode: true};
  }
  //const isAdminMode={this.state.isAdminMode};
	 render() {
		 //const isAdminMode={this.state.isAdminMode};
		 if (this.state.isAdminMode) {
    return <AdminMode isAdminMode={this.state.isAdminMode}/>;
  }
  return <UserMode />;
		 
  } 
  }



export default App;
