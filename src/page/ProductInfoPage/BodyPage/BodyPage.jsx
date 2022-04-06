import React from 'react';
import PropTypes from 'prop-types';

BodyPage.propTypes = {
  product: PropTypes.object.isRequired,
};

function BodyPage(props) {
  const { product } = props;
  if (!product) return;
  return <img src={product.image} alt="" />;
}

export default BodyPage;
