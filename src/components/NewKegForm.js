import React  from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import DefaultImage from './../images/default-image.jpeg'

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    // event.preDefault();
    
    function getImage() {
      if(event.target.file){
        return event.target.file;
      } else{
        return DefaultImage;
      }
    }

    props.onNewKegCreation({
      name: event.target.name.value, 
      image: getImage(),
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value,
      description: event.target.description.value, 
      currentPints: 124, 
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText='Submit' />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;