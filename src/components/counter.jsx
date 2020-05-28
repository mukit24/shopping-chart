import React, { Component } from 'react';
class Counter extends Component {
  render() {
    return (
      <div>
        <h4 style={{ display:"inline-block" }}>{this.props.counter.product_name} <span  className={this.changeBadgeColor()}>{this.formatCount()}</span></h4>
        <button  onClick={()=>this.props.clickIncrement(this.props.counter)} className="m-2 btn btn-primary">Increment Quantity</button>
        <button onClick={()=>this.props.clickDelete(this.props.counter.id)} className="m-2 btn btn-danger">Delete</button>
        <hr/>
      </div>
    );
  }

  changeBadgeColor() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}
 
export default Counter;   