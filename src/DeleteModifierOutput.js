import React, {Component} from 'react';
import './App.css';
import axios from 'axios';



export default class CreateModifierOutput extends Component{
   constructor(props) {
      super(props);
        this.state={
                    phoneNumber:'this.props.data.phoneNumber',
                     model:'this.props.data.model',
                    issue:'this.props.data.issue',
                    notes:'this.props.data.notes',
                    data:{phoneNum:321, brand:'Space'}	
                      
                    };
   }

        componentDidUpdate() {
     if (this.state.phoneNumber !== this.props.data.phoneNumber) {

   this.setState({phoneNumber:this.props.data.phoneNumber,
                     model:this.props.data.model,
                    issue:this.props.data.issue,
                    notes:this.props.data.notes});
}                       
}
                   
                       
         sendDelete=(event)=>{
            axios.delete('http://localhost:8080'+'/'+this.props.data.id, {
             auth:{
                   username:this.state.login,
                   password:this.state.pass
                  }
           })
		 
	 }


render(){
	return (       
    <div className="ModifierOutput">
    	 
         <div className="descriptioninput">
         <p> DeleteModifierMode </p>
         <br/>
         <p> Phone Number </p>
         <input type="text" name="phoneNumber" value={this.state.phoneNumber}    />
         <br/>
         <br/>
         <p> Model </p>
         <input type="text" name="model"   value={this.state.model}   />
         <br/>
         <br/>
         <p> Issue </p>
         <input type="text" name="issue"  value={this.state.issue}   />
         
         </div>
         
         <div className="notesconfirm">
         
         <div className="notesinput" >
         <p> Notes </p>
         <textarea type="text" name="notes" value= {this.state.notes} id="notes"  cols='60' rows='7' >
         </textarea>
         </div>
         
         <div className="confirmbutton">
         <button type="button" name="confirm" id="confirm" onClick={this.sendDelete}>
         Delete
         </button> 
         </div>

         </div>

	</div>
	
	
  );
}

}