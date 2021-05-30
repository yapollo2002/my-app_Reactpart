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

    newButtonHandler=(event)=>{
                  event.preventDefault();
                  this.props.createHandler(true);
         }

    updateButtonHandler=(event)=>{
                  event.preventDefault();
                  this.props.updateHandler(true);
         }


        
	render() {
		return(
             <div className="AdminNav">
         
        <div className="formcolum">
        <p> AdminNav </p>
         <form>    
            <input type="text" name="adminsearch" id="adminsearch" onChange={this.myChangeHandler}/>

            <input type="text" id="adminsub"  value="Пошук" onClick={this.handle}/>
         </form> 
         </div>
        
         <div className="bottunscolum">
             <button id="adminbutton" onClick={this.newButtonHandler}>  New   </button>
             <br/>
             <button id="adminbutton" onClick={this.updateButtonHandler}> Update </button>
             <br/>
             <button id="adminbutton"> Delete </button>
         </div>
         </div>
                )		
	}

}