import React, { Component } from "react";
import Header from "./Header"
class App extends Component {
  state = {
    apiResult: [

    ]
  };

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = () => {
    let limit = "1"
    let category = "26"
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
      
   this.state.apiResult.map(item => {
     console.log(item.correct_answer)
     console.log(item.question)
     item.incorrect_answers.map(incorrect_answer => {
       console.log(incorrect_answer)
     })
    })
    return (
      <div className="App">
        <div className="container">
          <div className="column offset-25">
          <Header />
            <button onClick={this.fetchApi}>Fetch</button>
          </div>
          <h2>GIPHYQUIZ</h2>
        </div>
      </div>
    );
  }
}

export default App
