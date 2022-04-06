import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import NextArrow from 'components/NextArrow/NextArrow';
import PrevArrow from 'components/PrevArrow/PrevArrow';
import './BrandPage.scss';

BrandPage.propTypes = {
  brand: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

function BrandPage(props) {
  const { brand, title } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };
  return (
    <div class="brand-container">
      <h2 className="title">{title}</h2>
      <Slider {...settings}>
        {brand.map((item, index) => (
          <div key={index} className="slide-item">
            <img src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BrandPage;
