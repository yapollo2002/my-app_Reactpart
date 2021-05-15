import React, {Component} from 'react';
import './App.css';



export default class ModifierOutput extends Component{
   constructor(props) {
      super(props);
	  
          
   }
         handle = (event)=> {
		 event.preventDefault();
		// this.props.handle(this.state.telnum);
		 
		 
	 }


render(){
	return (       
    <div className="ModifierOutput">
    	 
         <div className="descriptioninput">
         <p> ModifierMode </p>
         
         <input type="text" name="phonenumber" value="phonenumber" size='35' />
         <br/>
         <br/>
         <input type="text" name="model"  value="model" size='35' />
         <br/>
         <br/>
         <input type="text" name="issue"  value="issue" size='35'/>
         </div>
         
         <div className="notesinput" >
         <textarea type="text" name="notes"  value="notes" cols='60' rows='7' >
         </textarea>
         <button name="confirm" id="confirm" onClik={this.handler}/> 
         </div>
         

	</div>
	
	
  );
}

}