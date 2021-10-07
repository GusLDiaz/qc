import react, {useEffect} from "react"
import WebFont from 'webfontloader'
import YouTubePlayer from "react-player/lib/players/YouTube";
import ReactPlayer from "react-player"
import React from "react";
import PropTypes from "prop-types";

function World(props) {
  const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};




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
    />
      <ReactPlayer {...props}/></div>
};
export default World
