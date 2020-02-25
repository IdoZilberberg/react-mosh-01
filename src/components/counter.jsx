import React, {Component} from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div className={this.getBadgeClasses()}>{this.formatCount()}</div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
