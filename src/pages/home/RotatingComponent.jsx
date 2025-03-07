import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Typography, Tabs, Tab, Container, Button } from "@mui/material";
import AnimationText from "./AnimationText";
import { FaPlay } from "react-icons/fa6";
import { IoPause } from "react-icons/io5";

const RotatingComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Rotate the box after scrolling 100px
      setShowNext(scrollY > 100);

      // Change tab dynamically based on scroll depth
      if (scrollY < 300) {
        setActiveTab(0);
      } else if (scrollY >= 300) {
        setActiveTab(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Main Tab Change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSubTab(0); // Reset sub-tab when switching main tabs
  };

  // Handle Sub-tab Change
  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
  };
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
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
    <div
      style={{ background: "#000", padding: "50px 0 100px" }}
      className="custumscroolTbaBox"
    >
      <AnimationText />
      <div className="flex flex-col items-center justify-center min-h-screen mainsolutionBox">
        {/* Main Tabs */}

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          className="custom-tabs displayEnd tabuscustunres"
          style={{
            display: "flex",
            flexDirection: "column", // Set direction to column
            alignItems: "center", // Center the tabs
            paddingLeft: "100px",
          }}
        >
          <Tab
            label={
              <div>
                <Typography variant="h3">Passenger vehicles</Typography>
                <Typography variant="h6" style={{ fontSize: "15px" }}>
                  Revving up innovation from <br /> interior to exterior.
                </Typography>
              </div>
            }
          />

          <Tab
            label={
              <div>
                <Typography variant="h3">Commercial vehicles</Typography>
                <Typography variant="h6" style={{ fontSize: "15px" }}>
                  Advancing engineering <br /> for heavy-duty vehicles.
                </Typography>
              </div>
            }
          />
        </Tabs>

        {/* Sub-tabs for Tab 1 */}

        {/* Dynamic Content */}
        <div className="mt-4 p-4 border rounded-lg shadow">
          {activeTab === 0 ? (
            <>
              {subTab === 0 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/solution_1.mp4" // Ensure correct path
                >
                  <source
                    src="/images/Solution/solution_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              {subTab === 1 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/car2.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/car2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {subTab === 2 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/car3.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/car3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {subTab === 3 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/car4.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/car4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {subTab === 4 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/car5.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/car5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </>
          ) : (
            <>
              {subTab === 0 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
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
              )}
              {subTab === 1 && (
                <video
                  ref={videoRef} // Ensure ref is attached to active video
                  autoPlay // Default autoplay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/truck2.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/truck2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {subTab === 2 && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="videosolutionBox"
                  poster="/images/Solution/truck3.mp4" // Ensure correct path
                >
                  <source src="/images/Solution/truck3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </>
          )}
        </div>
      </div>

      {activeTab === 0 && (
        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tabs
            value={subTab}
            onChange={handleSubTabChange}
            centered
            className="sub-tabs mt-2 bottomText"
            style={{ justifyContent: "flex-end" }}
          >
            <Tab
              icon={
                <img
                  src="/images/Solution/car1.png"
                  alt="Tab 1A"
                  className={subTab === 0 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Complete body"
              iconPosition="top"
              className={subTab === 0 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="/images/Solution/car2.png"
                  alt="Tab 1B"
                  className={subTab === 1 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Front"
              iconPosition="top"
              className={subTab === 1 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="/images/Solution/car3.png"
                  alt="Tab 1C"
                  className={subTab === 2 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Cabin "
              iconPosition="top"
              className={subTab === 2 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="/images/Solution/car4.png"
                  alt="Tab 1D"
                  className={subTab === 3 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Trunk"
              iconPosition="top"
              className={subTab === 3 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="/images/Solution/car5.png"
                  alt="Tab 1D"
                  className={subTab === 4 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Exterior"
              iconPosition="top"
              className={subTab === 4 ? "tab-item selected" : "tab-item"}
            />
          </Tabs>

          <Button onClick={handlePlayPause} className="play-pause-button">
            {/* Circular Progress Bar */}
            <svg
              className="progress-circle"
              width="80"
              height="80"
              viewBox="0 0 100 100"
            >
              <circle className="circle-background" cx="50" cy="50" r="40" />
              <motion.circle
                className="circle-progress"
                cx="50"
                cy="50"
                r="40"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - progress)} // Dynamic progress fill
                transition={{ duration: 0.5, ease: "linear" }}
              />
            </svg>

            {/* Play/Pause Icon */}
            <span className="play-icon">
              {isPlaying ? <IoPause /> : <FaPlay />}
            </span>
          </Button>
        </Container>
      )}

      {activeTab === 1 && (
        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <Tabs
            value={subTab}
            onChange={handleSubTabChange}
            centered
            className="sub-tabs mt-2 bottomText"
          >
            <Tab
              icon={
                <img
                  src="https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg"
                  alt="Tab 1A"
                  className={subTab === 0 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Complete body"
              iconPosition="top"
              className={subTab === 0 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg"
                  alt="Tab 1B"
                  className={subTab === 1 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Front"
              iconPosition="top"
              className={subTab === 1 ? "tab-item selected" : "tab-item"}
            />

            <Tab
              icon={
                <img
                  src="https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg"
                  alt="Tab 1C"
                  className={subTab === 2 ? "tab-icon selected" : "tab-icon"}
                />
              }
              label="Cabin "
              iconPosition="top"
              className={subTab === 2 ? "tab-item selected" : "tab-item"}
            />
          </Tabs>

          <Button onClick={handlePlayPause} className="play-pause-button">
            {/* Circular Progress Bar */}
            <svg
              className="progress-circle"
              width="80"
              height="80"
              viewBox="0 0 100 100"
            >
              <circle className="circle-background" cx="50" cy="50" r="40" />
              <motion.circle
                className="circle-progress"
                cx="50"
                cy="50"
                r="40"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - progress)} // Dynamic progress fill
                transition={{ duration: 0.5, ease: "linear" }}
              />
            </svg>

            {/* Play/Pause Icon */}
            <span className="play-icon">
              {isPlaying ? <IoPause /> : <FaPlay />}
            </span>
          </Button>
        </Container>
      )}
    </div>
  );
};

export default RotatingComponent;
