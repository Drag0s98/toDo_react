import React, { Component } from "react";
import Task from '../Task'
import tasks from '../../data.js'
import './Tasks.css'
import { InputGroup, FormControl, Alert } from "react-bootstrap/";
import Button from "react-bootstrap/Button";

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.task = React.createRef();
    this.card = React.createRef();
    this.alert = React.createRef();
    this.alert2 = React.createRef();

    this.state = {
      data: {},
      'task': tasks
    }
  }
  async componentDidMount() {
    this.setState({ data: this.state.task }) //Esto es una precarga de datos 
    await new Promise(resolve => setTimeout(resolve, 20000)) //Añadimos un timer de 20 segundos
    if (this.task.current.value !== null) {
      this.task.current.value = '' //Posteriormente se borra
    }
  }
  addTask = async (event) => {
    //Cogemos los valores y los reseteamos
    const tarea = this.task.current.value
    const date = event.target.elements.date.value
    const desc = event.target.elements.desc.value
    const done = false;
    if (this.task.current.value !== null) {
      this.task.current.value = ''
      event.target.elements.date.value = ''
      event.target.elements.desc.value = ''
    }
    event.preventDefault();
    if (tarea.length >= 6) {
      this.alert2.current.className = 'oculto'
      //Paramos el formulario
      //Metemos las tareas en un objeto y las unimos en un array
      const tasks = { tarea, date, desc, done }
      this.setState({ data: tasks })
      const newTask = tasks
      this.setState({ task: [...this.state.task, newTask] })
      // this.ejecutaAlerta()
      this.alert.current.className = 'mostrar'
      setTimeout(() => {
        this.alert.current.className = 'oculto'
      }, 5000)
    } else {
      this.alert2.current.className = 'mostrar'
    }
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
    return this.state.task.map((param, i) => <Task info={param} key={i} remove={() => this.removeOne(i)} tachar={() => this.tacharOne(i)} />)
  }
  removeAll = () => {
    this.setState({ task: [] })
    alert('Has borrado los productos')
  }
  //Renderizamos la vista main
  render() {
    return (
      <section>
        <article className='form'>
          <>
            <h2>Añade una tarea</h2>
            <form onSubmit={this.addTask} >
              <div className='oculto' ref={this.alert2}>
                <Alert variant="danger">
                  <Alert.Heading>Debes introducir una tarea mas larga!</Alert.Heading>
                </Alert>
              </div>
              <label>Introduce tu proxima tarea</label>
              <InputGroup className="mb-3">
                <InputGroup.Text>Task and Description</InputGroup.Text>
                <FormControl aria-label="First name" ref={this.task} name='add' />
                <FormControl aria-label="Last name" name='desc' />
              </InputGroup>
              <label>Introduce la fecha</label>
              <input type="date" name='date' />
             <Button type='submit' variant="primary" size="lg" active>
                ADD
              </Button> 
            </form>
          </>
        </article>
        <article className='mid'>
          <div className='oculto' ref={this.alert}>
            <Alert variant="success">
              <Alert.Heading>Se ha añadido la tarea!</Alert.Heading>
            </Alert>
          </div>
          <h3>Aqui van a ir la lista de tareas</h3>
        </article>
        <article className='cards'>
          {this.paintTasks()}
        </article>
        <br />
        <Button variant="danger" onClick={this.removeAll}>Clear</Button>
      </section >
    )
  }
}

export default Tasks;
