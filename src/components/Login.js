import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log({ email, password });
  };

  return (
    <div className="auth-form login">
      <h2>Login</h2>
      <hr/>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email ID:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <span onClick={() => navigate('/reset-password')}>Forgot Password?</span>
        </div>
        <div>
          <span onClick={() => navigate('/signup')}>Don't have an account? Sign Up</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
