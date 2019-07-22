import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";

const RealDetail = props => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  const { getData, myGetData } = contactContext;

  useEffect(() => {
    // getData();
    if (!isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <h2>
      Real RealDetail
      <p>Page</p>
      <h1>{props.match.params.id}</h1>
    </h2>
  );
};

export default RealDetail;
