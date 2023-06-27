import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Signup = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
       
      };

    return (

        <div>
            <div className="signup-body">
                <div className="container_sb">
                    <div className="form-body">
                        <h1 className="font-link text-6xl text-white">Create your account</h1>
                        

                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password:</label>
                                <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className="form-control"/>
                            </div>


      <button type="submit" className="btn btn-primary">Sign up</button>
    </form>


                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Signup;