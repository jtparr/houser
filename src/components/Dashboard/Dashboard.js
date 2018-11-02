import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        }
        this.getHouseList = this.getHouseList.bind(this);
    }

    componentDidMount() {
        this.getHouseList()
    }

    getHouseList() {
        let promise = axios.get(`/api/houselist`);
        promise.then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render() {

        return (
            <div>
                Dashboard
            {this.state.houseList.map((val) => {
                    return (
                        <House
                            key={val.id}
                            name={val.name}
                            address={val.address}
                            city={val.city}
                            propertystate={val.state}
                            zipcode={val.zip}

                        />)
                })}
                <button><Link to='/wizard'>Add New Property</Link></button>
            </div>
        )
    }
}

export default Dashboard;