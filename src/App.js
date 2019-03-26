// import React, { Component } from "react";
// import Header from "./Header"

// class App extends Component {
//   state = {

//       question : "",
// correct_answer : "",
// incorrect_answers : [

//     ],
//     correct_image: "",
//     incorrect_image_b :"",
//     incorrect_image_c :"",
//     incorrect_image_d :""
  
//   };

//   componentDidMount() {
//     this.fetchApi()
//   }

//   fetchImages = (queryA, queryB, queryC, queryD) => {

    
//     fetch(`http://api.giphy.com/v1/gifs/search?q=${queryA}&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY&limit=1`)
//       .then(res => res.json()).then(result => {
//         this.setState({
//           correct_image: result.data[0].images.downsized.url
//         })
//       })
//       fetch(`http://api.giphy.com/v1/gifs/search?q=${queryB}&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY&limit=1`)
//       .then(res => res.json()).then(result => {
//         this.setState({
//           incorrect_image_b: result.data[0].images.downsized.url
//         })
//       })
//       fetch(`http://api.giphy.com/v1/gifs/search?q=${queryC}&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY&limit=1`)
//       .then(res => res.json()).then(result => {
//         this.setState({
//           incorrect_image_c: result.data[0].images.downsized.url
//         })
//       })
//       fetch(`http://api.giphy.com/v1/gifs/search?q=${queryD}&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY&limit=1`)
//       .then(res => res.json()).then(result => {
//         this.setState({
//           incorrect_image_d: result.data[0].images.downsized.url
//         })
//       })

//   }
//   fetchApi = () => {
//     let limit = "1"
//     let category = "26"
//     let type = "multiple"
//     let difficulty ="easy"
//     const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&type=${type}&difficulty=${difficulty}`
// console.log(url)
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {

//         this.fetchImages(
//           data.results[0].correct_answer
//           .replace(/&#039;/g, '\'')
//           .replace(/\s/g, "+")
//           .trimRight("+") ,

//           data.results[0].incorrect_answers[0]
//           .replace(/&#039;/g, '\'')
//           .replace(/\s/g, "+")
//           .trimRight("+"),

//           data.results[0].incorrect_answers[1]
//           .replace(/&#039;/g, '\'')
//           .replace(/\s/g, "+")
//           .trimRight("+"),

//           data.results[0].incorrect_answers[2]
//           .replace(/&#039;/g, '\'')
//           .replace(/\s/g, "+")
//           .trimRight("+")
          
//           )
//         this.setState({
//           question:  data.results[0].question.replace(/&#039;/g, '’').replace(/&quot;/g, '"'),
//           correct_answer:  data.results[0].correct_answer.replace(/&#039;/g, '\''),
//           incorrect_answers:  data.results[0].incorrect_answers.map(answer => {
//             return answer.replace(/&#039;/g, '\'')
//           })
//         })
//       })  
//     }
    
//     render() {
      
// console.log(this.state)
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="column offset-25">
//           <Header />
//             <button onClick={this.fetchApi}>Fetch</button>
//           </div>

//           <h1>{this.state.question}</h1>
          
//           <p>A: {this.state.correct_answer}</p>
//           <img src={this.state.correct_image} alt=""/>

//           <p>B: {this.state.incorrect_answers[0]}</p>
//           <img src={this.state.incorrect_image_b} alt=""/>

//           <p>C: {this.state.incorrect_answers[1]}</p>
//           <img src={this.state.incorrect_image_c} alt=""/>

//           <p>D: {this.state.incorrect_answers[2]}</p>
//           <img src={this.state.incorrect_image_d} alt=""/>


//         </div>
//       </div>
//     );
//   }
// }

// export default App
