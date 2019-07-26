import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import SlidePage from './SlidePage';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const {
    deleteContact,
    setCurrent,
    clearCurrent,
    getCurrentContact
  } = contactContext;

  // fade id
  // const { id, name, email, phone, type } = contact;
  const { _id, name, email, phone, type } = contact;
  /*
  useEffect(() => {
    // getData();
    if (!isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, []);
  */

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const onDetail = () => {
    // deleteContact(_id);
    getCurrentContact(contact);
    console.log(_id);
  };

  return (
    <div className="grid-2">
      <div className="card bg-light">
        <h3 className="text-primary text-left">
          {name}
          {''}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge ' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className="list">
          {email && (
            <li>
              <i className="fas fa-envelope-open" /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone-open" /> {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>

          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>

          <Link to={`/${_id}`}>
            <button onClick={onDetail} contact={contact}>
              detail page
            </button>
          </Link>
        </p>
      </div>
      <div className="card bg-light">
        <h1>TEST</h1>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
