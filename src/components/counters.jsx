import React, {Component} from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 10},
      {id: 2, value: 20},
      {id: 3, value: 0},
      {id: 4, value: 30}
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({counters});
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm-m-2"
        >
          Reset
        </button>
        {this.state.counters.map(c => (
          <Counter
            key={c.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={c}
          >
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
