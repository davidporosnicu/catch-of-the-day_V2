import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    constructor() {
      super();
      this.state = {term: ''}
    }
    componentDidMount() {
      this.setState({term: getFunName()})
    }

      onInputChange = (e) => {
        this.setState({term: e.target.value})
      }

      goToStore = (e) =>{
      e.preventDefault(); 
      const storeId = this.state.term;
      this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
      return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter A Store</h2>
        <input value={this.state.term} onChange={this.onInputChange} ref={(input) => this.input = input} type="text" placeholder="Store name"/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;