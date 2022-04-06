import React from 'react';
import PropTypes from 'prop-types';
import NavLeft from './NavLeft/NavLeft';
import HomeBanner from './HomeBanner/HomeBanner';
import PreOrderHot from './PreOrderHot/PreOrderHot';

BarTop.propTypes = {
  typeProduct: PropTypes.array.isRequired,
  slideList: PropTypes.array.isRequired,
};

function BarTop(props) {
  const { typeProduct, slideList } = props;
  return (
    <div className="row">
      <NavLeft typeProduct={typeProduct} />
      <HomeBanner slideList={slideList} />
      <PreOrderHot />
    </div>
  );
}

export default BarTop;
