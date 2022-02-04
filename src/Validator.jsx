import React, {useState} from 'react';
import './Validator.css';

function Validator () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [valid, setValid] = useState("")

  const handleUsernameChange = (evt) => {
    console.log(evt.target.value)
    setUsername(evt.target.value)
  }
  
  const handlePasswordChange = (evt) => {
    console.log(evt.target.value)
    setPassword(evt.target.value)
  }
  
  const handlePasswordConfirmChange = (evt) =>{
    // console.log("Button works")
    console.log("This is the password", password)
    setPasswordConfirm(evt.target.value)
  }

  const handleSubmit = (evt) =>{
    evt.preventDefault()
  }

  const clear = () =>{
    setUsername("")
    setPassword("")
    setPasswordConfirm("")
  }

  const validMessage = () => {
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
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="username">Username</label>

          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit" onClick={validMessage}>Sign Up</button>
          <button className="cancel" onClick={clear}>Clear Form</button>
          <p>{valid}</p>
        </form>
      </div>
    );
}

export default Validator;
