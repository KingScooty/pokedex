import React from "react";
import PropTypes from 'prop-types';

import MainPokemonSprite from '../components/MainPokemonSprite';

class MainPokemonSpriteContainer extends React.Component {
    render() {
        return <MainPokemonSprite id={this.props.id} />
    }
}

MainPokemonSpriteContainer.defaultProps = {
    id: 1
};

MainPokemonSpriteContainer.propTypes = {};

export default MainPokemonSpriteContainer;
