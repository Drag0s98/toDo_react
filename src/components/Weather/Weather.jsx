import React, { Component } from "react";
import axios from 'axios'
import { InputGroup, FormControl } from "react-bootstrap";

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weatherMain: [],
      temp: [],
      hour: [],
      city: {}
    }
  }

  async componentDidMount() {
    if (JSON.stringify(this.state.city) === '{}') {
      const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=praga&units=imperial&appid=a69cbc1aabd9c49868b9e1f91c10695a`)
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
      let city = this.state.city
      const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a69cbc1aabd9c49868b9e1f91c10695a`)
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
  search = async (event) => {
    event.preventDefault();
    const city = await event.target.elements.city.value
    this.setState({ city: city })

    await this.handlerLoadWeather()

  }


  render() {
    return (
      <section>
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
          <input type="submit" value="Search" />
        </form>
        
        <p>
          {this.state.weatherMain}
        </p>
        <p>
          {this.state.temp}
        </p>
        <p>
          {this.state.hour}
        </p>
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