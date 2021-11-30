import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Task from '../Task/Task'

class TaskLIst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
  }

  createTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  render() {
    return (
      <div>
        <Task />
        <NewTaskForm 
            createTask={this.createTask}
        />
      </div>
    );
  }
}

export default TaskLIst;
