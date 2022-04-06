import newsApi from 'api/newsApi';
import typeProductApi from 'api/typeProductApi';
import BarTop from 'components/Body/BarTop/BarTop';
import BodyBottom from 'components/Body/BodyBottom/BodyBottom';
import BrandPage from 'components/Body/BrandPage/BrandPage';
import HotSearch from 'components/Body/HotSearch/HotSearch';
import ProductList from 'components/Body/Products/ProductList/ProductList';
import ProductsSaleDay from 'components/Body/Products/ProductsSaleDay/ProductsSaleDay';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BodyContainer.scss';
BodyContainer.propTypes = {};

function BodyContainer(props) {
  const products = useSelector((state) => state.products);
  // handle search & filter
  const [typeProduct, setTypeProduct] = useState([]);
  const [filter, setFilter] = useState({
    _limit: 1,
    _page: 1,
  });
  useEffect(() => {
    const fetchType = async () => {
      const params = {};
      const type = await typeProductApi.getAll(params);

      setTypeProduct(type);
    };

    fetchType();
  }, [filter]);

  // data
  const slideList = [
    {
      id: 1,
      image: 'https://cdn.tgdd.vn/2021/09/banner/690-300-690x300-8.png',
      title: 'A',
    },
    {
      id: 2,
      image: 'https://cdn.tgdd.vn/2021/09/banner/690-300(1)-690x300.png',
      title: 'B',
    },
    {
      id: 3,
      image: 'https://cdn.tgdd.vn/2021/09/banner/690-300-690x300-16.png',
      title: 'C',
    },
    {
      id: 4,
      image: 'https://cdn.tgdd.vn/2021/08/banner/690-300-690x300-35.png',
      title: 'D',
    },
    {
      id: 5,
      image: 'https://cdn.tgdd.vn/2021/09/banner/690-300-690x300-25.png',
      title: 'E',
    },
    {
      id: 6,
      image: 'https://cdn.tgdd.vn/2021/09/banner/690-300-690x300-28.png',
      title: 'F',
    },
  ];
  const brandProduct = [
    {
      id: 1,
      image: 'https://cdn.tgdd.vn/2021/09/banner/samsung-390x210-1.png',
    },
    {
      id: 2,
      image: 'https://cdn.tgdd.vn/2021/08/banner/giadungonline-new-390x210.png',
    },
    {
      id: 3,
      image: 'https://cdn.tgdd.vn/2021/08/banner/dungcugd-390x210.png',
    },
    {
      id: 4,
      image: 'https://cdn.tgdd.vn/2021/09/banner/appleDT-min-390x210.png',
    },
  ];
  const newProduct = [
    {
      id: 1,
      image: 'https://cdn.tgdd.vn/2021/09/banner/NewGD3(1)-780x420.png',
    },
    {
      id: 2,
      image: 'https://cdn.tgdd.vn/2021/09/banner/NewGD3-1-780x420.png',
    },
    {
      id: 3,
      image: 'https://cdn.tgdd.vn/2021/09/banner/NewGD3-780x420.png',
    },
    {
      id: 4,
      image: 'https://cdn.tgdd.vn/2021/08/banner/NewTV-780x420.jpg',
    },
  ];
  const keyList = [
    'Iphone 13',
    'Món ngon mỗi ngày',
    'Tivi Sony',
    ' Thiết bị y tế',
    'Đồ dùng mẹ và bé',
    'Máy lạnh mới 2021',
    'Máy lạnh Electrolux',
    'Tư vấn đồng hồ',
    'Máy giặt Midea',
  ];

  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const params = {};
      const news = await newsApi.getAll(params);
      setNews(news);
    };

    fetchNews();
  }, []);
  const splitType = (typeProduct, products) => {
    if (!products) return;
    return typeProduct.map((listType, index) => {
      const type = listType.item;
      return <ProductList key={index} idSlide={index} products={products} type={type} />;
    });
  };
  return (
    <div className="container mt-3" style={{ width: '100%', maxWidth: 1200 + 'px', margin: 'auto' }}>
      <BarTop typeProduct={typeProduct} slideList={slideList} />
      <Link to="/mua-online-gia-re-hon">
        <img
          alt=""
          className="fixed-1"
          src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/ctbh_big_t9/dmx/sidebar_left.png"
        />
      </Link>
      <Link to="/mua-online-gia-re-hon">
        <img
          alt=""
          className="fixed-2"
          src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/ctbh_big_t9/dmx/sidebar_right.png"
        />
      </Link>
      <Link to="/mua-online-gia-re-hon">
        <img
          style={{ width: 100 + '%' }}
          alt=""
          className="mt-3 mb-3"
          src="https://cdn.tgdd.vn/2021/05/banner/Desktopbanner-1200x60-1.png"
        />
      </Link>
      <ProductsSaleDay products={products} />
      {splitType(typeProduct, products)}
      <BrandPage brand={brandProduct} title="CHUYÊN TRANG THƯƠNG HIỆU" />
      <BrandPage brand={newProduct} title="SẢN PHẨM MỚI" />
      <BodyBottom news={news} />
      <HotSearch hotKey={keyList} />
      <img
        style={{ width: 100 + '%' }}
        src="https://cdn.tgdd.vn/2021/08/banner/1200x60-1200x60-1-1200x60-1.jpeg"
        alt=""
      />
    </div>
  );
}

export default BodyContainer;
