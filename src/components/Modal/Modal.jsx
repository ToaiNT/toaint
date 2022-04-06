import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

Modal.propTypes = {
  showAddress: PropTypes.func,
  addressList: PropTypes.array,
};

Modal.default = {
  showAddress: null,
  addressList: [],
};

function Modal(props) {
  const { showAddress, addressList } = props;

  const initAddressId = localStorage.getItem('addressId') ? localStorage.getItem('addressId') : 0;
  const [addressId, setAddressId] = useState(initAddressId);

  const handleChangeAddress = (e) => {
    const addressId = e.target.value;
    localStorage.setItem('addressId', addressId);
    setAddressId(addressId);
  };

  const handleShowAddressToNav = () => {
    if (!showAddress) return;
    showAddress(addressList, addressId);
  };

  const handleShowSelectAddress = (addressList) => {
    if (!addressList) return;

    return addressList.map((address, index) => (
      <option value={index} key={index}>
        {address}
      </option>
    ));
  };

  const handleShowAddress = (addressList, addressId) => {
    if (!addressList || !addressId) return;
    return addressList[addressId];
  };

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chọn địa chỉ nhận hàng
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              Do ảnh hưởng của dịch, một số tỉnh/thành tạm ngưng phục vụ tại siêu thị, chỉ kinh doanh online.{' '}
              <a href="##" className="see-list">
                Xem danh sách
              </a>
            </div>
            <select
              value={addressId}
              onChange={handleChangeAddress}
              className="form-select mt-3 p-3"
              aria-label="Default select example"
            >
              {handleShowSelectAddress(addressList)}
            </select>
            <div className="pt-3">
              <p className="pb-2">
                Tỉnh/Thành phố: <strong>{handleShowAddress(addressList, addressId)}</strong>
              </p>
              <a href="##" className="see-list">
                Chọn địa chỉ khác
              </a>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleShowAddressToNav}
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-confirm"
            >
              XÁC NHẬN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
