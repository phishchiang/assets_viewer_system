import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Test from './Test';
import PrivateRoute from '../routing/PrivateRoute';
import NoMatch from './NoMatch';
import ContactContext from '../../context/contact/contactContext';
import RealDetail from './RealDetail';

const SwitchPage = () => {
  const contactContext = useContext(ContactContext);
  const { currentSelContact } = contactContext;

  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute
        exact
        path={`/${currentSelContact._id}`}
        component={RealDetail}
      />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default SwitchPage;
