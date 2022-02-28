import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import DefaultImage from './../images/default-image.jpeg';

function KegList(props){

  return(
    <React.Fragment>
      {props.kegList.map((keg)=>
        <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          image={DefaultImage}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          description={keg.description}
          currentPints={keg.currentPints}
          id={keg.id}
          key={keg.id}
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