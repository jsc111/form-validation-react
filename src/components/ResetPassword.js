import React, { useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log('Password reset email sent to', email);
  };

  return (
    <div className="auth-form reset">
      <h2>Reset Password</h2>
      <hr/>
      <form onSubmit={handleReset}>
        <div>
          <label>Registered Email ID:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Send Password Reset Link</button>
      </form>
    </div>
  );
}

export default ResetPassword;
