import React, { Component } from "react";
import Task from '../Task'
import './Main.css'
import tasks from '../../data.js'

class Main extends Component {
  constructor(props) {
    super(props)
    this.task = React.createRef();
    this.card = React.createRef();

    this.state = {
      'task': tasks
    }
  }
  addTask = (event) => {
    //Cogemos los valores y los reseteamos
    const tarea = this.task.current.value
    const date = event.target.elements.date.value
    const done = false;
    this.task.current.value = ''
    event.target.elements.date.value = ''
    //Paramos el formulario
    event.preventDefault();
    //Metemos las tareas en un objeto y las unimos en un array
    const tasks = { tarea, date, done }
    this.setState({ data: tasks })
    const newTask = tasks
    this.setState({ task: [...this.state.task, newTask] })
  }
  removeOne = (key) => {
    const line = this.state.task.filter((current, i) => i !== key)
    this.setState({ task: line })

  }
  tacharOne = (key) => {
    const filtrar = this.state.task.filter((current, i) => i === key)
    filtrar[0].done === false ? filtrar[0].done = true : filtrar[0].done = false;
    this.setState(filtrar)
  }
  paintTasks = () => {
    console.log(this.state);
    return this.state.task.map((param, i) => <Task info={param} key={i} remove={() => this.removeOne(i)} tachar={() => this.tacharOne(i)} />)
  }
  removeAll = () => {
    this.setState({ data: {} })
    // this.setState({ task: {} })
    alert('Has borrado los productos')
  }
  //Renderizamos la vista main
  render() {
    return (
      <main>
        <h5>Esto es el Main</h5>
        <section>
          <>
            <h2>Anade una tarea</h2>
            <form onSubmit={this.addTask} >
              <label>Introduce tu proxima tarea</label>
              <input type="text" name='add' ref={this.task} />
              <label>Introduce la fecha</label>
              <input type="date" name='date' />
              <input type="submit" value="ADD" />
            </form>
          </>
        </section>
        <section>
          <h3>Aqui van a ir la lista de tareas</h3>
          {this.paintTasks()}
          <br />
          <button onClick={this.removeAll}>Clear</button>
        </section>
      </main >
    )
  }
}

export default Main;
