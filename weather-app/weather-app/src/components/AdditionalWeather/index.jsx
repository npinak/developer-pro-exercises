import React from "react";
import styled from 'styled-components'
import rainy from '../../assets/rainy.png'
import cloudy from '../../assets/cloudy.png'
import windy from '../../assets/windy.png'
import humidity from '../../assets/humidity.png'


const GridRowDiv = styled.div`
  display: grid;
  grid-template-rows: 4fr 3fr 3fr;
  height:100%;
  place-items: center;
  background-color: white;
  margin-left: 30px;
  border: 1px solid #e8e8e8;
`
const Icon = styled.img`
    height: 30px;
    width: 30px;
    padding-top: 2px;
`

const IconDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width:80%;

`

const ConditionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width:80%;
  color: black;
  justify-content: space-between;
`
const DescriptionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width:80%;
  color: black;
  p {
    margin-top:3px;
  }
  /* justify-content: space-between; */
`

//for navbar
export default class AdditionalWeather extends React.Component {

    state = {
        rainy: '../../assets/rainy.png'
    }

    render() {

        let icon
        let condition
        let description
        switch (this.props.parameter) {
            case 'Rain':
                icon = rainy
                condition = `${this.props.weather[0].rain} mm`
                description = `The air quality is generally acceptable for most individuals. 
                `
                break
            case 'Wind':
                icon = windy
                condition = `${this.props.weather[0].wind.speed} km/h`
                description = `The air quality is generally acceptable for most individuals. 
                `
                break
            case 'Cloud':
                icon = cloudy
                condition = `${this.props.weather[0].clouds.all}%`
                description = `The air quality is generally acceptable for most individuals.
                `
                break
            case 'Humidity':
                icon = humidity
                condition = `${this.props.weather[0].main.humidity}%`
                description = `The air quality is generally acceptable for most individuals.`
                break
        }

   
        return (
            <GridRowDiv>
                <IconDiv>
                    <Icon src={icon} alt="" ></Icon>
                </IconDiv>
                <ConditionDiv>
                    <h4>{this.props.parameter}</h4>
                    <p>{condition}</p>
                </ConditionDiv>
                <DescriptionDiv>
                    <p>{description}</p>
                </DescriptionDiv>
            </GridRowDiv>
        );
    }
}