import React from 'react'
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Home from "./pages/Home";
import City from "./pages/City";
import Navbar from './components/Navbar';
import CityList from './components/CityList';

const GlobalStyle = createGlobalStyle`
  #root {
    display: grid;
    grid-template-columns: 0.25fr 0.75fr;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    width: 100vw;
    height: 100vh;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    width: 100vw;
    height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  .weather-div{
    display:grid;
    grid-template-rows: 0.25fr 0.75fr;

  }
`
// state = {
//   cityList: [{
//     name: 'London',
//     lat: 51.5072,
//     lon: 0.1276
//   },
//   {
//     name: 'Paris',
//     lat: 48.85,
//     lon: 2.35
//   }
//   ],
//   isLoading: false,
//   user: false
// }

export default class App extends React.Component {
  state = {
    cityList: [{
      name: 'London',
      lat: 51.5072,
      lon: 0.1276
    },
    {
      name: 'Paris',
      lat: 48.85,
      lon: 2.35
    }
    ],
    isLoading: false,
    user: false
  }

  handleRemove = (city) => {
    // console.log(city)
    const newList = this.state.cityList.filter(item => {
      return item.name != city
    })
    localStorage.setItem('newList', JSON.stringify(newList))

    const newCityList = JSON.parse(localStorage.getItem('newList'))

    this.setState({ cityList: newCityList })

  }

  handleSubmit = async (searchTerm) => {

    this.setState({ isLoading: true })
    try {
      const existingCity = this.state.cityList.find((item) => {
        return searchTerm === item
      })
      if (existingCity) {
        console.log('City already exists')
        return
      }

      this.setState({ isLoading: true });
      const { data } = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=1&appid=1208921767a135089e19b85dcc07c2fc`);
      // add api key to .env file 
      console.log(data)

      const newCityObject = {
        name: data[0].name,
        lat: data[0].lat,
        lon: data[0].lon
      }
      const newList = [...this.state.cityList, newCityObject]

      const newList_serialized = JSON.stringify(newList)

      // may have to add local storage in remove function
      localStorage.setItem('newList', newList_serialized)

      this.setState({ user: true, cityList: newList, isLoading: false })

    } catch (err) {
      console.log(err);
      this.setState({ hasError: true, isLoading: false });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      console.log(this.state)
    }
  }

  componentDidMount() {
    localStorage.clear();
    const newList = [...this.state.cityList]
    const newList_serialized = JSON.stringify(newList)

    // // may have to add local storage in remove function
    localStorage.setItem('newList', newList_serialized)
  }


  render() {
    const cityListProp = JSON.parse(localStorage.getItem('newList'))
    console.log(cityListProp)
    return (
      <>
        <GlobalStyle />
        <Router>
          <div className='nav-div'>
            <Navbar
              cityList={cityListProp}
              handleSubmit={this.handleSubmit}
              handleRemove={this.handleRemove} />
          </div>
          <div className='weather-div'>
              <Switch>
                <Route exact path="/" component={Home} />
                {/* need to pass cityList props into home */}
                <Route
                  exact
                  path="/city/:cityId"
                  component={City }
                />

              </Switch>
          </div>
        </Router>
      </>
    );
  }
}

