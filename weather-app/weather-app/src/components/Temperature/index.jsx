import React from "react";
import styled from 'styled-components'

const GridRowDiv = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.3fr 0.3fr;
  height:100%;
  place-items: center;
  background: url(${props => props.image});
  background-repeat: no-repeat ;
  background-size: cover;
  /* margin-bottom: ${props => props.padding === 'temp' ? '-100px' : '0px'}; */
  
`

const WeatherDiv = styled.div`
    color: white;
    height:100%;
    /* font-size: 18px; */
    /* height: 10px; */
`

const TemperatureDiv = styled.div`
    color: white;
    height:100%;
    /* font-size: 30px; */
    /* height: 50px; */
`

const LocationDiv = styled.div`
    color: white;
    height:100%;
    /* font-size: 25px; */
    
`
export default class Temperature extends React.Component {

    render() {

        let condition
        let temp
        switch (this.props.parameter) {
            case 'temp':
                condition = this.props.weather[0].weather[0].main
                temp = this.props.weather[0].main.temp
                break
            case 'feelsLike':
                condition = 'Feels Like'
                temp = this.props.weather[0].main.feels_like
                break
            case 'maxTemp':
                condition = 'Max Temp'
                temp = this.props.weather[0].main.temp_max
                break
            case 'minTemp':
                condition = 'Min Temp'
                temp = this.props.weather[0].main.temp_min
                break
            case 'country':
                condition = 'Country'
                temp = this.props.weather[0].country
                break
        }

        let location
        switch (this.props.parameter) {
            case 'temp':
                location = this.props.weather[0].city
                break
            default:
                location = this.props.weather[0].weather[0].description
        }


        return (
            <GridRowDiv image={this.props.image} padding={this.props.parameter}>
                <WeatherDiv>
                    <p>{condition}</p>
                </WeatherDiv>
                <TemperatureDiv>
                    <p>{this.props.parameter === 'country' ? temp : `${temp}°C`}</p>
                </ TemperatureDiv>
                <LocationDiv>
                    <p>{location}</p>
                </ LocationDiv>
            </GridRowDiv>
        );
    }
}