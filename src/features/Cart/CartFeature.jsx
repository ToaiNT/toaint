import saleCodeApi from 'api/saleCodeApi';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { handleSaleCoin, handleTotalCoin, onAddToCart, onChangeQuantity, onRemoveCart } from './CartSlice';

CartFeature.propTypes = {};

function CartFeature(props) {
  const numberPhone = localStorage.getItem('numberPhone');
  const totalCoin = localStorage.getItem('totalCoin');
  const newTotalCoin = localStorage.getItem('newTotalCoin');
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const [value, setValue] = useState('');
  const [isShow, setIsShow] = useState(false);

  const handleShowCart = (carts) => {
    if (!carts) return;
    return carts.map((cart, index) => {
      const { product, quantity } = cart;
      return (
        <div key={index} className="cart-item row">
          <div className="item-left">
            <img src={product.image} alt="" />
            <div onClick={() => handleRemoveCart(index)} className="remove-btn">
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
              Xóa
            </div>
          </div>
          <div className="item-center">
            <h6>{product.name}</h6>
            <p>{product.gift}</p>
            {handleInventory(product.inventory)}
          </div>
          <div className="item-right">
            <p className="new-price">
              {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * quantity * 10000).toLocaleString()}đ
            </p>
            <p className="old-price">{(product.price * quantity).toLocaleString()}đ</p>
            <div className="row">
              <div className="input-group quatity-group">
                <span onClick={() => handleChangeQuantity(index, -1)} className="">
                  -
                </span>
                <span className="quatity">{quantity}</span>
                <span onClick={() => handleChangeQuantity(index, 1)} className="">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const handleInventory = (inventory) => {
    if (inventory > 0) {
      return <p className="stocking">Hiện còn {inventory} sản phẩm</p>;
    } else {
      return <p className="out-of-stock">Sản phẩm tạm hết hàng</p>;
    }
  };
  const handleCheckDeliveryForm = () => (
    <div className="row form-group">
      <div className="form-check col">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Giao tận nơi
        </label>
      </div>
      <div className="form-check col">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Nhận tại siêu thị
        </label>
      </div>
    </div>
  );
  const handleChangeQuantity = (index, quantity) => {
    if (!onAddToCart) return;
    const data = {
      index: index,
      quantity: quantity,
    };
    const actions = onChangeQuantity(data);
    dispatch(actions);
    setIsShow(false);
    setValue('');
  };
  const handleRemoveCart = (index) => {
    if (!onRemoveCart) return;
    const actions = onRemoveCart(index);
    dispatch(actions);
    setIsShow(false);
    setValue('');
  };
  const handleShowTotalCoin = () => {
    if (!handleTotalCoin) return;
    const actions = handleTotalCoin();
    dispatch(actions);
  };

  const onChangeSaleCode = (e) => {
    setValue(e.target.value);
    setIsShow(false);
  };
  const handleApplySaleCode = (value, saleCode, totalCoin) => {
    var percentSale = 0;
    saleCode.forEach((item, index) => {
      if (item.code === value.toUpperCase()) {
        percentSale = item.sale;
      }
    });
    if (!handleSaleCoin) return;
    const data = {
      percentSale: percentSale,
      totalCoin: totalCoin,
    };
    const actions = handleSaleCoin(data);
    dispatch(actions);
    if (percentSale !== 0) {
      setIsShow(true);
    }
  };

  const [saleCode, setSaleCode] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {};
      const salecodes = await saleCodeApi.getAll(params);
      setSaleCode(salecodes);
    };

    fetchProducts();
  }, []);

  return (
    <div className="cart">
      <div className="cart-products">{handleShowCart(carts)}</div>
      <div className="cart-info info-customer">
        <h6 className="cart-title">THÔNG TIN KHÁCH HÀNG</h6>
        <p className="customer-phone">Số điện thoại mua hàng +84 {numberPhone}</p>
        <h6 className="cart-title">CHỌN CÁCH THỨC NHẬN HÀNG</h6>
        {handleCheckDeliveryForm()}
        <input className="other-request" type="text" placeholder="Yêu cầu khác (Không bắt buộc)" />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Xuất hóa đơn công ty
          </label>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input value={value} onChange={onChangeSaleCode} type="text" className="form-control" id="floatingInput" />
        <label htmlFor="floatingInput">Hãy thử với SALE20, SALE30 và SALE50</label>
        <button onClick={() => handleApplySaleCode(value, saleCode, totalCoin)} className="apply-btn">
          Áp dụng
        </button>
      </div>
      <div className="total-coin">
        <div className="total-top">
          <p>Tổng tiền</p>
          {handleShowTotalCoin()}
          <div className={'total-container ' + (isShow ? 'show' : '')}>
            <p className="re-total">{Number(totalCoin).toLocaleString()}đ</p>
            <i className="fa fa-arrow-right pt-1" aria-hidden="true"></i>
            <p className="total">{Number(newTotalCoin).toLocaleString()}đ</p>
          </div>
        </div>
        <button className="order-btn">ĐẶT HÀNG</button>
      </div>
    </div>
  );
}

export default CartFeature;
