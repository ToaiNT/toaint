import React from 'react';
import PropTypes from 'prop-types';
import './HotSearch.scss';

HotSearch.propTypes = {
  hotKey: PropTypes.array.isRequired,
};

function HotSearch(props) {
  const { hotKey } = props;

  const handleShowHotKey = (hotKey) => {
    if (!hotKey) return;
    return hotKey.map((key, index) => (
      <li key={index} className="">
        {key}
      </li>
    ));
  };
  return (
    <div class="d-flex">
      <p>Tìm kiếm nhiều: </p>
      <ul className="hot-search">{handleShowHotKey(hotKey)}</ul>
    </div>
  );
}

export default HotSearch;
