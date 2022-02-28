import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  let kegStatus = null;

    if(keg.currentPints === 0){
    kegStatus = <h4>Pints Remaining: EMPTY</h4>
    } else{
      kegStatus = <><h4>Pints Remaining: {keg.currentPints}</h4>
      <button onClick={() => props.onClickingDecreasePints(keg.id)} className="btn btn-dark m-3">Decrease Pints</button></>
    }
  
  return (
    <React.Fragment>
      <h2>Details for {keg.names}</h2>
      <h4>Brand: {keg.brand}</h4>
      <h4>Price: {keg.price}</h4>
      <h4>Alcohol content: {keg.alcoholContent}</h4>
      <h4>Description: {keg.description}</h4>
      {kegStatus}
      <button onClick={() => props.onClickingIncreasePints(keg.id) }className="btn btn-dark m-3">Increase Pints</button>
      <button onClick={ props.onClickingEdit } className="btn btn-dark m-3">Update Keg Information</button>
      <button onClick={()=> props.onClickingDelete(keg.id)} className="btn btn-dark m-3">Delete Keg</button>
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