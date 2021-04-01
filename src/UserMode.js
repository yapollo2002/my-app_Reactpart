import React, {Component} from 'react';
import './App.css';
import Control from './Control';
import Output from './Output';
import {Stocks} from './Stocks';
import {Table} from './Table';
import {useTable} from  'react-table';
  export const Con=(props)=>{
           console.log({props});
           return(<>{props.data} </> )
      } 

export default class Usermode extends Component {
	constructor(props){
		super(props);
		this.state={telnum:''};
                this.state={data:[]};
		this.handle=this.handle.bind(this);
	}


		
		handle(telnum){
						
			this.setState({telnum:telnum});
			
			const url = 'http://localhost:8080';
			
			fetch(url, {
           method: 'POST', 
           body: JSON.stringify(this.state.telnum), 
           headers: {
      'Content-Type': 'application/json'
    }
  })
                        .then(res=>res.json)
                        .then((result)=>{
                        this.setState({
                          data:result.item
                        });
                        }
                        )           
  			}
		

             

	
                  componentDidMount(){
         const data = [
       {
         "phoneNumber": '0996320011',
         "model": 'Sony',
         "issue": 'no power',
         "notes": 'remote',
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
			{/*<Output telnum={this.state.telnum}/>*/}
			<Table data={this.state.data}/>
                          {/*     <Con data={this.state.data}/> */}
                         
			      
    			
		</div>
		);
		
	}
  
}