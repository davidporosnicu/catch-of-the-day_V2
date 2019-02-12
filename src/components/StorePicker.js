import React from 'react';

class StorePicker extends React.Component{
    constructor() {
      super();
      this.state = {term: ''}
    }
      onInputChange = (e) => {
        this.setState({term: e.target.value})
      }

      goToStore = (e) =>{
      e.preventDefault(); 
      const storeId = this.state.term;
      console.log(storeId)
      console.log(this)
      this.context.router.transitionTo(`/store/${storeId}`)
    }

    render(){
      return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter A Store</h2>
        <input value={this.state.input} onChange={this.onInputChange} ref={(input) => this.input = input} type="text" placeholder="Store name"/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;