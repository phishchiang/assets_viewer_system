import React, { useEffect, useState, useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import jpg02 from '../pages/product_imgs/Home_pic02.jpg';

const LoadPage = () => {
  const contactContext = useContext(ContactContext);

  const { getData, myGetData } = contactContext;

  const [data, setData] = useState('');

  useEffect(() => {
    getData();
    // fetch('http://localhost:5000/upload')
    //   .then(res => res.json())
    //   .then(data => {
    //     // console.log(img)}
    //     var base64Flag = 'data:image/jpeg;base64,';
    //     var imageStr = this.arrayBufferToBase64(data.img.data.data);
    //     setImg({
    //       contentType: data.img.contentType,
    //       data: data.img.data.data,
    //       type: data.img.contentType
    //     });
    //   });
  }, []);

  // const
  const arrayBufferToBase64 = buffer => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach(b => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  return (
    <Fragment>
      <div>
        {myGetData.map(item => {
          return (
            <div>
              <img
                src={
                  'data:image/png;base64,' +
                  arrayBufferToBase64(item.img.data.data)
                }
              />
              <span>{item.img.contentType}</span>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default LoadPage;
