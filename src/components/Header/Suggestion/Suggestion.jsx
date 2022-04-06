import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import './Suggestion.scss';

Suggestion.propTypes = {};

function Suggestion(props) {
  const [isHidden, setIsHidden] = useState(false);
  const onClose = () => {
    setIsHidden(true);
  };
  return (
    <div className={'suggestion ' + (isHidden ? 'hidden' : '')}>
      <div className="arrow-up"></div>
      <div className="card text-center" style={{ width: 24 + 'rem' }}>
        <div className="card-body">
          <p className="card-text">
            Hãy chọn địa chỉ cụ thể để chúng tôi cung cấp chính xác thời gian và tình trạng hàng.
          </p>
          <div className="btn-group">
            <button
              onClick={onClose}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-danger me-1 rounded"
            >
              Chọn địa chỉ
            </button>
            <Modal />
            <button onClick={onClose} className="btn btn-secondary ms-1 rounded">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
