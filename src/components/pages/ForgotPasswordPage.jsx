import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
      setError('');
    } catch (error) {
      setError('Error sending password reset email: ' + error.message);
      setMessage('');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <button className="back-button" onClick={() => navigate('/')}>Back to Login</button>
        <h2>Forgot Your Password?</h2>
        <p>Enter your email to reset your password.</p>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Email"
            className="forgot-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="forgot-password-btn" type="submit">Reset Password</button>
          {message && <p className="message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
