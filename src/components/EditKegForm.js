import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({name: event.target.name.value, brand: event.target.brand.value, price: event.price.target.price.value, alcoholContent: event.alcoholContent.value, id: keg.id});
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update Keg" />
    </React.Fragment>
  )
};

export default EditKegForm;