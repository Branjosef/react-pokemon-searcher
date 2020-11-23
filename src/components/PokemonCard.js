import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      frontImage: true
    }
  }

  handleClick = () => {
    let newBoolean = !this.state.frontImage
    this.setState({
      frontImage: newBoolean
    })
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.frontImage === true ? this.props.front : this.props.back} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
