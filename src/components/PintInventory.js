import React, { useState} from "react";


function PintInventory(){
  const [pints, setPints] = useState(5);
  return(
    <React.Fragment>
      <h4>Pints available: {pints}</h4>
      <button onClick={() => setPints(pints + 1)} className="btn btn-dark">Add a Pint to Inventory</button>
    </React.Fragment>
  );
}

export default PintInventory;