import React from 'react';
import './TopBtn.scss';

TopBtn.propTypes = {};

function TopBtn(props) {
  const onClickBackTop = () => {
    window.scrollTo(0, 0)
    return false;
  };
  return (
    <div onClick={onClickBackTop} class="back-top">
      <button className="hidden-phone">
      </button>
    </div>
  );
}

export default TopBtn;
