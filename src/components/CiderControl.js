import React from 'react';
import NewCiderForm from './NewCiderForm';
import CiderList from './CiderList';
import CiderDetail from './CiderDetail';


class CiderControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCiderList:[],
      selectedCider: null
    };
  }

  handlePouringSelectedCider = (ciderToPour) => {
    const changedPintsRemaining = this.state.masterCiderList.filter(cider => cider.id !== this.state.selectedCider.id).concat(ciderToPour);
    this.setState({
      masterCiderList: changedPintsRemaining,
      selectedCider: ciderToPour,
    });
  }

  handleChangingSelectedCider = (id) => {
    const selectedCider = this.state.masterCiderList.filter(cider => cider.id === id)[0];
    this.setState({selectedCider: selectedCider});
  }

  handleAddingNewCiderToList = (newCider) => {
    const newMasterCiderList = this.state.masterCiderList.concat(newCider);
    this.setState({masterCiderList: newMasterCiderList,
    formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedCider != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCider: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCider != null) {
      currentlyVisibleState = <CiderDetail cider = {this.state.selecteCider}
      onClickingPour = {this.handlePouringSelectedCider} />
      buttonText = "Return to Cider List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCiderForm onNewCiderCreation={this.handleAddingNewCiderToList}/>;
      buttonText = "Return to Cider List";
    } else {
      currentlyVisibleState = <CiderList CiderList={this.state.masterCiderList} onCiderSelection={this.handleChangingSelectedCider}/>;
      buttonText = "Add Cider";
      
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

  
}

export default CiderControl;