import React from "react";
import PropTypes from "prop-types";

function CiderDetail(props){
  const { cider } = props;

  function handlePouringPint(event) {
    event.preventDefault();
    if(cider.pintsRemaining === 1 || cider.pintsRemaining === "sold out") {
      props.onClickingPour({name: cider.name, brewer: cider.brewer, type: cider.type, abv: cider.abv, price: cider.price, pintsRemaining: "sold out", id: cider.id });
    } else {
      props.onClickingPour({name: cider.name, brewer: cider.brewer, type: cider.type, abv: cider.abv, price: cider.price, pintsRemaining: cider.pintsRemaining - 1, id: cider.id });
    }
  }

  return (
    <React.Fragment>
      <h2>Cider Detail</h2>
      <p><strong>Name: </strong> {cider.name}</p>
      <p><strong>Brewery: </strong> {cider.brewer}</p>
      <p><strong>Type: </strong> {cider.type}</p>
      <p><strong>ABV%: </strong> {cider.abv}</p>
      <p><strong>Price (pint): </strong> ${cider.price}</p>
      <p><strong>Pints Remaining: </strong> {cider.pintsRemaining}</p>
      <hr/>
      <button onClick={ handlePouringPint }>Pour Pint</button>
      <hr />
    </React.Fragment>
  );
}

CiderDetail.propTypes = {
  cider: PropTypes.object,
  onClickingPour: PropTypes.func
};

export default CiderDetail;

