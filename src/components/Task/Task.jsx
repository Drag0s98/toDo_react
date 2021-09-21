import React, { Component } from "react";


class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hola: this.props.info.tasks
    }
  }


  render() {
    const { tarea } = this.props.info
    return (
      <>
        <p>{this.state.hola}</p>
        <p> {tarea} </p>
      </>
    )
  }
}

export default Task;
