import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.newTask,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleToggle(e) {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form className="Task-form-edit" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Task">
          <li
            className={
              this.props.completed ? "Task-item completed" : "Task-item"
            }
            onClick={this.handleToggle}
          >
            {this.props.taskItem}
          </li>
          <div className="Task-btns">
            <button onClick={this.toggleForm}>
            <i class="fas fa-pen"></i>
            </button>
            <button onClick={this.handleClick}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Task;
