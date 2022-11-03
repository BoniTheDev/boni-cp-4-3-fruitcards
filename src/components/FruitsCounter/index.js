// Write your code here

import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  onEatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="spanEl">{mangoCount} </span>mangoes
            <span className="spanEl"> {bananaCount} </span>
            bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image-size"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image-size"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
