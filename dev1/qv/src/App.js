
import react from 'react';
import coyote from './images/Coyote.png';
import metaCube from './images/MetaCube.png';
import pleasewerk from './images/Pleasewerk.gif';
import 'bulma/css/bulma.min.css';
import styled from 'styled-components'
//import { Level , Level-Item, Hero, HeroHeader,HeroFooter,HeroBody} from 'react-bulma-components'
//import Boxes from './Components/Boxes.js';
import WebFont from 'webfontloader';
//import World from './Components/World.js';
import ReactPlayer from "react-player";
import './App.css';
import Alpha from "./Components/Alpha.js"
import Beta from "./Components/Beta.js"
import Gamma from "./Components/Gamma.js"
import About from "./Components/About.js"
import Contact from "./Components/Contact.js"
import HeroQ from "./Components/HeroQ.js"
// import Yeet from './images/Pleasewerk.gif'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {//<img src={coyote} className="App-logo" alt="logo" />
//         }
//
//         <div>
//           <img src={metaCube} className="rex"/>
//           <p>
//           </p>
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reasct
//         </a>
//       </header>
//       <body>
//         <div id ="box12"> <img src = {pleasewerk} className="introGif" alt= "intro"/>  <img src={coyote} className="App-logo" alt="logo" />
//         </div>
//         <img src={metaCube} className="rex"/>
//         <World name="ye"/>
//       <div id= 'carousel'><ReactPlayer url='https://youtu.be/BmhFKC7z6qg'/></div>
//
//
//       </body>
//     </div>
//   );
// }
function App() {


  return (
    <div class=".container level">
          <div>
            <WrapperHero>
              <HeroQ />
            </WrapperHero>
          </div>
          <div>
              <Alpha class ="LevelItem"/>
              <Beta class ="LevelItem"/>
              <Gamma class ="LevelItem"/>
          </div>
          <div>
              <About class ="LevelItem"/>
          </div>
          <div>
              <Contact class ="LevelItem" />
          </div>
    </div>


  )
}

export default App;
