import React, { Component } from "react";
import axios from 'axios'
import { InputGroup, FormControl, Button, Card } from "react-bootstrap";
import './Weather.css'

class Weather extends Component {

  constructor(props) {
    super(props)
    this.card = React.createRef();

    this.state = {
      weatherMain: [],
      temp: [],
      hour: [],
      city: [],
      img: []
    }
  }

  async componentDidMount() {
    if (JSON.stringify(this.state.city) === '{}') {
      const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=praga&units=imperial&appid=${process.env.REACT_APP_API_WEATHER}`)
      const data = await resp.data
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let completeHour = hour + ':' + minutes;
      let weatherCity = data.weather[0].main
      let fahrenheit = data.main.temp
      let temp = ((fahrenheit - 32) / 1.8).toFixed(0) + 'ºC'
      this.setState({
        weatherMain: weatherCity,
        temp: temp,
        hour: completeHour
      })
    }
  }
  handlerLoadWeather = async () => {
    if (JSON.stringify(this.state.city) !== '{}') {
      this.card.current.className = 'mostrar'
      let city = this.state.city
      let randomNum = Math.floor(Math.random() * (5 - 0)) + 0;
      const resp2 = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${process.env.REACT_APP_API_IMG}`)
      const img = await resp2.data.results[randomNum].urls.full
      const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_WEATHER}`)
      const data = await resp.data
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let completeHour = hour + ':' + minutes;
      let weatherCity = data.weather[0].main
      let fahrenheit = data.main.temp
      let temp = ((fahrenheit - 32) / 1.8).toFixed(0) + 'ºC'
      this.setState({
        weatherMain: weatherCity,
        temp: temp,
        hour: completeHour,
        img: img
      })

    }
  }
  search = async (event) => {
    event.preventDefault();
    const city = await event.target.elements.city.value
    this.setState({ city: city })
    await this.handlerLoadWeather()
  }
  gracias = async ( ) => {
    alert('Gracias por la visita')
  }

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.search}>
            <label>Introduce una ciudad</label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">City</InputGroup.Text>
              <FormControl
                name="city"
                placeholder='Madrid'
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <Button type='submit' variant="primary" size="lg" active>
              Search
            </Button>
          </form>
        </article>
        <article className='bodyCard'>
          <Card  className='oculto' ref={this.card}>
            <Card.Img variant="top" src={this.state.img} />
            <Card.Body>
              <Card.Title>{this.state.city}</Card.Title>
              <Card.Text>
                The themperature in {this.state.city} its {this.state.temp} <br />
                and the weather is {this.state.weatherMain}. <br />
                The local hour is {this.state.hour}
              </Card.Text>
              <Button variant="primary" onClick={this.gracias}>❤</Button>
            </Card.Body>
          </Card>
        </article>
      </section>
    )
  }
}

export default Weather;


/* async componentDidUpdate(prevProps, prevState) {

  if (JSON.stringify(this.state.city) !== '{}') {
    console.log(prevState.city);
    let city = prevState.city
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a69cbc1aabd9c49868b9e1f91c10695a`)
    const data = await resp.data
    let weatherCity = data.weather[0].main
    this.setState({ weatherMain: weatherCity })
  }
}
 */

// https://api.unsplash.com/photos/?client_id=mM4Ee8aPNxPaRoav5j3jQkPwziksRyJSCnlbOTkcHSA

// https://api.unsplash.com/search/photos?query=barcelona&client_id=mM4Ee8aPNxPaRoav5j3jQkPwziksRyJSCnlbOTkcHSA