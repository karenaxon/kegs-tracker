import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="name"/>
          <input
        type="text"
        name="brand"
        placeholder="brand"/>
        <input
        type="text"
        name="price"
        placeholder="price"/>
          <input
        type="text"
        name="alcohol content"
        placeholder="alcohol content"/>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;