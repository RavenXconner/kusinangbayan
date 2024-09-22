import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/CreateAccountPage.css';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Account created successfully!');
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setMessage('');
      setError('Error creating account: ' + error.message);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <button className="back-button" onClick={() => navigate('/')}>Back to Login</button>
        <h2>Create Your Account</h2>
        <form onSubmit={handleCreateAccount}>
          <input
            type="email"
            placeholder="Email"
            className="create-account-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="create-account-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="create-account-btn" type="submit">Sign Up</button>
          {message && <p className="message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
