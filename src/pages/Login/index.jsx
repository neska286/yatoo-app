

import './login.css'
import { useContext, useRef } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
 const {user,dispatch , isFetching} = useContext(Context);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("http://localhost:5000/users",{
        username : userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    }catch(error){
      dispatch({type:"LOGIN_FAILURE"})
    }
   
  };
console.log('isFetching',isFetching)
console.log('user',user)
  return (
    <div className='login'>
        <span className="login-title">Login</span>
        <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className='login-input' placeholder='Enter your username ....'
              ref={userRef}  />
            <label>Password</label>
            <input type="password"className='login-input' placeholder='Enter your password ....'
              ref={passwordRef} />
        <button className='login-btn' type="submit" disabled ={isFetching}>Login</button>
        </form>
        {/* {error && <span>Somthing went wrong</span>} */}
    </div>
  )
}

export default Login
