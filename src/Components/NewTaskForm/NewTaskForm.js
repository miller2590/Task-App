import React, { Component } from "react";
import { v4 } from "uuid";
import "./NewTaskForm.css"

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = { ...this.state, id: v4(), completed: false };
    this.props.createTask(newTask);
    this.setState({
      newTask: "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form className="newTaskForm" onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label htmlFor="newTask">New Task</label>
          </div>
          <input
            type="text"
            id="newTask"
            name="newTask"
            value={this.state.newTask}
            onChange={this.handleChange}
          ></input>
          <button>ADD TASK</button>
        </div>
      </form>
    );
  }
}

export default NewTaskForm;
