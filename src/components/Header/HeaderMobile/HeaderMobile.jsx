import SearchForm from 'components/Header/SearchForm/SearchForm';
import Suggestion from 'components/Header/Suggestion/Suggestion';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

HeaderMobile.propTypes = {
  products: PropTypes.array.isRequired,
};

function HeaderMobile(props) {
  const { products } = props;

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
            <a href="##" className="nav-link">
              <SearchForm products={products} />
            </a>
            <Link to="/cart" className="nav-link cart-btn btn me-3">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Giỏ Hàng
            </Link>
            <Suggestion />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderMobile;
