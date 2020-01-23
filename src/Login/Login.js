import React from 'react';
// import './Login.sass'
import './Login.css'

export default class Login  extends React.Component{ 
    
    render(){       
        return(
            <div className="loingpage"> 
              <div  className="login-card" >
                    <h1>Log-in</h1>
                    
                    <form   id="datalogin" /* onSubmit={this.datalogin.bind(this)} */>
                        <label   >User Address:</label>          
                        <input   type="user" name="user"    />
                        <label >Password:</label>
                        <input   type="password"   name="password"   /*required*/ />
                        <button type="submit" class="login login-submit"  placeholder="Password" >Login</button>
                           
                    </form>
                    
                   <div class="login-help">
                        <a href="#">Register</a> • <a href="#">Forgot Password</a>
                    </div>
            
                    </div>
              
               
            </div>   
                  
                  
             
              );
          }
}