import React, {Component} from 'react';


export default class AdminNav extends Component {
           constructor(props){
        super(props);
       this.state={
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
             <div className="AdminNav">
         <p> AdminNav </p>
         <form>    
            <input type="text" name="search" onChange={this.myChangeHandler}/>

            <input type="text" id="adminsub"  value="Пошук" onclic={this.hanle}/>
         </form> 
         </div>
                )		
	}

}