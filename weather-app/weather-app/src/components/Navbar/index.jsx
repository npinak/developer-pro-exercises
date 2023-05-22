import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components'
import Form from '../Form';
import CityList from '../CityList'
import City from '../../pages/City';

// need to style the navbar
// make this into its own page 

const NavbarUl = styled.ul`
  list-style-type: none;
`;

export default class Navbar extends React.Component {
    
    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit = (searchTerm) => {
        this.props.handleSubmit(searchTerm);
    }


    render() {
        return (
            <nav>
                <NavbarUl>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Form handleSubmit={this.handleSubmit}/>
                    </li>
                    <CityList 
                    cityList={this.props.cityList}
                    handleRemove={this.props.handleRemove}
                    />
                </NavbarUl>
            </nav>   
        );
    }
}

