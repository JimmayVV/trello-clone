import React, {Component} from 'react'
import './app.css'

class App extends Component {
  state = {
    name: null,
  }

  async componentDidMount() {
    const result = await fetch('/api/getUsername')
    const name = await result.json()
    if (name) this.setState({name: name.username})
  }

  render() {
    const {name} = this.state
    return name ? <div>{`Hello ${name}!!`}</div> : <div>Loading...</div>
  }
}

export default App
