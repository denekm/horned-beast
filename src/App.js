import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import allBeasts from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    allBeasts: allBeasts,
    show: false
  }
}
handlesClose =() => {
  this.setState({show: false});
}

handlesShow = () =>{
  this.setState({show: true});
}
  render() {
    return (
      <div className="App">
        <Header />
       <Main allBeasts ={this.state.allbeasts}/>
        <SelectedBeast show= {this.state.show} handesClose={this.handlesClose}/>
        <Footer />
      </div>
    );
  }
}

export default App;
