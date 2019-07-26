import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import shop_bg from './Shop_bg.png';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const {
    login,
    error,
    clearErrors,
    isAuthenticated,
    _dynamic_link
  } = authContext;

  useEffect(() => {
    // Once login, we'll get redirected to home page
    if (isAuthenticated) {
      props.history.push(`/`);
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { name, email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('Login submit');
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email: email,
        password: password
      });
    }
  };

  return (
    <div className="form-container">
      <div className="between-container">
        <div className="inside-container">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="password">
              <div className="password-item">
                <input type="checkbox" name="rememberMe" value="rememberMe" />
                <span> Remember me</span>
              </div>
              <Link to="/login" className="password-item">
                Forgot password?
              </Link>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-login btn-block"
            />
          </form>
          <div className="register-login-buttom">
            New to here?{' '}
            <Link
              to="/register"
              style={{
                color: 'white',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px'
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
