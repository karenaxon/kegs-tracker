import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){

  return(
    <React.Fragment>
      <hr />
      {props.kegList.map((beer)=>
        <Keg
        whenKegClicked = {props.onKegSelection}
        name={beer.name}
        brand={beer.brand}
        price={beer.price}
        alcoholContent={beer.alcoholContent}
        pints={beer.pints}
        />
        )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
}

export default KegList;