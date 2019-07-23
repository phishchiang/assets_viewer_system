import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";

const RealDetail = props => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const { currentSelContact } = contactContext;

  useEffect(() => {
    // getData();
    if (!isAuthenticated) {
      props.history.push("/");
    }
    console.log(currentSelContact.name);
    // eslint-disable-next-line
  }, []);

  return (
    <h2>
      Contact Detail
      <div>{`Name : ${currentSelContact.name}`}</div>
      <div>{`Email : ${currentSelContact.email}`}</div>
      <div>{`Phone : ${currentSelContact.phone}`}</div>
      <div>{`Type : ${currentSelContact.type}`}</div>
    </h2>
  );
};

export default RealDetail;
