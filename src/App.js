import React from 'react';
import Conditional from './Components/Conditional.js'

class App extends React.Component {

  // App component starts with state isLoading === true
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  // Sets 
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render(){
    return(
      <>
        <h1>Nav Bar</h1>
        <Conditional isLoading={this.state.isLoading} />
        <h1>Footer</h1>
      </>
    )
  }
}

export default App;
