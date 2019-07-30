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
      src: png01
    },
    {
      id: 2,
      name: 'Snow Radiance',
      c_name: '雪白番茄美白丸',
      src: png02
    },
    {
      id: 3,
      name: 'REGENERATIVE WHITENING CRÈME',
      c_name: '焕白防晒乳霜',
      src: png03
    },
    {
      id: 4,
      name: 'YOUTH DEFINING CRÈME',
      c_name: '青春紧致面霜',
      src: png04
    },
    {
      id: 5,
      name: 'UV DEFENSE WHITE',
      c_name: '焕白防晒乳霜',
      src: png05
    },
    {
      id: 6,
      name: 'YOUTH WHITE CONCENTRATE',
      c_name: '青春白皙精华液',
      src: png06
    }
  ];

  return (
    <Fragment>
      <div className="grid-2">
        {GGG.map(item => {
          if (item.id % 2 == 1) {
            return [
              <div className="product-layout">
                <img src={item.src} alt="" />
              </div>,
              <div className="product-layout">
                <div>{item.name}</div>
                <div>{item.c_name}</div>
              </div>
            ];
          } else {
            return [
              <div className="product-layout">
                <div>{item.name}</div>
                <div>{item.c_name}</div>
              </div>,
              <div className="product-layout">
                <img src={item.src} alt="" />
              </div>
            ];
          }
        })}
      </div>
    </Fragment>
  );
};

export default Products;
