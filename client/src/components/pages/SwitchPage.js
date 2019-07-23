import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Test from "./Test";
import PrivateRoute from "../routing/PrivateRoute";
import NoMatch from "./NoMatch";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import DetailPage from "./DetailPage";
import RealDetail from "./RealDetail";

const SwitchPage = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { getData, myGetData, currentSelContact } = contactContext;

  const { _dynamic_link } = authContext;

  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path={`/${_dynamic_link}`} component={Test} />
      <Route exact path={`/${currentSelContact._id}`} component={RealDetail} />
      {/* <Route exact path={`/${_dynamic_link}/:id`} component={RealDetail} /> */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export default SwitchPage;
