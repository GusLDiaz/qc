
import coyote from './images/Coyote.png';
import metaCube from './images/MetaCube.png';
import pleasewerk from './images/Pleasewerk.gif';
import Boxes from './Components/Boxes.js';
import WebFont from 'webfontloader';
import World from './Components/World.js';
import ReactPlayer from "react-player/lib/players/YouTube";
import './App.css';
// import Yeet from './images/Pleasewerk.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {//<img src={coyote} className="App-logo" alt="logo" />
        }

        <div>
          <img src={metaCube} className="rex"/>
          <p>
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reasct
        </a>
      </header>
      <body>
        <div id ="box12"> <img src = {pleasewerk} className="introGif" alt= "intro"/>  <img src={coyote} className="App-logo" alt="logo" />
        </div>
        <img src={metaCube} className="rex"/>
        <World name="ye"/>
      <ReactPlayer url='https://youtu.be/BmhFKC7z6qg'/>

      </body>
    </div>
  );
}


export default App;
