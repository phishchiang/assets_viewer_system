import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import jpg01 from './Home_pic01.jpg';
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
        <img src={jpg01} />
      </div>
      <div>
        <img src={jpg01} />
      </div>
      <div>
        <img src={jpg01} />
      </div>
      <div>
        <img src={jpg01} />
      </div>
    </Carousel>
  );
};

export default SlidePage;
