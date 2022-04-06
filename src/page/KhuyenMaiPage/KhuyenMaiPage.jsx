import khuyenMaiApi from 'api/KhuyenMaiApi';
import Pagination from 'components/Pagination/Pagination';
import React, { useEffect, useState } from 'react';
import './KhuyenMaiPage.scss';

KhuyenMaiPage.propTypes = {};

function KhuyenMaiPage(props) {
  const [sales, setSales] = useState([]);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 4,
    _totalRows: 1,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      const sales = await khuyenMaiApi.getAll(params);
      setSales(sales);
    };

    fetchProducts();
  }, [params]);

  const handleShowSaleItem = (sales) => {
    if (!sales) return;
    return sales.map((sale, index) => (
      <div key={index} className="card col-md-6">
        <div className="card-item">
          <img src={sale.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{sale.title}</h5>
            <p>{sale.postDate}</p>
          </div>
          <div className="card-bottom">
            <p className="card-text">{sale.content}</p>
          </div>
        </div>
      </div>
    ));
  };

  const handlePageChange = (newParams) => {
    setParams({
      ...params,
      _page: newParams,
    });
  };

  return (
    <div className="sale-page">
      <div className="header">
        <p>
          Trang chủ <i className="fa fa-angle-right" aria-hidden="true"></i> Khuyến mãi
        </p>
        <p>Tổng đài tư vấn: 1800.1061 - (028)39.486.789</p>
      </div>
      <div className="main-content row">{handleShowSaleItem(sales)}</div>
      <Pagination pagination={params} onPageChange={handlePageChange} />
    </div>
  );
}

export default KhuyenMaiPage;
