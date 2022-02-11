import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h2>Keg Details for {keg.name}</h2>
      <h4>Brand: {keg.brand}</h4>
      <h4>Price: {keg.price}</h4>
      <h4>Alcohol Content: {keg.alcoholContent}</h4>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;