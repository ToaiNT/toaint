import React from 'react';
import './PreOrderHot.scss';

PreOrderHot.propTypes = {};

function PreOrderHot(props) {
  return (
    <div className="col-md-2 pre-order col-sm-3">
      <div className="image-group">
        <div className="image-item">
          <img alt="" style={{ width: 100 + '%' }} src="https://cdn.tgdd.vn/2021/07/banner/Default-TV-254x254.png" />
        </div>
        <div className="image-item">
          <img
            alt=""
            style={{ width: 100 + '%' }}
            src="https://cdn.tgdd.vn/2021/06/banner/Default-Docquyen-254x254.png"
          />
        </div>
      </div>
      <div className="image-group">
        <div className="image-item">
          <img alt="" style={{ width: 100 + '%' }} src="https://cdn.tgdd.vn/2021/08/banner/GD-254x254-2.png" />
        </div>
        <div className="image-item">
          <img
            alt=""
            style={{ width: 100 + '%' }}
            src="https://cdn.tgdd.vn/2021/08/banner/Giadu%CC%A3nglo%CC%9B%CC%81n-254x254.png"
          />
        </div>
      </div>
      <div className="image-group mt-2">
        <img
          alt=""
          style={{ width: 100 + '%' }}
          src="https://cdn.tgdd.vn/2021/08/banner/bannermatbang262x96-524x192-3.jpg"
        />
      </div>
    </div>
  );
}

export default PreOrderHot;
