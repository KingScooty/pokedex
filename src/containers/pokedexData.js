import React from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import Pokedex from '../components/pokedex';

const POKEDEX_API = 'https://pokeapi.co/api/v2/pokemon';

const cache = setupCache({
    maxAge: 15* 60 * 1000
});


const api = axios.create({
    adpater: cache.adapter
});

export default class PokedexData extends React.Component {

    state = {
        index: 1,
        data: {}
    };

    // Need a test
    handleIncrement = () => {
        console.log('INCREMENT');
        this.setState((prevState) =>{
            return { index: prevState.index < 151 ? prevState.index + 1 : prevState.index}
        });
    };

    // Need a test
    handleDecrement = () => {
        console.log('DECREMENT');
        this.setState((prevState) =>{
            return { index: prevState.index > 1 ? prevState.index - 1 : prevState.index}
        });
    };

    async fetchData(index) {
        console.log('FETCHING DATA', index);

        const response = await api({
            url: `${POKEDEX_API}/${index}`,
            method: 'get'
        });

        const data = response.data;

        this.setState({
            data: data
        });
    };

    async componentDidMount() {
        await this.fetchData(this.state.index);
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.index !== prevState.index) {
            await this.fetchData(this.state.index);
        }
    }

    render() {
        return (
            <Pokedex
                data={this.state.data}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
            />
        )
    }
}
