import React, {Component} from 'react';
import './App.css';



export default class ModifierOutput extends Component{
   constructor(props) {
      super(props);
	  
          
   }

render(){
	return (       
    <div className="ModifierOutput">
    	 <p> ModifierMode </p>
         <div className="descriptioninput">
         <input type="text" name="phonenumber" value="phonenumber" />
         <br/>
         <br/>
         <input type="text" name="model"  value="model" />
         <br/>
         <br/>
         <input type="text" name="issue"  value="issue" />
         </div>
         
         <div className="notesinput" >
         <input type="text" name="notes"  value="notes" />
         </div>
         

	</div>
	
	
  );
}

}