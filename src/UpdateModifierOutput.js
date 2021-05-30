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
                 changePhoneNumber=(event)=>{this.setState({ [event.target.name]: event.target.value});
                                             this.setState({phoneNumber:event.target.value})}
                       changeModel=(event)=>{this.setState({ [event.target.name]: event.target.value});
                                             this.setState({model:event.target.value})}
                       changeIssue=(event)=>{this.setState({ [event.target.name]: event.target.value});
                                             this.setState({issue:event.target.value})}
                       changeNotes=(event)=>{this.setState({ [event.target.name]: event.target.value});
                                             this.setState({notes:event.target.value})}
                        
                       
         sendPut=(event)=>{
            const data = {
        "id" : this.props.data.id,
        "phoneNumber": this.state.phoneNumber,
        "model": this.state.model,
        "issue": this.state.issue,
        "notes": this.state.notes
    };
           // this.setState({data:'555'});
	   // console.log(this.state.data);	
		      axios.put('http://localhost:8080', data)
		 
	 }


render(){
	return (       
    <div className="ModifierOutput">
    	 
         <div className="descriptioninput">
         <p> UpdateModifierMode </p>
         <br/>
         <p> Phone Number </p>
         <input type="text" name="phoneNumber" value={this.state.phoneNumber}  onChange={this.changePhoneNumber}  />
         <br/>
         <br/>
         <p> Model </p>
         <input type="text" name="model"   value={this.state.model}  onChange={this.changeModel} />
         <br/>
         <br/>
         <p> Issue </p>
         <input type="text" name="issue"  value={this.state.issue}  onChange={this.changeIssue} />
         
         </div>
         
         <div className="notesconfirm">
         
         <div className="notesinput" >
         <p> Notes </p>
         <textarea type="text" name="notes" value= {this.state.notes} id="notes"  cols='60' rows='7'onChange={this.changeNotes} >
         </textarea>
         </div>
         
         <div className="confirmbutton">
         <button type="button" name="confirm" id="confirm" onClick={this.sendPut}>
         Create
         </button> 
         </div>

         </div>

	</div>
	
	
  );
}

}