import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <section>
        <Card>
          <Card.Header> To-Do App </Card.Header>
          <Card.Body>
            To-Do es una pequeña aplicación creada como práctica para mejorar mi nivel de habilidad con React. <br /><br />
            La aplicación está basa en una página en la cual vamos a encontrar una serie de tareas por defecto, las cuales <br />
            podemos borrar o agregar más utilizando el pequeño formulario de la parte de arriba. Además, tiene una pequeña validacion <br />
            y ciertos mensajes que aparecen cuando agregas una. <br />
            Seguido podemos encontrar otra página donde tendremos una pequeña caja donde podemos introducir el nombre  <br />
            de cualquier ciudad del mundo, con ello obtendremos la hora y el tiempo de ese lugar específico. <br /><br />
            Esta aplicación esta en constate cambió y mejora, puede revisar el repositorio de GitHub para ver las actualizaciones. <br />
          </Card.Body>
          <Card.Footer>Hecho con dedicación y esfuerzo por @Drag0s98.</Card.Footer>
        </Card>
      </section>
    );
  }
}

export default Home;
