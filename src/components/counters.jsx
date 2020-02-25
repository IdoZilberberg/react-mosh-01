import React, {Component} from "react";
import Counter from "./counter";
class Counters extends Component {
  componentDidMount() {
    console.log("Counters - mounted");
  }

  render() {
    console.log("Counters - rendered");
    const {counters, onReset, onDelete, onIncrement} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm-m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
