import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./s1.css"
const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enable arrow navigation
      };

  return (
    <div className='parent-div'>
      <Slider {...settings}>
        <div className=''>
          <img
            src="images/logo-kingston.png"
            alt="Kingston Upon Thames logo"
            className="item__image lazy"
          />
        </div>
        <div>
          <img
            src="images/logo-ark.jpg"
            alt="ARK"
            className="item__image lazy"
          />
        </div>
        
        {/* Add other images here */}
      </Slider>
    </div>
  );
};

export default Slider1;
