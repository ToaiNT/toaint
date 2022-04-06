import React from 'react';
import './NavSale.scss';

NavSale.propTypes = {};

function NavSale(props) {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a href="##" className="nav-link active text-blue">
          <strong className="text-black">Danh mục </strong>
          <i className="fa fa-caret-down text-black" aria-hidden="true"></i>
          &nbsp; &nbsp; Tất cả nhóm hàng
        </a>
      </li>
      <li className="nav-item">
        <a href="##" className="nav-link cursor-none">
          Tủ lạnh mua Online giảm đến 25%
        </a>
      </li>
      <li className="nav-item">
        <a href="##" className="nav-link cursor-none">
          Tủ đông giảm sâu đến 20%
        </a>
      </li>
      <li className="nav-item">
        <a href="##" className="nav-link cursor-none">
          Chỉ bán Online - Gia dụng giảm đến 49%
        </a>
      </li>
    </ul>
  );
}

export default NavSale;
