import React from 'react';
import PropTypes from "prop-types";


function Cider(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCiderClicked(props.id)}>
        <div class="tooltip"><p><strong>Cider Name: </strong> {props.name}</p>
          <span class="tooltiptext">click to see details</span>
        </div>
      </div>

    </React.Fragment>
  );
}

Cider.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenCiderClicked: PropTypes.func,
  onClickingPour: PropTypes.func
}

export default Cider;