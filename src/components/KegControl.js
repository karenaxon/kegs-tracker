import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';
import Coco from './../images/Coco.jpeg';

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: "Coco Jones Coconut Porter",
          image: {Coco},
          brand: "Black Raven",
          price: '6',
          alcoholContent: '5.6%',
          description: 'A Tamerlane Brown Porter, with it\'s subtle nut and coffee tones takes a delicious turn when infused with freshly toasted coconuts.',
          currentPints: 4,
          id: '1', 
        },
        {
          name: "Updraft Pale Ale",
          image: {Coco},
          brand: "Black Raven",
          price: '6.50',
          alcoholContent: '5.5%',
          description: 'This modern take on a classic style is built on a light pale malt profile. From there, we layer on some exciting, newer hop varietals. These hops contribute a range of flavors and aromatics from light citrus & melon to various tropical fruits.',
          currentPints: 10,
          id: '2', 
        },  
      ],
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
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
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
      currentlyVisibleState = <EditKegForm 
      keg = {this.state.selectedKeg} 
      onEditKeg = {this.handleEditingKegInList} 
      />
      buttonText='Return to Kegs List'
    } else if(this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail 
      keg={this.state.selectedKeg}
      onClickingDecreasePints={this.handleDecreasePints}
      onClickingIncreasePints={this.handleIncreasePints}
      onClickingDelete={this.handleDeletingKeg}
      onClickingEdit={this.handleEditClick} 
      />
      buttonText='Return to Kegs List'
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} 
      />;
      buttonText='Return to Kegs List'
    }else {
      currentlyVisibleState = <KegList 
      kegList={this.state.mainKegList} 
      onKegSelection={this.handleChangingSelectedKeg} 
      />
      buttonText='Add a New Keg';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-dark">{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;