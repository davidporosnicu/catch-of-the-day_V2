import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
  constructor() {
    super();
    this.state = { fishes: {}, order: {} }
  }

  loadSamples = () => {
    this.setState({fishes: sampleFishes})
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes: fishes });
  }

  updateFish = (key, updatedProperty) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedProperty;
    this.setState({fishes: fishes});

  }

  addToOrder = (index) => {
    const order = {...this.state.order}
    order[index] =  order[index] +1 || 1;
    this.setState({order: order});
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
            <ul className="list-of-fishes">
              {
                Object
                  .keys(this.state.fishes)
                  .map(el => <Fish key={el} index={el} details={this.state.fishes[el]} addToOrder={this.addToOrder} />)
              } 
            </ul>
        </div>        
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} updateFish={this.updateFish}/>
        </div>
    );
  };
}

export default App;