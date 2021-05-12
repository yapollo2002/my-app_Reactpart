import React, {Component} from 'react';
import './App.css';
import  {Table} from './Table';
import  {ModifierOutput} from './ModifierOutput';


export default class Output extends Component{
   constructor(props) {
      super(props);
	  
          
   }

render(){
	  
        
	return <Table data={this.props.data}/>;
		
	
 }

}