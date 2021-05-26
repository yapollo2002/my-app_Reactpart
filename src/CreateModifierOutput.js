import React, {Component} from 'react';
import './App.css';
import axios from 'axios';



export default class CreateModifierOutput extends Component{
   constructor(props) {
      super(props);
        this.state={pnoneNumber:'',
                    model:'',
                    issue:'',
                    notes:'',	
                    data:[]  
                    };
   }

                 changePhoneNumber=(event)=>{this.setState({phoneNumber:event.target.value})}
                       changeModel=(event)=>{this.setState({model:event.target.value})}
                       changeIssue=(event)=>{this.setState({issue:event.target.value})}
                       changeNotes=(event)=>{this.setState({notes:event.target.value})}
                        
                       
         sendPost = ()=> {
            const data = [
       { 
         
         "phoneNumber": this.pnoneNumber ,
         "model": this.model,
         "issue": this.issue,
         "notes": this.notes,
       },
        ];  
		 //event.preventDefault();
            this.setState({data:data});
		// this.props.handle(this.state.telnum);
		       axios.post('http://localhost:8080',this.data)
		 
	 }


render(){
	return (       
    <div className="ModifierOutput">
    	 
         <div className="descriptioninput">
         <p> CreateModifierMode </p>
         
         <input type="text" name="phonenumber" onChange={this.changePhoneNumber}  />
         <br/>
         <br/>
         <input type="text" name="model"   onChange={this.changeModel} />
         <br/>
         <br/>
         <input type="text" name="issue"  value="issue" onChange={this.changeIssue} />
         
         </div>
         
         <div className="notesconfirm">
         
         <div className="notesinput" >
         <textarea type="text" name="notes" id="notes" value="notes" cols='60' rows='7'onChange={this.changeNotes} >
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