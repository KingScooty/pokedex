import React from "react";
import PropTypes from 'prop-types';

import MainPokemonSprite from '../components/MainPokemonSprite';

class MainPokemonSpriteContainer extends React.Component {
    state = {
        shiny: false,
        back: false,
        female: false,
    };

    //TODO: Definitely going to need a test for this.
    //Stupid API does not follow same convention for default rarity + female gender.
    buildSpriteKey = () => {
        const direction = this.state.back === true ? 'back' : 'front';
        const rarity = this.state.shiny === true ? 'shiny' : 'default';
        const gender = this.state.gender === true ? 'female' : '';

        if (rarity === 'default' && gender === 'female') {
            return `${direction}_${gender}`;
        }

        if (rarity === 'shiny' && gender === 'female') {
            return `${direction}_${rarity}_${gender}`;
        }

        return `${direction }_${rarity}`;
    };

    handleToggleFemale = () => {
        this.setState((prevState) =>{
            return { female: !prevState.female }
        });
    };

    handleToggleBack = () => {
        this.setState((prevState) =>{
            return { back: !prevState.back }
        });
    };

    handleToggleShiny = () => {
        this.setState((prevState) =>{
            return { shiny: !prevState.shiny }
        });
    };

    render() {
        const imgSrc = this.props.data[this.buildSpriteKey()];
        return <MainPokemonSprite imgSrc={imgSrc} />
    }
}

MainPokemonSpriteContainer.defaultProps = {
    data: {}
};

MainPokemonSpriteContainer.propTypes = {};

export default MainPokemonSpriteContainer;
