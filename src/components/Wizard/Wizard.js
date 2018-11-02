import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor () {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            propertystate: '',
            zipcode: ''
        }
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handlePropertyStateInput = this.handlePropertyStateInput.bind(this);
        this.handleZipcodeInput = this.handleZipcodeInput.bind(this);
    }

    handleNameInput (e) {
        this.setState({
            name: e
        })
    }
    handleAddressInput (e) {
        this.setState({
            address: e
        })
    }
    handleCityInput (e) {
        this.setState({
            city: e
        })
    }
    handlePropertyStateInput (e) {
        this.setState({
            propertystate: e
        })
    }
    handleZipcodeInput (e) {
        this.setState({
            zipcode: e
        })
    }

    clearInputs () {
        this.setState({
            name: '',
            address: '',
            city: '',
            propertystate: '',
            zipcode: ''
        })
    }

    addNewProperty () {
    let promise = axios.post(`/api/property`, {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        propertystate: this.state.propertystate,
        zipcode: this.state.zipcode
    });
    promise.then(() => {
        this.clearInputs()
    })
    }

    render () {
        console.log(this.state)
        return (
            <div>
                Wizard
                <input placeholder='Property Name' onChange={(e) => this.handleNameInput(e.target.value)} value={this.state.name}></input>
                <input placeholder='Address' onChange={(e) => this.handleAddressInput(e.target.value)} value={this.state.address}></input>
                <input placeholder='City' onChange={(e) => this.handleCityInput(e.target.value)} value={this.state.city}></input>
                <input placeholder='State' onChange={(e) => this.handlePropertyStateInput(e.target.value)} value={this.state.propertystate}></input>
                <input placeholder='Zipcode' onChange={(e) => this.handleZipcodeInput(e.target.value)} value={this.state.zipcode}></input>
                <button onClick={() => this.addNewProperty()}><Link to='/'>Add New Property</Link></button>

                
                <button><Link to='/'>Cancel</Link></button>
            </div>
        )
    }
}

export default Wizard;