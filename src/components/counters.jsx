import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() {
      const {onDelete,onIncrement,onReset,counters}=this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary m-2">
          Reset Quantity To Zero
        </button>
        <h3>Product List</h3>
        <hr/>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            clickDelete={onDelete}
            clickIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;