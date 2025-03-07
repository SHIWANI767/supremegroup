import React, { useEffect, useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
const BannerComponent = styled("div")(({ theme }) => ({
  position: "relative", // Position relative to contain absolutely positioned elements
}));

export default function Banner() {
  const router = useRouter();
  const imageRef = useRef(null);

  useEffect(() => {
    // Create an IntersectionObserver to observe when the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("zoom-in"); // Add zoom-in animation class
        } else {
          entry.target.classList.remove("zoom-in"); // Optional: remove animation class
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    const imgElement = imageRef.current;
    if (imgElement) observer.observe(imgElement);

    // Cleanup on unmount
    return () => {
      if (imgElement) observer.unobserve(imgElement);
    };
  }, []);

  return (
    <BannerComponent>
      <Box className="video-bannersection">
        <video autoPlay loop muted playsInline>
          <source src="images/Landing/video_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Content */}
        <Box className="video-content">
          <ScrollAnimation animateIn="fadeInDown">
            <Typography variant="h3" color="#FFFFFF" fontWeight="300">
              Driven by performance
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn">
            <Typography
              variant="h1"
              color="white"
              className="video-heading"
              mt={3}
            >
              <span style={{ fontWeight: "600" }}>Soft trims and</span>
              <span style={{ color: "#00bfff" }}> NVH solutions</span>
              <br />
              {""}for seamless rides
            </Typography>
          </ScrollAnimation>
        </Box>

        <div className="oberlayShade"></div>
      </Box>
    </BannerComponent>
  );
}
