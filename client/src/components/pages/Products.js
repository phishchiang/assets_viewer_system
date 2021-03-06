import React, { Fragment } from 'react';
import png01 from './product_imgs/product_pic_srg.jpg';
import png02 from './product_imgs/product_pic_srs.jpg';
import png03 from './product_imgs/product_pic_rwc.jpg';
import png04 from './product_imgs/product_pic_ydc.jpg';
import png05 from './product_imgs/product_pic_uvdw.jpg';
import png06 from './product_imgs/product_pic_ywc.jpg';

const Products = () => {
  const GGG = [
    {
      id: 1,
      name: 'Snow Radiance',
      c_name: '雪白番茄美白丸',
      src: png01,
      link: 'Gloden'
    },
    {
      id: 2,
      name: 'Snow Radiance',
      c_name: '雪白番茄美白丸',
      src: png02,
      link: 'Silvery'
    },
    {
      id: 3,
      name: 'REGENERATIVE WHITENING CRÈME',
      c_name: '焕白防晒乳霜',
      src: png03,
      link: 'Rwc'
    },
    {
      id: 4,
      name: 'YOUTH DEFINING CRÈME',
      c_name: '青春紧致面霜',
      src: png04,
      link: 'YDC'
    },
    {
      id: 5,
      name: 'UV DEFENSE WHITE',
      c_name: '焕白防晒乳霜',
      src: png05,
      link: 'UVDW'
    },
    {
      id: 6,
      name: 'YOUTH WHITE CONCENTRATE',
      c_name: '青春白皙精华液',
      src: png06,
      link: 'YWC'
    }
  ];

  const onClick = link => {
    // window.open('https://www.w3schools.com');
    window.open(`http://117.143.185.254:5000/Web/${link}`);
  };

  let products_layout;
  const normalLayout = (
    <div className="grid-2">
      {GGG.map(item => {
        if (item.id % 2 == 1) {
          return [
            <div
              className="product-layout"
              key={`${item.id}01`}
              onClick={() => onClick(item.link)}
            >
              <img src={item.src} alt="" />
            </div>,
            <div
              className="product-layout"
              key={`${item.id}02`}
              onClick={() => onClick(item.link)}
            >
              <div>{item.name}</div>
              <div>{item.c_name}</div>
            </div>
          ];
        } else {
          return [
            <div
              className="product-layout"
              key={`${item.id}03`}
              onClick={() => onClick(item.link)}
            >
              <div>{item.name}</div>
              <div>{item.c_name}</div>
            </div>,
            <div
              className="product-layout"
              key={`${item.id}04`}
              onClick={() => onClick(item.link)}
            >
              <img src={item.src} alt="" />
            </div>
          ];
        }
      })}
    </div>
  );

  const smallLayout = (
    <div className="grid-2">
      {GGG.map(item => {
        return [
          <div className="product-layout">
            <img src={item.src} alt="" />
          </div>,
          <div className="product-layout">
            <div>{item.name}</div>
            <div>{item.c_name}</div>
          </div>
        ];
      })}
    </div>
  );

  const myFunction = x => {
    if (x.matches) {
      products_layout = smallLayout;
    } else {
      products_layout = normalLayout;
    }
  };

  const x = window.matchMedia('(max-width: 500px)');
  myFunction(x);
  x.addListener(myFunction);

  return <Fragment>{products_layout}</Fragment>;
};

export default Products;
