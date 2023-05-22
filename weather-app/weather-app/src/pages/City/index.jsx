import React from "react";
import axios from "axios";
import styled from 'styled-components'
import Header from "../../components/Header/index.jsx"
import Temperature from "../../components/Temperature/index.jsx"
import AdditionalWeather from "../../components/AdditionalWeather/index.jsx"
// need to display weather data in this file

const GridColumnDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height:100%;
`;

const TemperatureDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height:100%;
`

const LowerTemperatureDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    padding-top: 5px;
    height:100%;
`

const UpperTemperatureDiv = styled.div`
    display: grid;
    grid-gap: 5px;
    margin-bottom: 10px;
    height:100%;
    box-sizing: border-box;
`

const AdditionalWeatherDiv = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`


export default class City extends React.Component {

    state = {
        weatherList: null,
        cityName: this.props.match.params.cityId

    }

    getWeather = async () => {
        // try {

        //     const city = this.props.cityList.filter((city) => {
        //         return city.name === this.props.match.params.cityId
        //     })

        //     const lat = city[0].lat;
        //     const lon = city[0].lon;

        //     const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1208921767a135089e19b85dcc07c2fc`);
        //     // // add api key to .env file

        //     const newWeatherObject = {
        //         weather: data.weather,
        //         main: data.main,
        //         country: data.sys.country,
        //         city: this.props.match.params.cityId,
        //         wind: data.wind || 0,
        //         rain: data.rain || 0,
        //         clouds: data.clouds || 0,
        //     }

        //     const newList = [newWeatherObject]

        //     // image data from unsplash

        //     const weather = data.weather[0].main

        //     const imgData = await axios(`https://api.unsplash.com/photos/random?query=${weather}&orientation=landscape&count=1&client_id=uswtDmOZbUG1ehAFw0m_mtICmL78zi4vnKW8zE-CoBc`);
        //     // change api to .env 

        //     this.setState({ user: true, weatherList: newList, isLoading: false, hasError: false, image: imgData.data[0].urls.small })


        // } catch (err) {
        //     console.log(err);
        //     this.setState({ hasError: true, isLoading: false, user: false });
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.cityId !== prevProps.match.params.cityId) {
            // this.getWeather()
            console.log('hey, this changed')
        }
        
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getWeather()
    }

    render() {
        console.log(` Hey this changed ${this.props.match.params.cityId}`)
        return (
            <>
                <div className='header'>
                    <Header />
                </div>
                <GridColumnDiv>
                    <TemperatureDiv>
                        <UpperTemperatureDiv>
                            {this.state.isLoading === false ? <Temperature weather={this.state.weatherList} image={this.state.image} parameter={'temp'} /> : null}
                            {/* parameters can be temp, feelsLike, maxTemp, minTemp, country  */}
                        </UpperTemperatureDiv>
                        <LowerTemperatureDiv>
                            {this.state.isLoading === false ? <Temperature weather={this.state.weatherList} image={this.state.image} parameter={'feelsLike'} /> : null}
                            {this.state.isLoading === false ? <Temperature weather={this.state.weatherList} image={this.state.image} parameter={'maxTemp'} /> : null}
                            {this.state.isLoading === false ? <Temperature weather={this.state.weatherList} image={this.state.image} parameter={'minTemp'} /> : null}
                            {this.state.isLoading === false ? <Temperature weather={this.state.weatherList} image={this.state.image} parameter={'country'} /> : null}
                        </LowerTemperatureDiv>
                    </TemperatureDiv>
                    <AdditionalWeatherDiv>
                        {this.state.isLoading === false ? <AdditionalWeather weather={this.state.weatherList} parameter={'Rain'} /> : null}
                        {this.state.isLoading === false ? <AdditionalWeather weather={this.state.weatherList} parameter={'Wind'} /> : null}
                        {this.state.isLoading === false ? <AdditionalWeather weather={this.state.weatherList} parameter={'Cloud'} /> : null}
                        {this.state.isLoading === false ? <AdditionalWeather weather={this.state.weatherList} parameter={'Humidity'} /> : null}
                        {/* parameters can be rainy, windy, cloudy, or humidity */}
                    </AdditionalWeatherDiv>
                </GridColumnDiv>
            </>
        )
    }
}
