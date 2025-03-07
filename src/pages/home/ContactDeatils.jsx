import { Box, Typography } from "@mui/material";
import React from "react";

function ContactDeatils() {
  return (
    <Box className="mainLeftContainer">
      <Box>
        <Typography variant="h1" className="heading">
          Get in touch
        </Typography>
      </Box>
      <Box className="subHeading" mt={"85px"}>
        <Typography variant="h5" color="#fff">
          For general enquiries
        </Typography>
      </Box>
      <Box className="contactInfoBox">
        <Box>
          <Typography variant="h6" color="#fff">
            Address :
          </Typography>
          <Typography variant="h6" color="#fff" fontWeight={400} mt={1}>
            110, 16th Road, Chembur, Mumbai - 400071
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="#fff">
            Phone :
          </Typography>
          <Typography variant="h6" color="#fff" fontWeight={400} mt={1}>
            +91 22 25208822
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="#fff">
            Email :
          </Typography>
          <Typography variant="h6" color="#fff" fontWeight={400} mt={1}>
            info@supremegroup.co.in
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactDeatils;
