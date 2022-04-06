import React from 'react';
import './SliderHeader.scss';

SliderHeader.propTypes = {};

function SliderHeader(props) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            alt=""
            src="https://cdn.tgdd.vn/2021/09/banner/1200-44-1200x44-7.png"
            style={{ height: 44 + 'px' }}
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            alt=""
            src="https://cdn.tgdd.vn/2021/08/banner/1200-44-1200x44-1.png"
            style={{ height: 44 + 'px' }}
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SliderHeader;
