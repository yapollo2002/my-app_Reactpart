import React, {Component} from 'react';
import axios from 'axios';

 export default class Login extends Component {
       constructor(props) {
    super(props);
   // this.handleChange = this.handleChange.bind(this);
   this.state = {
                login:'',
                pass:'',
                errormessage:'     '
                };
  }
          changeLogin=(event)=>{this.setState({login:event.target.value})}
          changePass=(event)=>{this.setState({pass:event.target.value})}

          sendLogin=(even)=>{
          axios.post('http://localhost:8080/login', {}, {
             auth:{
                   username:this.state.login,
                   password:this.state.pass
                  }
           } )
            .then(response=>{
               if(response.status===200){
                       this.props.changeAdminStatus(this.state.login, this.state.pass)
                               
                      }
                //else this.setState({errormessage:'Error'})
            } )
            .catch(this.setState({errormessage:'Error'}))
           }

  render() {
     return(
	 <div className="Login">
      <div className="credentialinput"> 
          
       
      <p> Login </p>
      <input type='text'  name='login'  onChange={this.changeLogin}/> 
      <br/>
      <p> Password </p>
      <input type='text'   name='pass'   onChange={this.changePass} />
      </div>
      <div className='loginButton' >
      <p> {this.state.errormessage} </p>
      <br/>
      <button name='login' id='login'  onClick={this.sendLogin} >
      Login
      </button>
      </div>
	  </div>
)
}

}