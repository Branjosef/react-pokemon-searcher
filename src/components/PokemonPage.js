import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokes: [],
      searchQuery: '',
      formName:'',
      formHp: '',
      formFront: '',
      formBack: '',
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokeData => {
      this.setState({
        pokes: pokeData
      })
    })
  }

  searchPoke = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleName = (event) => {
    this.setState({
      formName: event.target.value
    })
  }

  handleHp = (event) => {
    this.setState({
      formHp: event.target.value
    })
  }

  handleFront = (event) => {
    this.setState({
      formFront: event.target.value
    })
  }

  handleBack = (event) => {
    this.setState({
      formBack: event.target.value
    })
  }


  handleSubmit = (event) => {

    event.preventDefault()

    const formData = {
      name: this.state.formName,
      hp: this.state.formHp,
      sprites:{
        front: this.state.formFront,
        back: this.state.formBack
      }
    }
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(formData)
    })

    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokeData => {
      this.setState({
        pokes: pokeData
      })
    })

  }



  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}handleName={this.handleName}handleHp={this.handleHp}handleFront={this.handleFront}handleBack={this.handleBack}/>
        <br />
        <Search searchPoke={this.searchPoke} />
        <br />
        <PokemonCollection pokes={this.state.pokes} query={this.state.searchQuery}/>
      </Container>
    )
  }
}

export default PokemonPage
