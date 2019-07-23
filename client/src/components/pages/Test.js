import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";

const Test = props => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { getData, myGetData } = contactContext;
  const { isAuthenticated } = authContext;

  useEffect(() => {
    getData();
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
    <Fragment>
      {myGetData.map(item => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </Fragment>
  );

  return (
    <Fragment>
      <div>
        <h1>Dynamic Link</h1>
        <button onClick={onClick}>test</button>
      </div>
      <ul>{myGetData == null ? no_data : with_data}</ul>
    </Fragment>
  );
};

export default Test;
