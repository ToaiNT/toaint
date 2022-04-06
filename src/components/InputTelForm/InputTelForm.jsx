import React from 'react';
import { Link } from 'react-router-dom';
import './InputTelForm.scss';

InputTelForm.propTypes = {};

function InputTelForm(props) {
  const handleChangeNumberPhone = (e) => {
    localStorage.setItem('numberPhone', Number(e.target.value));
  };
  const handleSubmitNumberPhone = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitNumberPhone} className="input-tel">
      <h4 className="mb-4">Tra cứu thông tin đơn hàng</h4>
      <div>
        <input
          onChange={handleChangeNumberPhone}
          type="number"
          className="form-control pt-3 pb-3 mb-4"
          placeholder="Nhập số điện thoại mua hàng"
        />
      </div>
      <div>
        <Link to="/pre-order/confirm" type="submit" className="btn btn-primary mb-3 w-100 pt-3 pb-3">
          TIẾP TỤC
        </Link>
      </div>
    </form>
  );
}

export default InputTelForm;
