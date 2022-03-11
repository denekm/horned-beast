import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import allBeasts from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: allBeasts,
      show: false,
      selectedBeast: {}
    }
  }
  handlesClose = () => {
    this.setState({show: false});
  }

  handlesShow = (beastName) => {
    const selectedBeast = allBeasts.find(beast => beast.title === beastName);
    this.setState({show:true, selectedBeast: selectedBeast});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main allBeasts={this.state.allBeasts} handlesShow={this.handlesShow} />
        <SelectedBeast show={this.state.show} handlesClose={this.handlesClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>
    );
  }
}

export default App;
