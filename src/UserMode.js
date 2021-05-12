import React, {Component} from 'react';
import './App.css';
import Control from './Control';
import Output from './Output';
import {Stocks} from './Stocks';
import {Table} from './Table';
import {useTable} from  'react-table';
import axios from 'axios';
  export const Con=(props)=>{
           console.log({props});
           return(<>{props.data} </> )
      } 

export default class Usermode extends Component {
	constructor(props){
		super(props);
		this.state={telnum:''};
                this.state={receipts:[]};
                this.state={ismodifier:false};   
                this.state={data:[]};
                this.handle=this.handle.bind(this);
	}


		
		handle(telnum){
						
			this.setState({telnum:telnum});
			
			const url = 'http://localhost:8080/all';
			axios(url, {mode:'no-cors'})
			//fetch(url, {mode:'no-cors'})
                        //.then(res=>res.json)
                        .then(result=>this.setState({data:result.data}) )
                        .then(receipts=>console.log(this.state.receipts));

                                   
  			}
		

             

	
                  componentDidMount(){
         const data = [
       { 
         "id":1,
         "phoneNumber": 996320011,
         "model": 'Sony',
         "issue": 'no power',
         "notes": 'remote',
       },
       {
         "id":2,
         "phoneNumber": 2,
         "model": 'rocks',
         "issue": 'Hello',
         "notes": 'World', 
       },
       {
         "id":3,
         "phoneNumber": 3,
         "model": 'you want',
         "issue": 'Hello',
         "notes": 'World',
       },
     ];

             {/*      this.data = React.useMemo(
        ()=>[
       {
         "phoneNumber": 1,
         "model": 'World',
         "issue": 'Hello',
         "notes": 'World',
       },
       {
         "phoneNumber": 2,
         "model": 'rocks',
         "issue": 'Hello',
         "notes": 'World', 
       },
       {
         "phoneNumber": 3,
         "model": 'you want',
         "issue": 'Hello',
         "notes": 'World',
       },
     ],
     []
      )   */}
                
        			

                 this.setState({data:data});
                                 } 
              

	render() {
		return(
		
		<div className="UserMode">

	       	<Control handle={this.handle}/> 
			<Output data={this.state.data} ismodifier={this.state.ismodifier}/>
			                
			      
    			
		</div>
		);
		
	}
  
}