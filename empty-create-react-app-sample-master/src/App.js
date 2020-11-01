import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
//
// let width = 500,
//     height = 0,
//     filter = 'none',
//     streaming = false;
//
// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const photos = document.getElementById('photos');
// const photoButton = document.getElementById('photo-button');
// const clearButton = document.getElementById('clear-button');
// const photoFilter = document.getElementById('photo-filter');
//
//
//
//     navigator.mediaDevices.getUserMedia({video: true, audio: true}
//     )
//         .then(function(stream){
//         video.current.srcObject = stream;
//         video.current.play();
// })
//         .catch(function (err) {
//         console.log(`Error: ${err}`)
//         })
//     ;

class App extends Component {
    constructor(props) {
        super(props);

        this.localVideoref = React.createRef()
    }
  render() {
      const constraints = {video: true}
      const success = (stream) => {
          this.localVideoref.current.srcObject = stream
        }

        const failure = (e) => {
          console.log('getUserMedia Error:', e)
        }


          navigator.mediaDevices.getUserMedia(constraints, success, failure)

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <video ref={this.localVideoref} autoPlay></video>
          <button id="filter-button" className="btn btn-dark">
              Choose filter
          </button>
          <select id="filter-id">
              <option value="none">Normal</option>
              <option value="none">Sepia</option>
          </select>
          <button id="clear-button">Clear</button>

      </div>
    );
  }
}

export default App;
