import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

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
      <li>
        <Link to={`/${_dynamic_link}`}>Dynamic Page</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          {' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/">testtttt</Link>
      </li>
      <li>
        <Link to={`/${_dynamic_link}`}>Dynamic Page</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
