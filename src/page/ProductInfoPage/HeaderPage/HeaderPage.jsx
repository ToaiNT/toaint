import React from 'react';
import PropTypes from 'prop-types';

HeaderPage.propTypes = {
  product: PropTypes.object.isRequired,
};

function HeaderPage(props) {
  const { product } = props;
  const showStar = (star) => {
    var result = [];
    for (var i = 1; i <= star; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = i; j <= 5; j++) {
      result.push(<i key={j} className="fa fa-star-o"></i>);
    }
    return result;
  };
  if (!product) return;
  return (
    <div
      className="header-page pt-3 pb-2 border-bottom"
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
    >
      <p className="product-name mb-0 ms-2 me-2">{product.name}</p>
      <img
        style={{ maxHeight: 30 + 'px' }}
        src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/DMX/Product/label-only.png"
        alt=""
        className="me-2"
      />
      <div className="me-2">{showStar(product.star)}</div>
      <p className="mb-0">{product.evaluateQuanty}</p>
    </div>
  );
}

export default HeaderPage;
