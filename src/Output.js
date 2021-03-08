import React, {Component} from 'react';
import './App.css';
import  {Stocks} from './Stocks';
import  {Table} from './Table';

export default class Output extends Component{
render(){
	return (
    <div className="Output">
      
	  {/*   <body className="Main">
	  
	     <div className="Title">
		  <div className="telNumber">
		     <input
             type='text'
              name='telNumber'
			  value='telNumber'
			  className='telNumber'
             //onChange={this.myChangeHandler}
             />
		  </div>
		  <div className="Model">
		     <input
             type='text'
              name='Model'
			  value='Model'
			  className='Model'
             //onChange={this.myChangeHandler}
             /> 
		  
		  </div>
		  <div className="Issue">
		     <input
             type='Issue'
              name='Issue'
			  value='Issue'
			  className='Issue'
             //onChange={this.myChangeHandler}
             />
		  </div>
		  <div className="Note">
		     <input
             type='Note'
              name='Note'
			  value='Note'
			  //onChange={this.myChangeHandler}
             />
		  </div>
		  
	     </div>
	  <p> {this.props.telnum} </p>
	  
	  </body>       */}
        <Table/>
	</div>
	
	
  );
}

}