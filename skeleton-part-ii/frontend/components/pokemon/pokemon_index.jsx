import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route} from 'react-router-dom';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <li className="pokemon-index-item" key={poke.id}>
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))}
      </ul>
      {/* <ul>
        {
          this.props.pokemon.map((poke) => (
            <PokemonIndexItem key={poke.id} pokemon={poke}/>
          ))
        }


      </ul> */}
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;