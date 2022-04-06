import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ConfirmNumberPhone.scss';

ConfirmNumberPhonePage.propTypes = {};

function ConfirmNumberPhonePage(props) {
  const numberPhone = localStorage.getItem('numberPhone');
  const [timeLeft, setTimeLeft] = useState(30);

  const handleShowConfirmForm = (numberPhone) => {
    if (!numberPhone) return;
    return (
      <h4 className="mb-4">
        Mã xác nhận đã được gửi đến số điện thoại <strong>+84 {numberPhone}</strong>
      </h4>
    );
  };

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  });

  const handleCountDown = () => {
    if (timeLeft > 0) {
      return (
        <p>
          Nếu không nhận được mã, thử lại sau <strong>{timeLeft}</strong> giây
        </p>
      );
    } else {
      return <p>Tôi không nhận được mã, vui lòng thử lại</p>;
    }
  };

  return (
    <div className="pre-order-page">
      <form className="input-number-confirm confirm-page">
        {handleShowConfirmForm(numberPhone)}
        <div>
          <input type="number" className="form-control pt-3 pb-3 mb-4" placeholder="Nhập mã xác nhận gồm 4 chữ số" />
        </div>
        <div>
          <Link to="/pre-order/confirm" type="submit" className="btn btn-primary mb-3 w-100 pt-3 pb-3">
            TIẾP TỤC
          </Link>
        </div>
        {handleCountDown(numberPhone)}
        <a href="##">Thay đổi số điện thoại</a>
      </form>
    </div>
  );
}

export default ConfirmNumberPhonePage;
