import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";


class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
    }
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (addKeg) => {
    const newMainKegList = this.state.mainKegList.concat(addKeg);
    this.setState({mainKegList: newMainKegList,
                formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonStyle = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Kegs List";
      buttonStyle = "btn btn-black";
    }else {
    currentlyVisibleState = <KegList />
      buttonText = "Add a New Keg";
      buttonStyle = "btn btn-black";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className={buttonStyle}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KegControl;