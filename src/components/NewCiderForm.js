import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewCiderForm(props){

  function handleNewCiderFormSubmission(event){
    event.preventDefault();
    props.onNewCiderCreation({name: event.target.name.value, brewer: event.target.brewer.value, type: event.target.type.value, abv: event.target.abv.valueAsNumber, price: event.target.price.valueAsNumber, pintsRemaining: 124, id: v4()});
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCiderFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of Cider' />
        <input
          type='text'
          name='brewer'
          placeholder='Name of Brewery' />
        <input
          type='text'
          name='type'
          placeholder='Type of Cider' />
        <input
          type='number'
          name='abv'
          step="0.1"
          placeholder='ABV%' />
        <input
          type='number'
          name='price'
          step="0.1"
          placeholder='Price per Pint' />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewCiderForm.propTypes = {
  onNewCiderCreation: PropTypes.func
}

export default NewCiderForm;

