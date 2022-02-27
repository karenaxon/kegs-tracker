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
      dataLoaded: false,
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

    if(this.state.dataLoaded){
      let existingKegs = [{
        name: "Billy's Bubbly",
        description: 'Champagne Everyday for Everyday People. Skip the bottle, Pop a barrel',
        brand: "Champagne Barrels",
        price: 5,
        alcoholContent: '12%',
        currentPints: 64,
        id: '1'
      },
      {
        name: 'Cola Cola Cola',
        brand: "Charlie's Cola Cart ©©©",
        description: "Charlie's namesake Cola Cola Cola. Smooth? Rich? Doesn't Matter, one sip will turn your day around",
        price: 3,
        alcoholContent: '0%',
        currentPints: 1,
        id: '2'
      },
      {
        name: 'Rusty Good Dog',
        description: "Backwoods Moonshine, made with love by Forest Elvis in the deep woods",
        brand: 'Forest Jailbreak',
        price: 4,
        alcoholContent: '40%',
        currentPints: 84,
        id: '3'
      },
      {
        name: "wwwRootBeer",
        brand: "Charlie's Cola Cart ©©©",
        description: "Any soda shoppe worth their suger has a good rootbeer in their main directory",
        price: 3,
        alcoholContent: '0%',
        currentPints: 20,
        id: '4'
      },
      {
        name: "Malty Miss Marple Mix",
        brand: "Forest Jailbreak",
        description: "Malty Miss Marple famous Malt beer. Sweet and Easy to drink",
        price: 3,
        alcoholContent: '2.5%',
        currentPints: 104,
        id: '5'
      },
      {
        name: "Dangerous Beer",
        brand: "ALL GAS FULL OUT",
        description: "nothing like a beer with a dangerous name to compensate for your mediocrity.",
        price: 3,
        alcoholContent: '8%',
        currentPints: 18,
        id: '6'
      }]
    this.setState({
      mainKegList: existingKegs,
      dataLoaded: true
    })
    }
    
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
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;