import React, { Component } from "react";
import Task from '../Task'
import './Main.css'
import tasks from '../../data.js'

class Main extends Component {
  constructor(props) {
    super(props)

    this.task = React.createRef();
    this.state = {
      data: {},
      'task': tasks
    }
  }
  addTask = (event) => {
    const tarea = this.task.current.value
    this.task.current.value = ''
    event.preventDefault();
    const tasks = { tarea }
    this.setState({ data: tasks })
    const newTask = tasks
    this.setState({ task: [...this.state.task, newTask] })
  }

  paintTasks = () => {
    return this.state.task.map((param, i) =>  <Task info={param} key={i} />)
  }

  render() {
    return (
      <main>
        <h5>Esto es el Main</h5>
        <section>
          <>
            <h4>Anade una tarea</h4>
            <form onSubmit={this.addTask} >
              <label>Introduce tu proxima tarea</label>
              <input type="text" name='add' ref={this.task} />
            </form>
          </>
        </section>
        <section>
          <h3>Aqui van a ir la lista de tareas</h3>
          {this.paintTasks()}
        </section>
      </main >
    )
  }
}

export default Main;
