import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  CompleteStyle = () => {
    return {
      textDecoration: this.props.info.done === true ? 'line-through' : 'none'
    }
  }
  //Añadimos las targetas a main
  render() {
    const { tarea, date, desc } = this.props.info
    return (
      <>
        <article style={this.CompleteStyle()}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{tarea}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
              <Card.Text>
                {desc}
              </Card.Text>
              <Button variant="warning"  onClick={this.props.remove}>Delete</Button>
              <Button variant="success" onClick={this.props.tachar}>Cross out</Button>
            </Card.Body>
          </Card>
        </article>
      </>
    )
  }
}
export default Task;