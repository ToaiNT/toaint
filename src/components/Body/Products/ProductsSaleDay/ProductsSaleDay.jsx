import NextArrow from 'components/NextArrow/NextArrow';
import PrevArrow from 'components/PrevArrow/PrevArrow';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ProductItem from '../ProductItem/ProductItem';
import './ProductsSaleDay.scss';

ProductsSaleDay.propTypes = {
  products: PropTypes.array.isRequired,
};

function ProductsSaleDay(props) {
  const { products } = props;
  const data = [];
  if (products.length) {
    products.forEach((productByType) => {
      productByType.list.forEach((product) => {
        if (product.sale >= 29) {
          data.push(product);
        }
      });
    });
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };
  return (
    <div className="product-slider">
      <h2 className="title">Săn Sale Online Mỗi Ngày</h2>
      <Slider {...settings}>
        {data.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductsSaleDay;
