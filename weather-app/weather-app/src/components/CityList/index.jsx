import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components'
import City from '../../pages/City'

const ListDiv = styled.div`
    display:flex;
    color: white;
    align-items: center;
    padding-top: 10px;
    /* font-size: 18px; */
    /* height: 10px; */
`
const RemoveButton = styled.button`
    display:flex;
    color: white;
    align-items: center;
    justify-content: center;
    /* font-size: 18px; */
    height: 20px;
    width: 80px;
    font-size: 10px;
    margin-left: 10px;
`

//for navbar //

// const Item = styled.li`
//   color: cadetblue;
// `;  https://medium.com/rd-shipit/advanced-ways-to-write-styled-components-97ce210404e3

export default class CityList extends React.Component {

    handleRemove = (e) => {
        this.props.handleRemove(e.target.id)
    }

    render() {
        return (
            this.props.cityList.map((city) => (
                <ListDiv key={city.name}>
                    <li key={city.name}>
                        <Link key={city.name} to={`/city/${city.name}`}>{city.name}</Link>
                    </li>
                    <RemoveButton id={city.name} onClick={this.handleRemove}>
                        Remove
                    </RemoveButton>
                </ListDiv>
            )))
        ;
    }
}
