import React from "react";

//TODO: import specific styles directly here (and move to CSS modules?)

const PokemonSprite = (props) => {
    return <img
        src={props.imgSrc}
        alt="pokemon"
        className={`pokemon-sprite ${props.size}`}
    />
};

PokemonSprite.defaultProps = {
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};

export default PokemonSprite;

