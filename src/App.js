import React, { Component } from "react";
import Header from "./Header"
class App extends Component {
  state = {
    apiResult: []
  };

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = () => {
    let limit = "1"
    let category = "10"
    let difficulty = "easy"
    let type = "multiple"
    const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${difficulty}&type=${type}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          apiResult: [ ...this.state.apiResult, data.results[0]]
        })
      })  
    }
    
    
    render() {
      
      console.log(this.state.apiResult)
    return (
      <div className="App">
        <div className="container">
          <div className="column offset-25">
          <Header />
            <button onClick={this.fetchApi}>Fetch</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App
