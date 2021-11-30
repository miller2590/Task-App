import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Task from "../Task/Task";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.remove = this.remove.bind(this);
  }

  createTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  remove(id) {
      this.setState({
          tasks: this.state.tasks.filter( task => task.id !== id)
      })
  }

  render() {
      const tasks = this.state.tasks.map(task => (
        <Task 
            key={task.id}
            id={task.id}
            taskItem={task.newTask}
            remove={this.remove}
        />
      ))
    return (
      <div>
          {tasks}
        <NewTaskForm createTask={this.createTask} />
      </div>
    );
  }
}

export default TaskList;
