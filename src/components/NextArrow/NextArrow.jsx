import React from 'react';
import './NextArrow.scss';

NextArrow.propTypes = {};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: 0, width: 54 + 'px', height: 24 + 'px' }}
      onClick={onClick}
    />
  );
}

export default NextArrow;
