import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Horned Beast'} description={'Here are some Horned Beasts'}/>
        <HornedBeast imgUrl={'Horned Beast'} src={'https://cdn.pixabay.com/photo/2013/07/18/15/06/ram-164555_1280.jpg'}/>
      </>
    )
  }
}

export default Main;