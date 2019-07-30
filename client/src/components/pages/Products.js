import React, { Fragment } from 'react';

const Products = () => {
  const GGG = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Facebook' },
    { id: 4, name: 'Tesla' },
    { id: 5, name: 'Microsoft' },
    { id: 6, name: 'Spacex' }
  ];

  return (
    <Fragment>
      <div>
        {GGG.map(item => {
          if (item.id % 2 == 1) {
            return [<h1>{item.id}</h1>, <h1>{item.name}</h1>];
          } else {
            return [<h1>{item.name}</h1>, <h1>{item.id}</h1>];
          }
        })}
      </div>
    </Fragment>
  );
};

export default Products;
