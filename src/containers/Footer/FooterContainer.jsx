import FootBody from 'components/Footer/FootBody/FootBody';
import React from 'react';

FooterContainer.propTypes = {};

function FooterContainer(props) {
  return (
    <div style={{ width: '100%', maxWidth: 1200 + 'px', margin: 'auto' }}>
      <FootBody />
    </div>
  );
}

export default FooterContainer;
