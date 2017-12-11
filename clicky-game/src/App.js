import React, { Component } from 'react';
import './App.css';
import Images from "./images";
import photo from "./pictures.json";
import shuffle from 'shuffle-array';

shuffle(photo);

let currentScore = 0;

let highScore = 0;


class App extends Component {
  state = {
    photo
  };

  setSelected = (id) => {
    console.log(id);
    this.setState({ selected: true});
  }

render () {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="text-center">Clicky Game</h1>
        <h2 className="text-right">Your Score: {currentScore} </h2>
        <h2 className="text-right">High Score: {highScore} </h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
              {this.state.photo.map(photos => {
                return (
                  <Images
                    key={photos.id}
                    name={photos.name}
                    id={photos.id}
                    image={photos.image}
                    selected={photos.selected}
                    setSelected={this.setSelected}
                  />
                )
              })}
          </div>
        </div>

    </div>
  );
  }
}


export default App;