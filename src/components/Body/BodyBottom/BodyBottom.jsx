import React from 'react';
import PropTypes from 'prop-types';
import './BodyBottom.scss';

BodyBottom.propTypes = {
  news: PropTypes.array.isRequired,
};

function BodyBottom(props) {
  const { news } = props;

  const handleShowNews = (news) => {
    if (!news) return;
    return news.map((item, index) => (
      <div key={index} className="row news-item">
        <img src={item.image} alt="" className="col" />
        <p className="content col">{item.content}</p>
      </div>
    ));
  };

  return (
    <div className="row p-3">
      <div className="col-xs-12 col-sm-12 col-lg-4 left-item item">
        <div className="title">
          <p>TƯ VẤN CHỌN MUA</p>
          <a href="##">
            Xem thêm <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
        <img
          src="https://cdn.tgdd.vn/Files/2021/09/24/1385280/tan-huong-tron-ven-the-gioi-giai-tri-dinh-cao-cung-2-760x367.jpg"
          alt=""
        />
        <h5 className="content2">
          Truyền hình K+ chính thức có mặt tại Thế Giới Di Động và Điện máy XANH, tặng ngay phí lắp đặt 200k.
        </h5>
      </div>
      <div className="col-xs-12 col-sm-12 col-lg-4 center-item item">{handleShowNews(news)}</div>
      <div className="col-xs-12 col-sm-12 col-lg-4 item right-item">
        <div className="title">
          <p>MÓN NGON MỖI NGÀY</p>
          <a href="##">
            Xem thêm <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
        <img
          src="https://cdn.tgdd.vn/2021/09/CookDishThumb/cach-lam-dua-hau-dam-sua-mat-lanh-cuc-don-gian-chieu-dai-gia-thumb-620x620.jpg"
          alt=""
        />
        <p className="content2 ">Cách làm dưa hấu dầm sữa mát lạnh, cực đơn giản chiêu đãi gia đình</p>
      </div>
    </div>
  );
}

export default BodyBottom;
