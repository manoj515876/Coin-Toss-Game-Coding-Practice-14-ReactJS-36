import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headCount: 0,
    tailCount: 0,
  }

  onChangeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(preCount => ({
        headCount: preCount.headCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
      this.setState(preCount => ({count: preCount.count + 1}))
    } else {
      this.setState(preCount => ({
        tailCount: preCount.tailCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
      this.setState(preCount => ({count: preCount.count + 1}))
    }
  }

  render() {
    const {count, imageUrl, headCount, tailCount} = this.state
    console.log(count)

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onChangeToss}
            >
              Toss Coin
            </button>
          </div>
          <div className="counts">
            <p className="count-para">Total: {count}</p>
            <p className="count-para">Heads: {headCount}</p>
            <p className="count-para">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
