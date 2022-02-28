import React from "react";
import PropTypes from "prop-types";
import Image from "./../images/default-image.jpeg";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <img src={Image} className="card-img-center" alt="beer bottle" /> 
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">Add a New Keg</h1>
            <form className="mt-3" onSubmit={props.formSubmissionHandler}>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Name
                </label>
                <input required type="text" name="name" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Image
                </label>
                <input type="file" name="image" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Brand
                </label>
                <input required type="text" name="brand" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Price
                </label>
                <input required type="text" name="price" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Alcohol Content
                </label>
                <input required type="text" name="alcoholContent" />
              </div>
              <div className="mb-3">
                <label className="form-label mx-2" id="label-text">
                  Description
                </label>
                <input required type="text" name="description" />
              </div>
              <button type="submit" className="btn btn-dark mt-3">
                {props.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
