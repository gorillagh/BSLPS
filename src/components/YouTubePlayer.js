import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Box, CircularProgress } from "@mui/material";

const YouTubePlayer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const opts = {
    height: props.height,
    width: props.width,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };
  const onReady = (event) => {
    setIsLoading(false);
    console.log("YouTube player is ready:", event.target);
  };

  const onStateChange = (event) => {
    console.log("YouTube player state changed:", event.target.getPlayerState());
  };

  const onError = (event) => {
    setIsLoading(false);
    console.log("YouTube player encountered an error:", event.data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a certain delay (e.g., 2 seconds)
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="youtube-player" id="youtube-player">
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" py={5}>
          <CircularProgress />
        </Box>
      ) : (
        <YouTube
          videoId={props.videoId}
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
          onError={onError}
        />
      )}
    </div>
  );
};

YouTubePlayer.defaultProps = {
  height: "280",
  width: "100%",
  videoId: "iILGiJKLQfg",
};

export default YouTubePlayer;
