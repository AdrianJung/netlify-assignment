import React, { Component } from "react";
import Header from "./Header"
class App extends Component {
  state = {

      question : "",
correct_answer : "",
incorrect_answers : [

    ],
    correct_image: ""
  };

  componentDidMount() {
    this.fetchApi()
  }

  fetchImage = (query) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY&limit=1`
    fetch(url)
      .then(res => res.json()).then(result => {
        this.setState({
          correct_image: result.data[0].images.downsized.url
        })
      })
  }
  fetchApi = () => {
    let limit = "1"
    let category = "26"
    let type = "multiple"
    const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&type=${type}`

    fetch(url)
      .then(res => res.json())
      .then(data => {

        this.fetchImage(data.results[0].correct_answer.replace(/&#039;/g, '\'').replace(/\s/g, "+").trimRight("+"))
        this.setState({
          question:  data.results[0].question.replace(/&#039;/g, '\''),
          correct_answer:  data.results[0].correct_answer.replace(/&#039;/g, '\''),
          incorrect_answers:  data.results[0].incorrect_answers.map(answer => {
            return answer.replace(/&#039;/g, '\'')
          })
        })
      })  
    }
    
    render() {
      
console.log(this.state)
    return (
      <div className="App">
        <div className="container">
          <div className="column offset-25">
          <Header />
            <button onClick={this.fetchApi}>Fetch</button>
          </div>
          <h1>{this.state.question}</h1>
          <p>A: {this.state.correct_answer}</p>
          <img src={this.state.correct_image} alt=""/>
          <p>B: {this.state.incorrect_answers[0]}</p>
          <p>C: {this.state.incorrect_answers[1]}</p>
          <p>D: {this.state.incorrect_answers[2]}</p>

        </div>
      </div>
    );
  }
}

export default App
