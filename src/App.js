import React, { Component } from "react";
import Header from "./Header"
class App extends Component {
  state = {
    apiResults: []
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
          apiResults: [ ...this.state.apiResults, data.results]
        })
      })  
    }
    
    
    render() {
      
      console.log(this.state.apiResults[0])
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
