import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        required
        type='text'
        name= 'name'
        placeholder='name'/>
        <input
        required
        type='text'
        name='brand'
        placeholder='brand'/>
        <input
        required
        type='text'
        name='price'
        placeholder='price'/>
        <input
        required
        type='text'
        name='alcoholContent'
        placeholder='alcohol content'/>
        <input
        required
        type='text'
        name='description'
        placeholder='description'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;