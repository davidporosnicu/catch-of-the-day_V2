import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{formatPrice(count*fish.price)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((toAdd, el) => {
      const value = this.props.fishes[el].price;
      const count = this.props.order[el];
      

      return toAdd + (count * value);
    }, 0);

    return(
      <div className="order-wrap">
          <h2>Your Order</h2>
          <ul className="order">
            {orderIds.map(this.renderOrder)}
            <li className="total">
              <strong>Total:</strong>
              {formatPrice(total)}
            </li>
          </ul>
          
      </div>
    );
  };
}

export default Order;