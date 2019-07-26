import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import logo01 from './logo.png';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, _dynamic_link } = authContext;
  const { clearContact } = contactContext;

  const onLogout = () => {
    logout();
    // Otherwise if relogin from other user, it will pop up the previous contacts
    clearContact();
  };

  // const dynamic_link = "GGGGG";

  const authLinks = (
    <Fragment>
      <div className="navbar bg-primary auth">
        <div className="title spaceing"> </div>
        <div className="title">
          <Link to="/">
            <img src={logo01} className="brand-logo" />
          </Link>
        </div>
        <ul className="login-side">
          <li>Hello {user && user.name}</li>
          <li>
            <a onClick={onLogout} href="#!" style={{ color: '#db664a' }}>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className="navbar bg-primary">
        <div className="title spaceing"> </div>
        <div className="title">
          <Link to="/">SHOP</Link>
        </div>
        <ul className="login-side">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper'
};

export default Navbar;
