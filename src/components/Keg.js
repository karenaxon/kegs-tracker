import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>  
        <div className="card mb-3 mt-3" style={{maxWidth: 540}}> 
          <div className="row g-0">
            <div className="col-md-4">
              <img src={props.image} className="card-img-top" alt="beer bottle" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-header mb-3">{props.name}</h3>
                <h4>Brand: {props.brand}</h4>
                <h4>Price: $ {props.price}</h4>
                <h4>Alcohol Content: {props.alcoholContent}</h4>
                <h4>Description: <br/>{props.description}</h4>
                <h4 className="card-footer">Pints Left: {props.currentPints}</h4>
              </div>
            </div>
          </div>
        </div>
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
