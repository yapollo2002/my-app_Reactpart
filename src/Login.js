import React, {Component} from 'react';

 export default class Login extends Component {
  render() {
     return(
	 <div className="Login">
      <div className="credentialinput"> 
          <p>  Login </p>
       <br/>
      <p> Login </p>
      <input type='text'  name='login'  onChange={this.changeLogin}/> 
      <br/>
      <p> Password </p>
      <input type='text'   name='pass'   onChange={this.changePass} />
      </div>
      <div className='loginButton' >
      <br/>
      <br/>
      <button name='login'  onClick={this.sendLogin} >
      Login
      </button>
      </div>
	  </div>
)
}

}