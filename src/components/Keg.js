import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>   
        <h2 className='text-uppercase'>{props.name}</h2>
        <h4>Brand: {props.brand}</h4>
        <h4>Price: {props.price}</h4>
        <h4>Alcohol Content: {props.alcoholContent}</h4>
        <h4>Pints Left: {props.pints}</h4>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
