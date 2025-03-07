import { useState ,useRef} from "react";
import { Button } from "@mui/material"; // Using Material UI Button, you can use any other

const VideoSection = ({ activeTab, subTab }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative mt-4 p-4 border rounded-lg shadow">
      <div className="video-container relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="videosolutionBox"
          poster={`/images/Solution/car${subTab + 1}.mp4`}
        >
          <source
            src={`/images/Solution/car${subTab + 1}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <Button
          onClick={handlePlayPause}
          className="play-pause-button"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </Button>
      </div>
    </div>
  );
};

export default VideoSection;
