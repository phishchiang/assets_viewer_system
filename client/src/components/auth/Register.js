import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const { email, password, password2 } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('Register submit');
      register({
        email: email,
        password: password
      });
    }
  };

  return (
    <div className="form-container">
      <div className="inside-container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
              placeholder="Confirm"
            />
          </div>
          <div className="password-item">
            <input type="checkbox" name="rememberMe" value="rememberMe" />
            <span>
              {' '}
              I have read and agree to the{' '}
              <Link
                to="/register"
                style={{
                  color: 'white',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1px'
                }}
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/register"
                style={{
                  color: 'white',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1px'
                }}
              >
                Privacy Policy.
              </Link>
            </span>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-login btn-block"
          />
          <div className="register-login-buttom">
            Have an accout?{' '}
            <Link
              to="/login"
              style={{
                color: 'white',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px'
              }}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
