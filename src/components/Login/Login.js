import React, { useState } from 'react';
import './Login.css';
import Image1 from './components/Image1.jpg';
import Image2 from './components/Image2.jpg';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [emailNew, setEmailNew] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailNewChange = (event) => {
    setEmailNew(event.target.value);
  };

  const handlePasswordNewChange = (event) => {
    setPasswordNew(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Handle login logic here
    } else {
      // Handle sign up logic here
      const userData = { Firstname, Lastname, email, password };
      console.log(userData);
    }
    onClose();
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'all 0.5s ease'
  };

  const rightColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    transition: 'all 0.5s ease'
  };

  if (!isLogin) {
    leftColumnStyle.transform = 'translateX(100%)';
    rightColumnStyle.transform = 'translateX(-100%)';
  }

   return (
    <div className="overlay">
      
      <div className="login-box">
        <div className="left-column" style={leftColumnStyle}>
          <h2>{isLogin ? 'Log in' : 'Sign up'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <label>
                First Name:
                <input type="text" placeholder='Your First Name' value={Firstname} onChange={handleFirstNameChange} />
              </label>
            )}
            {!isLogin && (
              <label>
                Last Name:
                <input type="text" placeholder='Your Last Name' value={Lastname} onChange={handleLastNameChange} />
              </label>
            )}
            {!isLogin && (
              <label>
                Last Name:
                <input type="email" placeholder='Your Email' value={emailNew} onChange={handleEmailNewChange} />
              </label>
            )}
            {!isLogin && (
              <label>
                Last Name:
                <input type="password" placeholder='Choose Password' value={passwordNew} onChange={handlePasswordNewChange} />
              </label>
            )}


            {isLogin && (
              <label>
                Email:
                <input type="email" placeholder='Email ID' value={email} onChange={handleEmailChange} />
              </label>
            )}
            {isLogin && (
              <label>
                Password:
                <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
              </label>
            )}
            {isLogin && (
              <h5>Forget Password? <p className='forget_password'>need help</p></h5>
            )}
            <button type="submit">{isLogin ? 'Log in' : 'Sign up'}</button>
          </form>
        </div>
        <div className="right-column" style={rightColumnStyle}>
          {isLogin ? (
            <p><h3>Log in to your account</h3></p>
          ) : (
            <p><h3>Create a new account</h3></p>
          )}
        </div>
      </div>
      <div className="switches">
        <div className={`switch ${isLogin ? 'active' : ''}`} onClick={handleToggle}>Log in</div>
        <div className={`switch ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>Sign up</div>
      </div>
    </div>
  );
};

export default Login;
