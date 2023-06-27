import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
            <div className="signup-body">
                <div className="container_sb">
                    <div className="form-body">
                        <h1 className="font-link text-6xl text-white h-40 ">Log in to your account</h1>
                        
                        <form onSubmit={handleSubmit} className="login-form ">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
        />
        <span className="forgot-password">
          <Link to="/reset-password " className='text-white'>Forgot Password?</Link>
        </span>
      </div>
      <div className="form-group">
        <Link to="/signup" className="signup-link text-white">
          Don't have an account? Sign up
        </Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>


                    </div>
                </div>
                
            </div>
        </div>
  );
}

export default Login;
