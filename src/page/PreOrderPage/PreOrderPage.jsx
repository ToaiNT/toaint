import InputTelForm from 'components/InputTelForm/InputTelForm';
import React from 'react';
import './PreOrderPage.scss';

PreOrderPage.propTypes = {};

function PreOrderPage(props) {
  return (
    <div className="pre-order-page">
      <div className="content">
        <img alt="" src="https://www.dienmayxanh.com/lich-su-mua-hang/Content/images/i1.png" />
        <InputTelForm />
      </div>
    </div>
  );
}

export default PreOrderPage;
