import React from 'react';
import './FootInfo.scss';
import logo_facebook from '../../../../assets/images/1200px-Facebook_Logo_(2019).png'

FootInfo.propTypes = {};

function FootInfo(props) {
  return (
    <div className="info-and-link">
      <ul className="info-left info-item">
        <li>Giới chiệu công ty (MWG.vn)</li>
        <li>Tuyển dụng</li>
        <li>Gửi góp ý, khiếu nại</li>
        <li>Tìm siêu thị (1761 shop)</li>
        <li>Xem bản mobile</li>
      </ul>
      <ul className="info-center info-item">
        <li>
          <strong>Tổng đài hỗ trợ </strong>(Miễn phí khi gọi)
        </li>
        <li>
          Gọi mua:{' '}
          <a href="tel: 18001061">
            <span>1800.1061 </span>
          </a>
          (7:30-22:00)
        </li>
        <li>
          Kỹ thuật:{' '}
          <a href="tel: 18001764">
            <span>1800.1764 </span>
          </a>
          (7:30-22:00)
        </li>
        <li>
          Khiếu nại:{' '}
          <a href="tel: 18001063">
            <span>1800.1063 </span>
          </a>
          (8:00-21:30)
        </li>
        <li>
          Bảo hành:{' '}
          <a href="tel: 18001065">
            <span>1800.1065 </span>
          </a>
          (8:00-21:00)
        </li>
      </ul>
      <div className="info-right info-item">
        <div className="row info-right-top">
          <div className="col">
            <img
              alt=""
              style={{ width: 36 + 'px' }}
              src={logo_facebook}
            />
            <span>1804.4K Fan</span>
          </div>
          <div className="col">
            <img
              alt=""
              style={{ width: 36 + 'px' }}
              src={logo_facebook}
            />
            <span>568K Fan</span>
          </div>
        </div>
        <img
          style={{ height: 48 + 'px' }}
          alt=""
          src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/04/4277831_upload_2018-4-2_14-40-43.png"
        />
        <div className="logo-web">
          <p>Website cùng tập đoàn: </p>
          <div>
            <img
              alt=""
              style={{ height: 70 + 'px' }}
              src="https://tutimviec.com/wp-content/uploads/2019/05/tgdd-amp.jpg"
            />
            <img
              alt=""
              style={{ height: 32 + 'px' }}
              src="https://cdn.tgdd.vn/bachhoaxanh/www/Content/images/logo.png"
            />
            <img alt="" style={{ height: 32 + 'px' }} src="https://www.maiamtgdd.vn/images/hinhthumb.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootInfo;
