import React, { useRef, useState } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';
import { onAddToCart } from 'features/Cart/CartSlice';
import { useDispatch } from 'react-redux';

SearchForm.propTypes = {
  products: PropTypes.array.isRequired,
};

function SearchForm(props) {
  const { products } = props;
  const dispatch = useDispatch();

  const [isTyping, setIsTyping] = useState(false);
  const [keySearch, setKeySearch] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleOnchangeKeySearch = (e) => {
    const value = e.target.value;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (value) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }
    }, 500);

    setKeySearch(value);
  };

  const handleAddCart = (product, quantity) => {
    const data = {
      product: product,
      quantity: quantity,
    };
    const actions = onAddToCart(data);
    dispatch(actions);

    setIsTyping(false);
  };

  const handleShowProductSearching = (keySearch, products) => {
    if (!keySearch || !products) return;

    const newKeySearch = handleRemoveSign(keySearch);
    const newKeySearchNoSign = newKeySearch.split(' ').join('-').toLowerCase();

    return products.map((productList) => {
      const newKeyProduct = handleRemoveSign(productList.type);
      const newKeyProductNoSign = newKeyProduct.split(' ').join('-').toLowerCase();

      if (newKeyProductNoSign === newKeySearchNoSign) {
        return productList.list.map((product, index) => (
          <div key={index} className="search-item row">
            <div className="item-left">
              <img src={product.image} alt="" />
            </div>
            <div className="item-center">
              <h6>{product.name}</h6>
              <p>{product.gift}</p>
            </div>
            <div className="item-right">
              <p className="new-price">
                {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * 10000).toLocaleString()}đ
              </p>
              <p className="old-price">{product.price.toLocaleString()}đ</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddCart(product, 1);
                }}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        ));
      } else {
        return null;
      }
    });
  };

  const handleRemoveSign = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
  };

  return (
    <form className="form-container">
      <input
        value={keySearch}
        type="text"
        onChange={handleOnchangeKeySearch}
        className="form-control search-form"
        placeholder="Bạn tìm gì..."
        aria-label="Search"
      />
      <div className={'container-search ' + (isTyping ? '' : 'hidden')}>
        {handleShowProductSearching(keySearch, products)}
      </div>
    </form>
  );
}

export default SearchForm;
