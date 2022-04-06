import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import NextArrow from 'components/NextArrow/NextArrow';
import PrevArrow from 'components/PrevArrow/PrevArrow';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  idSlide: PropTypes.number.isRequired,
};

function ProductList(props) {
  const { products, type, idSlide } = props;

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

  const handleShowType = (type, products) => {
    if (!type || !products) return;
    return products.map((product, index) =>
      type.map((item, index) => {
        if (product.type !== item.title) return null;
        return (
          <button
            key={index}
            id={item.path}
            type="button"
            data-bs-target={'#carouselExampleCaptions' + idSlide}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current="true"
            aria-label={'Slide ' + (index + 1)}
          >
            {item.title}
          </button>
        );
      })
    );
  };

  const handleShowProduct = (products, item) => {
    if (!products) return;
    return products.map((product, index) => {
      if (product.type === item) {
        return product.list.map((item, index) => <ProductItem key={index} product={item} />);
      } else {
        return null;
      }
    });
  };

  var executed = false;
  return products.map((product, index) => {
    return type.map((item) => {
      if (product.type === item.title && !executed) {
        executed = true;
        return (
          <div
            id={'carouselExampleCaptions' + idSlide}
            className="product-slider2 carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
            key={index}
          >
            <div className="carousel-indicators">{handleShowType(type, products)}</div>
            <div className="carousel-inner">
              {type.map((item, index) => (
                <div key={index} className={'carousel-item ' + (index === 0 ? 'active' : '')}>
                  <Slider {...settings}>{handleShowProduct(products, item.title)}</Slider>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  });
}
export default ProductList;
