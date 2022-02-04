import React, {useState} from 'react';
import './Validator.css';

function Validator () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [valid, setValid] = useState("Passwords Must Match")

  const HandleUsernameChange = (evt) => {
    console.log(evt.target.value)
    setUsername(evt.target.value)
  }
  
  const HandlePasswordChange = (evt) => {
    console.log(evt.target.value)
    setPassword(evt.target.value)
  }
  
  const HandlePasswordConfirmChange = (evt) =>{
    // console.log("Button works")
    console.log("This is the password", password)
    setPasswordConfirm(evt.target.value)
  }

  const HandleSubmit = (evt) =>{
    evt.preventDefault()
  }

  const Clear = () =>{
    setUsername("")
    setPassword("")
    setPasswordConfirm("")
    setValid("Passwords Must Match")
  }

  const ValidMessage = () => {
    let num = 7
    if (password !== passwordConfirm || password == "" || passwordConfirm == "") {
      setValid("Invalid Entry, Try Again!")
    } else if ( password === passwordConfirm && password.length >= num || passwordConfirm >= num) {
      setValid("Valid Entry")
    } else if (password.length < num || password.length < num){
      setValid("Passwords Must Be More Than 7 Characters")
    }
  }

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={HandleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={HandleUsernameChange}
          />
          <label htmlFor="username">Username</label>

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={HandlePasswordChange}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={HandlePasswordConfirmChange}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit" onClick={ValidMessage}>Sign Up</button>
          <button className="cancel" onClick={Clear}>Reset</button>
          <p>{valid}</p>
        </form>
      </div>
    );
}

export default Validator;
