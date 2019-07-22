import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";
import DetailPage from "./DetailPage";

const Test = props => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { getData, myGetData } = contactContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // getData();
    if (!isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const onClick = () => {
    // console.log(contactContext);
    getData();
  };

  // no data :
  const no_data = (
    <Fragment>
      <div> there is no data</div>
      <div>please contact the trooper</div>
    </Fragment>
  );

  /*
    <div>
      {myGetData.map(item => (
        <div>{item.title}</div>
      ))}
    </div>
  */

  // with data :
  const with_data = (
    <div>
      This is some data
      {/* {myGetData[0].title} */}
    </div>
  );

  return (
    <Fragment>
      <div>
        <h1>Dynamic Link</h1>
        <button onClick={onClick}>test</button>
      </div>
      <ul>{myGetData == null ? no_data : <div>DATA</div>}</ul>
      <DetailPage />
    </Fragment>
  );
};

export default Test;
