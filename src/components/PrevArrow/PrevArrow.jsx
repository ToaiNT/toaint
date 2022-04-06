import React from 'react';
import './PrevArrow.scss';

PrevArrow.propTypes = {};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: 0, width: 54 + 'px', height: 24 + 'px', zIndex: 3 }}
      onClick={onClick}
    />
  );
}

export default PrevArrow;
