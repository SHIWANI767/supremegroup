import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typography, Tabs, Tab } from "@mui/material";

const AnimationText = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const controls = useAnimation(); // Define controls for Framer Motion

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowNext(scrollY > 100);
      setActiveTab(scrollY < 300 ? 0 : 1);

      controls.start({
        opacity: scrollY > 100 ? 0.8 : 1,
        paddingTop: scrollY > 100 ? "250px" : "100px",
        paddingBottom: scrollY > 100 ? "50px" : "100px",
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Handle Tab Changes
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setSubTab(0);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const videoSrc = "/images/Solution/solution_1.mp4";

  return (
    <div>
      <motion.div
        animate={controls}
        className="displayCenter"
        initial={{ paddingTop: "100px", paddingBottom: "100px", opacity: 1 }}
      >
        <Typography
          variant="h2"
          color="#fff"
          align="center"
          className="enmvolve-Text"
        >
          Evolving the drive with{" "}
          <span style={{ fontWeight: "700" }}>360-degree</span> comprehensive
          solutions
        </Typography>
      </motion.div>
    </div>
  );
};

export default AnimationText;
