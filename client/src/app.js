import React, {Component} from 'react'
import styles from './app.module.scss'
import './app.css'

console.log('styles:', styles)

class App extends Component {
  state = {
    name: null,
  }

  async componentDidMount() {
    try {
      const result = await fetch('/api/getUsername')
      const name = await result.json()
      if (name) this.setState({name: name.username})
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {name} = this.state
    return name ? (
      <div>{`Hello ${name}!!`}</div>
    ) : (
      <div className="elem">Loading...</div>
    )
  }
}

export default App
