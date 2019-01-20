import React from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import _debounce from 'lodash/debounce';

import Pokedex from '../components/Pokedex';

const POKEDEX_API = 'https://pokeapi.co/api/v2/pokemon';

const cache = setupCache({
    maxAge: 15* 60 * 1000
});


const api = axios.create({
    adpater: cache.adapter
});

class PokedexData extends React.Component {

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

        console.log(data);
    };

    debouncedFetch = _debounce(async () => {
        await this.fetchData(this.state.index);
    }, 200);

    async componentDidMount() {
        await this.fetchData(this.state.index);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.index !== prevState.index) {
            this.debouncedFetch();
        }
    }

    render() {
        return (
            <Pokedex
                index={this.state.index}
                data={this.state.data}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
            />
        )
    }
}

export default PokedexData;
