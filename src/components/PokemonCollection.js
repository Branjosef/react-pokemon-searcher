import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokeCards = () => {

    if (this.props.pokes.find(poke => poke.name === this.props.query)) {
      let poke = this.props.pokes.find (poke => poke.name === this.props.query)
      return (
        <PokemonCard 
        id={poke.id}
        name={poke.name}
        hp={poke.hp}
        front={poke.sprites.front}
        back={poke.sprites.back}
      />
      )
    } else {
      return this.props.pokes.map(poke => 
        <PokemonCard 
          id={poke.id}
          name={poke.name}
          hp={poke.hp}
          front={poke.sprites.front}
          back={poke.sprites.back}
        />
        )

    }
  }

  


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generatePokeCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
