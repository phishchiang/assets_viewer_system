import React, { Fragment, useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import SlidePage from '../contacts/SlidePage';
import Products from './Products';
import Uploadimage from './UploadImage';
import LoadPage from './LoadPage';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {/* <LoadPage /> */}
      {/* <Uploadimage /> */}
      {/* <div className="wrap-slide">
      </div> */}
      <SlidePage />
      <div className="wrap-products">
        <Products />
        <div className="grid-1">
          <div>
            {/* <ContactFilter /> */}
            {/* <Contacts /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
