import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Details for {keg.names}</h2>
      <h4>Brand: {keg.brand}</h4>
      <h4>Price: {keg.price}</h4>
      <h4>Alcohol content: {keg.alcoholContent}</h4>
      <h4>Description: {keg.description}</h4>
      <h4>Pints Remaining: {keg.currentPints}</h4>
      <button onClick={() => props.onClickingDecreasePints(keg.id) }>Decrease Pints</button>
      <button onClick={() => props.onClickingIncreasePints(keg.id) }>Increase Pints</button>
      <button onClick={ props.onClickingEdit }>Update Keg Information</button>
      <button onClick={()=> props.onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;