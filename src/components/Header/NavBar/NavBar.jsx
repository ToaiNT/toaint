import SearchForm from 'components/Header/SearchForm/SearchForm';
import Suggestion from 'components/Header/Suggestion/Suggestion';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.scss';

NavBar.propTypes = {
  products: PropTypes.array.isRequired,
};

function NavBar(props) {
  const { products } = props;
  const addressList = ['Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ'];
  const addressId = localStorage.getItem('addressId') ? localStorage.getItem('addressId') : 0;
  const [address, setAddress] = useState(addressList[addressId]);

  const handleShowAddress = (addressList, addressId) => {
    setAddress(addressList[addressId]);
  };

  return (
    <nav className="navHeader navbar navbar-expand-lg navbar-light">
      <div className="navbar-center">
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="https://cdn.tgdd.vn/Files/2011/06/10/40705/lo-go-dienmayxanh.png"
            style={{ width: 140 + 'px' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a href="##" className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span>Xem giá, tồn kho tại:</span> <br />
              {address}...
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <Modal addressList={addressList} showAddress={handleShowAddress} />
            <a href="##" className="nav-link">
              <SearchForm products={products} />
            </a>
            <Link to="/cart" className="nav-link cart-btn btn me-3">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Giỏ Hàng
            </Link>
            <Suggestion />
          </li>
          <li className="nav-item">
            <Link to="/pre-order" className="nav-link">
              Lịch sử <br />
              đơn hàng
            </Link>
          </li>
          <li className="nav-item row">
            <div className="col-auto position-relative ms-2">
              <div className="dot-gold"></div>
              <div className="dot-animation"></div>
            </div>
            <span className="nav-link col-auto color-gold cursor-none">
              Vinaphone <strong>TẶNG 20%</strong> giá trị thẻ <br /> nạp - 24/09
            </span>
          </li>
          <li className="nav-item cursor-none">
            <Link to="/tu-van-chon-mua" className="nav-link cursor-none">
              Tư vấn <br />
              chọn mua
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/khuyen-mai" className="nav-link">
              Khuyến mãi
            </Link>
          </li>
          <li className="nav-item cursor-none">
            <Link to="/vao-bep" className="nav-link cursor-none">
              Vào bếp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
