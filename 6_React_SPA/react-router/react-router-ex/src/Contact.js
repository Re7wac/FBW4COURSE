import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => (

  < form onSubmit = {
    props.submitHandler
  }
  class = 'col-sm-4 text-center' >
    <label htmlFor="">Email</label>
    <input name="email" type="text" placeholder="Enter your email" />
    <label htmlFor="">Password</label>
    <input name="password" type="text" placeholder="Enter your password" />
    < button type = "submit"
    value = "submit"
    class = "btn btn-gray bg-dark  mt-4" >
      Submit
    </button>
  </form>
);

Contact.propTypes = {
  submitHandler: PropTypes.func.isRequired
};

export { Contact };
