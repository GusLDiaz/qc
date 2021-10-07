import react, {useEffect} from "react"
import WebFont from 'webfontloader'
import YouTubePlayer from "react-player/lib/players/YouTube";


function World(props) {
  // useEffect(() => {
  //   WebFont.load({
  //     typekit: {
  //       id: 'tul1fjj'
  //     }
  //   },
  //   );
  //  }, []);


    return <div><h1 className='superhero'> Hello, {props.name}</h1>
    <YouTubePlayer
      url='https://youtu.be/BmhFKC7z6qg'
    /></div>;
  }

export default World;
