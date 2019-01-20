import React from "react";

//TODO: import specific styles directly here (and move to CSS modules?)

const PokemonSprite = (props) => {

    /**
     * direction (front/back)/colour (default/shiny)/gender (default/female)
     *
     * id.png
     * back/id.png
     * shiny/id.png
     * back/shiny/id.png
     * back/shiny/female/id.png
     *
     * female/id.png
     */

    //TODO: image url builder probably necessary

    return <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt="pokemon"
        className={`pokemon-sprite ${props.size}`}
    />
};

PokemonSprite.defaultProps = {
    id: 1
};

export default PokemonSprite;

