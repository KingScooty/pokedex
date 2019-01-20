import React from 'react';

//TODO: import specific styles directly here (and move to CSS modules?)

import PokemonSprite from './PokemonSprite';

const MainPokemonSprite = (props) => (
    <div>
        <PokemonSprite id={props.id} />
        <div className="sprite-controls">
            <div className="sprite-control sprite-controls-gender "><i className="fas fa-venus"/></div>
            <div className="sprite-control sprite-controls-shiny "><span>shiny</span></div>
            <div className="sprite-control sprite-controls-rotate "><i className="fas fa-undo"/></div>
        </div>
    </div>
)

MainPokemonSprite.defaultProps = {
    id: 1
};

export default MainPokemonSprite;
