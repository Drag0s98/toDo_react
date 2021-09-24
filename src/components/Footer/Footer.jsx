import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'


class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>To-Do list made with React</Col>
            <Col>  </Col>
            <Col>Copyright &copy; 2021 By Drag0s98</Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer;
