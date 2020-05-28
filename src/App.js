import React, { Component } from 'react';
// import "./App.css";
import Navbar from "./components/navbar";
import Forms from './components/forms';
import Counters from "./components/counters";
// import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [ ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleSubmit = name => {
    this.setState({counters: [...this.state.counters,name]});
  }

  render(){
    return (
      <div>
        <Navbar totalProduct={this.state.counters.length} />
        <div className="container">
          <h3>Add New Product:</h3>
          <Forms handleSubmit={this.handleSubmit} id_num={this.state.counters.length}/>
          <Counters
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
