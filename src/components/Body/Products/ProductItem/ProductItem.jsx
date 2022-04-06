import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onAddToCart } from '../../../../features/Cart/CartSlice';
import { updatePageInfo } from '../../../../features/PageInfo/PageInfoSlice';
import logo_sale from '../../../../assets/images/sale-stamp-1-624x382.png'; 
import './ProductItem.scss';

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem(props) {
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

  const handleShowSpecialFeature = (specialFeature) => {
    if (!specialFeature) return;
    return specialFeature.split(', ').map((feature, index) => (
      <button key={index} className="btn special-feature">
        {feature}
      </button>
    ));
  };

  const dispatch = useDispatch();
  const handleAddCart = (product, quantity) => {
    const data = {
      product: product,
      quantity: quantity,
    };
    const actions = onAddToCart(data);
    dispatch(actions);
  };

  const handleGoToPageInfo = (product) => {
    const actions = updatePageInfo(product);
    dispatch(actions);
  };

  return (
    <div className="product-item">
      <div className="pic-container">
        <img style={{ width: 100 + '%' }} src={product.image} alt="" />
      </div>
      <div className="product-info">
        <img
          alt=""
          src={logo_sale}
          className={'logo-sale ' + (product.sale > 0 ? '' : 'hidden')}
        />
        <p className="product-name">{product.name}</p>
        <div className="row">{handleShowSpecialFeature(product.specialFeature)}</div>
        <span className={product.online ? '' : 'hidden'}>Online giá rẻ</span>
        <p className={'old-price ' + (product.sale > 0 ? '' : 'hidden ') + (product.online ? '' : 'line-42')}>
          <span>{product.price.toLocaleString()}đ </span> &nbsp;-{product.sale}%
        </p>
        <p className="new-price">
          {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * 10000).toLocaleString()}đ
        </p>
        <span className="gift">{product.gift}</span>
        <div className="rating">
          <div>{showStar(product.star)}</div>
          <p>{product.evaluateQuanty}</p>
        </div>
      </div>
      <div className="background-container">
        <button
          onClick={() => handleAddCart(product, 1)}
          className="fa fa-cart-plus buy-btn"
          aria-hidden="true"
        ></button>
        <Link
          to={'/product/id/' + product.id}
          onClick={() => handleGoToPageInfo(product)}
          className="fa fa-info-circle info-btn"
          aria-hidden="true"
        ></Link>
      </div>
    </div>
  );
}

export default ProductItem;
