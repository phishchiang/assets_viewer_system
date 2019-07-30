import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import jpg01 from '../pages/product_imgs/Home_pic01.jpg';
import jpg02 from '../pages/product_imgs/Home_pic02.jpg.png';
import jpg03 from '../pages/product_imgs/Home_pic03.jpg.png';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlidePage = () => {
  return (
    <Carousel
      showArrows={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay={true}
    >
      <div>
        <img src={jpg02} />
      </div>
      <div>
        <img src={jpg03} />
      </div>
      <div>
        <img src={jpg02} />
      </div>
      <div>
        <img src={jpg03} />
      </div>
    </Carousel>
  );
};

export default SlidePage;
