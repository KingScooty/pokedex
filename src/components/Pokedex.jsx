import React from 'react';

import './pokedex.css';

import ElementTypes from '../containers/ElementTypes';
import MainPokemonSpriteContainer from '../containers/MainPokemonSpriteContainer';

export default (props) => {
    return (
    <div className="pokedex">
        <div className="panel left-panel">
            <div className="pokemon-name screen">{props.data.name}<span className="name-no">no. {props.data.id}</span></div>
            <MainPokemonSpriteContainer data={props.data.sprites} />
            <div className="pokemon-description screen">A strange seed was
                planted on its
                back at birth. The plant sprouts
                and grows with
                this POKéMON.
            </div>
        </div>
        <div className="divider">
            <div className="gap"></div>
            <div className="hinge"></div>
            <div className="gap"></div>
            <div className="hinge"></div>
            <div className="gap"></div>
            <div className="hinge"></div>
            <div className="gap"></div>
        </div>
        <div className="panel right-panel">
            <div className="panel-row">
                <div className="screen stats">
                    <div className="stat-line">
                        speed.............45
                    </div>
                    <div className="stat-line">
                        special-defense...65
                    </div>
                    <div className="stat-line">
                        special-attack....65
                    </div>
                    <div className="stat-line">
                        defense...........49
                    </div>
                    <div className="stat-line">
                        attack............49
                    </div>
                    <div className="stat-line">
                        hp................45
                    </div>
                </div>
                <div className="type-list">
                    <div className="panel-header">Types</div>
                    <div className="type-box">
                        <ElementTypes types={props.data.types} />
                    </div>
                </div>
            </div>
            <div className="panel-row panel-evo">
                <div>
                    <div className="flex-center">
                        <div className="evo-num">I</div>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                         alt="pokemon"
                         className="pokemon-sprite pokemon-sprite-small"/>
                    <div className="screen evo-name">bulbasaur</div>
                </div>
                <div>
                    <div className="flex-center">
                        <div className="evo-num">II</div>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                         alt="pokemon"
                         className="pokemon-sprite pokemon-sprite-small"/>
                    <div className="screen evo-name">ivysaur</div>
                </div>
                <div>
                    <div className="flex-center">
                        <div className="evo-num">III</div>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                         alt="pokemon"
                         className="pokemon-sprite pokemon-sprite-small"/>
                    <div className="screen evo-name">venusaur</div>
                </div>
            </div>
            <div className="panel-row blue-buttons">
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
            </div>
            <div className="move-list">
                <div className="move-body move-screen screen">
                    <div className="move-left">
                        <div className="move-name">razor-wind</div>
                        <div className="move-stat">
                            Accuracy.....100
                        </div>
                        <div className="move-stat">
                            Power.........80
                        </div>
                        <div className="move-stat">
                            PP............10
                        </div>
                    </div>
                    <div className="move-right">
                        <div className="move-type">Type: normal</div>
                        <div className="move-learn">Learn: Lvl 0</div>
                    </div>
                </div>
                <div className="move-controls">
                    <div className="move-arrow"><i className="fas fa-caret-up"/></div>
                    <div className="move-arrow"><i className="fas fa-caret-down"/></div>
                </div>
            </div>
            <div className="panel-row controls">
                <div className="button" onClick={props.handleDecrement}/>
                <div><input type="number" className="screen num-input" placeholder={props.index}/>
                    <div className="submit"/>
                </div>
                <div className="button" onClick={props.handleIncrement}/>
            </div>
        </div>
    </div>
)
};
