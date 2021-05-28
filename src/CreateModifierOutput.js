import React, {Component} from 'react';
import './App.css';
import axios from 'axios';



export default class CreateModifierOutput extends Component{
   constructor(props) {
      super(props);
        this.state={
                    phoneNumber:'0993214823',
                    model:'Sony',
                    issue:'noise',
                    notes:'temperarely',
                    data:{phoneNum:321, brand:'Space'}	
                      
                    };
   }

                 changePhoneNumber=(event)=>{this.setState({phoneNumber:event.target.value})                       }
                       changeModel=(event)=>{this.setState({model:event.target.value})}
                       changeIssue=(event)=>{this.setState({issue:event.target.value})}
                       changeNotes=(event)=>{this.setState({notes:event.target.value})}
                        
                       
         sendPost=(event)=>{
            const data = {
        "phoneNumber": this.state.phoneNumber,
        "model": this.state.model,
        "issue": this.state.issue,
        "notes": this.state.notes
    };
           // this.setState({data:'555'});
	   // console.log(this.state.data);	
		      axios.post('http://localhost:8080', data)
		 
	 }


render(){
	return (       
    <div className="ModifierOutput">
    	 
         <div className="descriptioninput">
         <p> CreateModifierMode </p>
         
         <input type="text" name="phonenumber"   onChange={this.changePhoneNumber}  />
         <br/>
         <br/>
         <input type="text" name="model"    onChange={this.changeModel} />
         <br/>
         <br/>
         <input type="text" name="issue"    onChange={this.changeIssue} />
         
         </div>
         
         <div className="notesconfirm">
         
         <div className="notesinput" >
         <textarea type="text" name="notes" id="notes"  cols='60' rows='7'onChange={this.changeNotes} >
         </textarea>
         </div>
         
         <div className="confirmbutton">
         <button type="button" name="confirm" id="confirm" onClick={this.sendPost}>
         Create
         </button> 
         </div>

         </div>

	</div>
	
	
  );
}

}