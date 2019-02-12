import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component{
  constructor() {
    super();
    this.state = { fishes: {} }
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes: fishes });
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul>
            {
              Object
                .keys(this.state.fishes)
                .map(el => <Fish key={el} details={this.state.fishes[el]}/>)
            } 
          </ul>
        </div>        
          <Order />
          <Inventory addFish={this.addFish}/>
        </div>
    );
  };
}

export default App;