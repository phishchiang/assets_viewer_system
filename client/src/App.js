import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
import Alerts from './components/layout/Alerts';
// import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

// import Test from "./components/pages/Test";
// import NoMatch from "./components/pages/NoMatch";
import SwitchPage from './components/pages/SwitchPage';
// import AuthContext from "./context/auth/authContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// const authContext = useContext(AuthContext);
// const { _dynamic_link } = authContext;

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <div className="container">
                <Navbar />
                <Alerts />
                <SwitchPage />
              </div>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
