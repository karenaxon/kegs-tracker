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
        <h4>Description {props.description}</h4>
        <h4>Pints Left: {props.currentPints}</h4>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  description: PropTypes.string,
  currentPints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
