import styled, {
  keyframes
} from 'styled-components';
import React, {
  Component
} from 'react'
import GifBox from '../GifBox'
import ProgressBar from '../ProgressBar'
const StyledDiv = styled.div `
  display: flex;
  width: 500px;
  height: 400px;
  flex-wrap: wrap;

`


export default class GifBoxWrapper extends Component {
  state = {
    points: 0,
    question: "",
    correct_answer: "",
    incorrect_answers: [

    ],
    correct_image: "",
    incorrect_image_b: "",
    incorrect_image_c: "",
    incorrect_image_d: ""

  };

  componentDidMount() {
    this.fetchApi()
  }

  fetchImages = (queryA, queryB, queryC, queryD) => {
    let key = "HcrAILfdxMhMRyagDsVo2qcphMPxSc6x"

    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryA}&api_key=${key}&limit=1`, {
        headers: {
          'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
        }
      })
      .then(res => res.json()).then(result => {
        this.setState({
          correct_image: result.data[0].images.downsized.url
        })
      })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryB}&api_key=${key}&limit=1`, {
        headers: {
          'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
        }
      })
      .then(res => res.json()).then(result => {
        this.setState({
          incorrect_image_b: result.data[0].images.downsized.url
        })
      })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryC}&api_key=${key}&limit=1`, {
        headers: {
          'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
        }
      })
      .then(res => res.json()).then(result => {
        this.setState({
          incorrect_image_c: result.data[0].images.downsized.url
        })
      })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${queryD}&api_key=${key}&limit=1`, {
        headers: {
          'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
        }
      })
      .then(res => res.json()).then(result => {
        this.setState({
          incorrect_image_d: result.data[0].images.downsized.url
        })
      })

  }
  fetchApi = () => {
    let limit = "1"
    let category = "26"
    let type = "multiple"
    let difficulty = "easy"
    const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&type=${type}&difficulty=${difficulty}`

    fetch(url, {
        headers: {
          'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
        }
      })
      .then(res => res.json())
      .then(data => {

        this.fetchImages(
          data.results[0].correct_answer
          .replace(/&#039;/g, '\'')
          .replace(/\s/g, "+")
          .trimRight("+"),

          data.results[0].incorrect_answers[0]
          .replace(/&#039;/g, '\'')
          .replace(/\s/g, "+")
          .trimRight("+"),

          data.results[0].incorrect_answers[1]
          .replace(/&#039;/g, '\'')
          .replace(/\s/g, "+")
          .trimRight("+"),

          data.results[0].incorrect_answers[2]
          .replace(/&#039;/g, '\'')
          .replace(/\s/g, "+")
          .trimRight("+")

        )
        this.setState({
          question: data.results[0].question.replace(/&#039;/g, '’').replace(/&quot;/g, '"'),
          correct_answer: data.results[0].correct_answer.replace(/&#039;/g, '\''),
          incorrect_answers: data.results[0].incorrect_answers.map(answer => {
            return answer.replace(/&#039;/g, '\'')
          })
        })
      })
  }

  restartGame = () => {
    document.querySelector('.fill').classList.remove('fillAnim');
    document.querySelector('.game-wrapper').setAttribute('style', 'opacity: 0;')
    this.fetchApi()
    setTimeout(() => {
      document.querySelector('.game-wrapper').setAttribute('style', 'opacity: 1;')
      document.querySelector('.fill').classList.add('fillAnim')
    }, 1000);
  }

  resetImage = () => {
    const imgBox = [...document.querySelectorAll('img')]

    imgBox.map(img => {
      img.src = "https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
    })
  }
  choseRightAnswer = () => {
    this.resetImage()
    this.setState({
      points: this.state.points + 1
    })
    console.log('Well Done!')

    this.restartGame()
  }
  choseWrongAnswer = () => {
    this.resetImage()
    this.setState({
      points: this.state.points - 1
    })
    console.log('Try Again!')
    this.restartGame()
  }
  render() {
    return ( <
      div className = "game-wrapper" > {
        /* <button onClick={this.fetchApi}>Fetch</button> */ } <
      StyledDiv >
      <
      h1 > {
        this.state.question
      } < /h1> <
      ProgressBar / > {
        /* <p>{this.state.points}</p> */ } {
        /* <p>A: {this.state.correct_answer}</p> */ } <
      GifBox id = {
        1
      }
      url = {
        this.state.correct_image
      }
      alt = ""
      isCorrect = {
        true
      }
      choseRightAnswer = {
        this.choseRightAnswer
      }
      />

      {
        /* <p>B: {this.state.incorrect_answers[0]}</p> */ } <
      GifBox id = {
        2
      }
      url = {
        this.state.incorrect_image_b
      }
      choseWrongAnswer = {
        this.choseWrongAnswer
      }
      alt = "" / > {
        /* 
                  <p>C: {this.state.incorrect_answers[1]}</p> */
      } <
      GifBox id = {
        3
      }
      url = {
        this.state.incorrect_image_c
      }
      choseWrongAnswer = {
        this.choseWrongAnswer
      }
      alt = "" / > {
        /* 
                  <p>D: {this.state.incorrect_answers[2]}</p> */
      } <
      GifBox id = {
        4
      }
      url = {
        this.state.incorrect_image_d
      }
      choseWrongAnswer = {
        this.choseWrongAnswer
      }
      alt = "" / >
      <
      /StyledDiv> <
      /div>
    )
  }
}