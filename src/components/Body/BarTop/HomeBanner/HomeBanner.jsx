import PropTypes from 'prop-types';
import React from 'react';
import './HomeBanner.scss';

HomeBanner.propTypes = {
  slideList: PropTypes.array.isRequired,
};

function HomeBanner(props) {
  const { slideList } = props;

  const showCarouselIndicator = (slideList) => {
    return (
      <div className="carousel-indicators">
        {slideList.map((item, index) => (
          <div
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current="true"
            aria-label={'Slide ' + item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
    );
  };

  const showCarouselInner = (slideList) => {
    return (
      <div className="carousel-inner">
        {slideList.map((item, index) => (
          <div key={index} className={'carousel-item ' + (index === 0 ? 'active' : '')}>
            <img alt="" src={item.image} className="d-block w-100" />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div id="carouselExampleIndicators" className="slider carousel slide col-md-6 col-sm-9" data-bs-ride="carousel">
      {showCarouselIndicator(slideList)}
      {showCarouselInner(slideList)}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon rounded-end" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon rounded-start" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeBanner;
