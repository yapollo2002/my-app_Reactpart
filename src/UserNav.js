import React, {Component} from 'react';
import './App.css';


export default class UserNav extends Component {
	constructor(props) {
    super(props);
    this.state = { 
	telnum: '',
    errormessage: ''
	};
  }
  myChangeHandler = (event) => {
	  
    let val = event.target.value;
    let err = '';
    
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    
    this.setState({errormessage: err});
	this.setState({telnum: val});
  }
     handle = (event)=> {
		 event.preventDefault();
		 this.props.handle(this.state.telnum);
		 
		 
	 }
	
 render() {
     return( 
	 <div className="UserNav">
	 
	  <p> UserNav </p>
	  <br/>
	  <form>
       <label>
	   <h1>Hello {this.state.telnum}</h1>
      <input type="text" name="adminsearch" onChange= {this.myChangeHandler}/>
       </label>
      
	  <input type="submit" id="adminsub" value="Пошук" onClick={this.handle} />
	  {this.state.errormessage}
      </form>
     </div>              
 
)
}

}