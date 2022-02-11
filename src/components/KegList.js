import React from "react";
import Keg from "./Keg";
import PintInventory from "./PintInventory";
import PropTypes from "prop-types";

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
        alcoholContent={beer.alcoholContent}/>
        )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onTicketSelection: PropTypes.func
}