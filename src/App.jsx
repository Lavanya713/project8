import React from 'react'
import { useState } from 'react';
import './App.css'

export default function App() {
  const IMGURL = import.meta.env.BASE_URL;

  const [isLoginView, setIsLoginView] = useState(true);
  const [tooglePassword, setTooglePassword] = useState("password");

  function switchView() {
    setIsLoginView(isLoginView === true ? false : true);
  }

  function tooglePwd() {
    setTooglePassword(
      tooglePassword === "password" ? "text" : "password"
    );
  }

  return (
    <div className='app'>
      {isLoginView === true &&
        <div className='login-container'>
          <h2>Sign in with email</h2>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "mail.jpg"} alt="" />
            <input type='text' placeholder='Enter a emailID' />
          </div>

          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "lock.jpg"} alt='' />
            <input type={tooglePassword} placeholder='Enter your password' />
            <img
              className='right-icon'
              src={IMGURL + "eye.jpg"}
              alt=''
              onClick={() => tooglePwd()}
            />
          </div>

          <p>
            Don't have an account?
            <label onClick={() => switchView()}> Sign Up</label>
          </p>

          <button>Sign In</button>
        </div>
      }

      {isLoginView === false &&
        <div className='signup-container'>
          <div className>
          <img className src={IMGURL+"kl.jpg"}alt=''/>
          
          </div>
          <h2>Register for a new account</h2>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"user.jpg"}alt=''/>
          <input type='text'placeholder='First Name'/>
          </div>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"user.jpg"}alt=''/>
          <input type='text'placeholder='Last Name'/>
          </div>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"phone.jpg"}alt=''/>
          <input type='text'placeholder='Mobile Number'/>
          </div>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"mail.jpg"}alt=''/>
          <input type='text'placeholder='Email Address'/>
          </div>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"pass.png"}alt=''/>
          <input type={tooglePassword} placeholder='Password'/>
          <img
              className='right-icon'
              src={IMGURL + "eye.jpg"}
              alt=''
              onClick={() => tooglePwd()}
            />
          </div>
          <div className='input-group'>
          <img className='left-icon' src={IMGURL+"pass.png"}alt=''/>
          <input type={tooglePassword}placeholder='Conform Password'/>
          <img
              className='right-icon'
              src={IMGURL + "eye.jpg"}
              alt=''
              onClick={() => tooglePwd()}
            />
          </div>
       
        <button>Register</button>
          <p>
            if you have account already
            <label onClick={() => switchView()}> Sign In</label>
          </p>
        </div>
      }
    </div>
  );
}
