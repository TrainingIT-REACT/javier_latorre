import React from "react";

// Css
import "./PlayerControls.css";

const PlayerControls = ({ closePlayer, songTitle, songAudio }) => {
  return (
    <div>
      <p className="song-title">
        {songTitle}
        <span onClick={closePlayer} className="closing-tag">
          X
        </span>
      </p>
      <audio className="audio-tag" controls autoPlay>
        <source src={songAudio} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default PlayerControls;
