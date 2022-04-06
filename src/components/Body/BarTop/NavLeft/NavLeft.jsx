import PropTypes from 'prop-types';
import React from 'react';
import './NavLeft.scss';

NavLeft.propTypes = {
  typeProduct: PropTypes.array.isRequired,
};

function NavLeft(props) {
  const { typeProduct } = props;

  const showProductType = (arr) => {
    return arr.map((item, index) => (
      <a href={'#' + item.path} key={index} className="item">
        {item.title}
        {index < arr.length - 1 ? ', ' : ''}
      </a>
    ));
  };
  return (
    <table className="col-md-3 text-start nav-list ps-4 pe-4">
      <tbody>
        {typeProduct.map((listType, index) => (
          <tr key={index} className="tr-item">
            <td className={'p-2 fa ' + listType.icon} aria-hidden="true"></td>
            <td className="name-type">{showProductType(listType.item)}</td>
            <td className="fa fa-chevron-right pe-2" aria-hidden="true"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NavLeft;
