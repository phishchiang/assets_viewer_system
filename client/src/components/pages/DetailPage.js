import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import ContactContext from "../../context/contact/contactContext";

const DetailPage = props => {
  const contactContext = useContext(ContactContext);
  const { getData, myGetData } = contactContext;

  const onClick = e => {
    console.log(e);
  };
  return (
    <Fragment>
      <ul>
        {myGetData == null ? (
          <div>NONONO</div>
        ) : (
          myGetData.map(item => (
            <li key={item.id}>
              <Link onClick={onClick} to={`/GGGGG/${item.id}`}>
                {item.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </Fragment>
  );
};

export default DetailPage;
