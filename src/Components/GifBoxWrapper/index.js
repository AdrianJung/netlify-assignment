import styled, { keyframes } from "styled-components";
import React, { Component } from "react";
import GifBox from "../GifBox";
const StyledDiv = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
  flex-wrap: wrap;
`;

export default class GifBoxWrapper extends Component {
  state = {
    points: 0,
    question: "",
    correct_answer: "",
    incorrect_answers: [],
    correct_image: "",
    incorrect_image_b: "",
    incorrect_image_c: "",
    incorrect_image_d: ""
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchImages = (queryA, queryB, queryC, queryD) => {
    let key = "HcrAILfdxMhMRyagDsVo2qcphMPxSc6x";

    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${queryA}&api_key=${key}&limit=1`,
      {
        headers: {
          "Accept-Encoding": "gzip;q=1.0, compress;q=0.5"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          correct_image: result.data[0].images.downsized.url
        });
      });
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${queryB}&api_key=${key}&limit=1`,
      {
        headers: {
          "Accept-Encoding": "gzip;q=1.0, compress;q=0.5"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          incorrect_image_b: result.data[0].images.downsized.url
        });
      });
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${queryC}&api_key=${key}&limit=1`,
      {
        headers: {
          "Accept-Encoding": "gzip;q=1.0, compress;q=0.5"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          incorrect_image_c: result.data[0].images.downsized.url
        });
      });
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${queryD}&api_key=${key}&limit=1`,
      {
        headers: {
          "Accept-Encoding": "gzip;q=1.0, compress;q=0.5"
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          incorrect_image_d: result.data[0].images.downsized.url
        });
      });
  };
  fetchApi = () => {
    let limit = "1";
    let category = "26";
    let type = "multiple";
    let difficulty = "easy";
    const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&type=${type}&difficulty=${difficulty}`;

    fetch(url, {
      headers: {
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.fetchImages(
          data.results[0].correct_answer
            .replace(/&#039;/g, "'")
            .replace(/\s/g, "+")
            .trimRight("+"),

          data.results[0].incorrect_answers[0]
            .replace(/&#039;/g, "'")
            .replace(/\s/g, "+")
            .trimRight("+"),

          data.results[0].incorrect_answers[1]
            .replace(/&#039;/g, "'")
            .replace(/\s/g, "+")
            .trimRight("+"),

          data.results[0].incorrect_answers[2]
            .replace(/&#039;/g, "'")
            .replace(/\s/g, "+")
            .trimRight("+")
        );
        this.setState({
          question: data.results[0].question
            .replace(/&#039;/g, "’")
            .replace(/&quot;/g, '"'),
          correct_answer: data.results[0].correct_answer.replace(
            /&#039;/g,
            "'"
          ),
          incorrect_answers: data.results[0].incorrect_answers.map(answer => {
            return answer.replace(/&#039;/g, "'");
          })
        });
      });
  };

  restartGame = () => {
    document.querySelector(".question").setAttribute("style", "opacity: 0;");
    this.fetchApi();
    setTimeout(() => {
      document.querySelector(".question").setAttribute("style", "opacity: 1;");
      const msgBox = document.querySelector(".wrong-right");
      msgBox.innerHTML = "";
      msgBox.classList.remove("flashing");
    }, 1200);
  };

  resetImage = () => {
    const imgBox = [...document.querySelectorAll("img")];

    imgBox.map(img => {
      img.src = "https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif";
    });
  };

  choseRightAnswer = () => {
    const msgBox = document.querySelector(".wrong-right");
    msgBox.innerHTML = "🎉";
    msgBox.classList.add("flashing");
    this.resetImage();
    this.setState({
      points: this.state.points + 1
    });
    this.restartGame();
  };

  choseWrongAnswer = () => {
    const msgBox = document.querySelector(".wrong-right");
    msgBox.innerHTML = "💩";
    msgBox.classList.add("flashing");
    this.resetImage();
    this.setState({
      points: this.state.points - 1
    });
    this.restartGame();
  };
  render() {
    return (
      <div className="game-wrapper">
        <StyledDiv>
          <p className="wrong-right" />
          <h1 className="question"> {this.state.question} </h1>
          <GifBox
            id={1}
            url={this.state.correct_image}
            alt=""
            isCorrect={true}
            choseRightAnswer={this.choseRightAnswer}
          />
          <GifBox
            id={2}
            url={this.state.incorrect_image_b}
            choseWrongAnswer={this.choseWrongAnswer}
            alt=""
          />
          <GifBox
            id={3}
            url={this.state.incorrect_image_c}
            choseWrongAnswer={this.choseWrongAnswer}
            alt=""
          />
          <GifBox
            id={4}
            url={this.state.incorrect_image_d}
            choseWrongAnswer={this.choseWrongAnswer}
            alt=""
          />
        </StyledDiv>
      </div>
    );
  }
}
