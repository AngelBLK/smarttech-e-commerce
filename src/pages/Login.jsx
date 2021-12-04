import React, { useRef } from 'react';
import '@styles/Login.scss';

import { Link } from 'react-router-dom';
const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    // event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userName: formData.get('email'),
      userPassword: formData.get('password')
    }

    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="dante@example.cm" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*******" className="input input-password" />
          <button
            type="submit"
            className="btn-primary login-btn"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <Link to="/recovery-password">Forgot my password</Link>
        </form>
        <button
          className="signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export { Login };