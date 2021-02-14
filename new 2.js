import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p> Acounting </p>
      </header>
	  <body className="Main">
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
	     </div>
	  
	  </body>
    </div>
  );
}