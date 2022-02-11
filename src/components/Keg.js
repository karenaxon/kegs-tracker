import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <div class='container'>
        <h2 class='text-uppercase'>{props.name}</h2>
        <h4>Brand: {props.brand}</h4>
        <h4>Price: {props.price}</h4>
        <h4>Alcohol Content: {props.alcoholContent}</h4>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string
}

export default Keg;
