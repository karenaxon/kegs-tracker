import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';


class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    console.log("in adding to list");
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState ({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDecreasePints = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    selectedKeg.currentPints -= 1;
    const editedMainKegList = this.state.mainKegList.map((keg => {return keg.id === id ? selectedKeg : keg}));
    this.setState({
      mainKegList: editedMainKegList});
  } 

  handleIncreasePints = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    selectedKeg.currentPints += 1;
    const editedMainKegList = this.state.mainKegList.map((keg => {return keg.id === id ? selectedKeg : keg}));
    this.setState({
      mainKegList: editedMainKegList});
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText='Return to Kegs List'
    } else if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg}
      onClickingDecreasePints={this.handleDecreasePints}
      onClickingIncreasePints={this.handleIncreasePints}
      onClickingDelete={this.handleDeletingKeg}
      onClickingEdit={this.handleEditClick} />
      buttonText='Return to Kegs List'
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText='Return to Kegs List'
    }else {
      currentlyVisibleState = <KegList 
      kegList={this.state.mainKegList} 
      onKegSelection={this.handleChangingSelectedKeg} />
      buttonText='Add a New Keg';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;