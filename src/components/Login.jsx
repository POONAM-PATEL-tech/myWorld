
import React, {useState} from 'react';
import './Login.css'


export default function Login() {
  const[email,setName]=useState('abc@gmail.com');
  const[password,setMobile]=useState('****');
  
  
  return (
    <> {/*Fragment */}
    <h1 id='h1'>Login</h1>
    <div id="log">
     
    <form action='/'>
      <fieldset>
        <span>Email</span>
    <input type="email" id='ip1'value={email} onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    <br></br>
    <span>Password</span>
    <input type="password" id='ip2' value={password} onChange={(a)=>setMobile(a.target.value)}></input>
    <br></br>
   
   
    <br></br>
    <button >Submit</button>
    </fieldset>



    </form>
    </div>
    </>
  )
}


