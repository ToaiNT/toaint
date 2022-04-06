import React from 'react';
import { useSelector } from 'react-redux';
import BodyPage from './BodyPage/BodyPage';
import HeaderPage from './HeaderPage/HeaderPage';

ProductInfoPage.propTypes = {};

function ProductInfoPage(props) {
  const product = useSelector((state) => state.pageInfo.data);
  console.log(product);
  return (
    <div>
      <HeaderPage product={product} />
      <BodyPage product={product} />
    </div>
  );
}

export default ProductInfoPage;
