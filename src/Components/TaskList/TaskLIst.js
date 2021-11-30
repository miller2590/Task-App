import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Task from "../Task/Task";
import "./TaskList.css";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  createTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, newTask: updatedTask };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }

  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        taskItem={task.newTask}
        remove={this.remove}
        updateTask={this.update}
      />
    ));
    return (
      <div className="TaskList">
        <h1>
          Task List <span>A Simple Way To Organize Tasks</span>
        </h1>
        <ul>{tasks}</ul>
        <NewTaskForm createTask={this.createTask} />
      </div>
    );
  }
}

export default TaskList;
