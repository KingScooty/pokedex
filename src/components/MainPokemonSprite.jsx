import React from 'react';

//TODO: import specific styles directly here (and move to CSS modules?)

import PokemonSprite from './PokemonSprite';

const MainPokemonSprite = (props) => (
    <div>
        <PokemonSprite imgSrc={props.imgSrc} />
        <div className="sprite-controls">
            <div className="sprite-control sprite-controls-gender " onClick={props.handleToggleFemale}><i className="fas fa-venus"/></div>
            <div className="sprite-control sprite-controls-shiny " onClick={props.handleToggleShiny}><span>shiny</span></div>
            <div className="sprite-control sprite-controls-rotate " onClick={props.handleToggleBack}><i className="fas fa-undo"/></div>
        </div>
    </div>
)

MainPokemonSprite.defaultProps = {
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};

export default MainPokemonSprite;
