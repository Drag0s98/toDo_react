import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  CompleteStyle = () => {
    console.log(this.props.info.done);
    return {
      color: this.props.info.done === true ? 'red': 'blue'
    }
  }
  //Añadimos las targetas a main
  render() {
    const { tarea, date } = this.props.info
    return (
      <>
        <article style={this.CompleteStyle()}>
          <h5>Tarea para el: {date}</h5>
          <p> {tarea} </p>
          <button onClick={this.props.remove}>Borrar</button>
          <button onClick={this.props.tachar}>Tachar</button>
        </article>
      </>
    )
  }
}
export default Task;
