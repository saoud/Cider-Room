import React from 'react';
import Cider from './Cider';
import PropTypes from "prop-types";


function CiderList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.ciderList.map((cider) =>
      <Cider whenciderClicked = {props.onCiderSelection}
        name={cider.name}
        brewer={cider.brewer}
        type={cider.type}
        abv={cider.abv}
        price={cider.price}
        pintsRemaining={cider.pintsRemaining}
        id={cider.id}
        key={cider.id}/>
      )}
    </React.Fragment>
  );
}

CiderList.propTypes = {
  ciderList: PropTypes.array,
  onCiderSelection: PropTypes.func
}

export default CiderList;