import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page } = pagination;

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)} className="page-link">
            Previous
          </button>
        </li>
        <li className="page-item">
          <button disabled={_page >= 3} onClick={() => handlePageChange(_page + 1)} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
