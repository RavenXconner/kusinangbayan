import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../firebase/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import '../css/LoginPage.css';
import logo from '../images/logo/logo-no-background.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard'); // Adjust the route accordingly
    } catch (error) {
      setErrorMessage('Google sign-in failed. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Facebook sign-in failed. Please try again.');
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Invalid email or password.');
    }
  };

  const goToCreateAccount = () => {
    navigate('/create-account');
  };

  const closeModal = () => {
    setErrorMessage('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h2>Login to Your Account</h2>
          <p>Login using social networks</p>
          <div className="social-login">
            <button className="social-btn fb-btn" onClick={handleFacebookSignIn}>f</button>
            <button className="social-btn google-btn" onClick={handleGoogleSignIn}>G</button>
          </div>
          <div className="or-separator">OR</div>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleEmailSignIn}>Sign In</button>
          <p onClick={() => navigate('/forgot-password')} className="forgot-password-link">Forgot Password?</p>
        </div>
        <div className="login-right">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Welcome Aboard!</h2>
          <p>Sign up and explore a wealth of Filipino recipes!</p>
          <button onClick={goToCreateAccount} className="sign-up-btn">Sign Up</button>
        </div>
      </div>

      {/* Modal for displaying error messages */}
      {errorMessage && (
        <div className="error-modal">
          <div className="error-modal-content">
            <p>{errorMessage}</p>
            <button onClick={closeModal} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
