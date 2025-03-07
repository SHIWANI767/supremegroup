import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

const MainComponent = styled(Box)(({ theme }) => ({
  "& .mainfooterBox": {
    position: "relative",
    padding: "80px 0",
    width: "100%",
  },
  "& h6": {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "400",
    color: "#ffffff",
    cursor: "pointer",
    lineHeight: "17.64px",
    "@media(max-width:599px)": {
      textAlign: "center",
      fontSize: "11px !important",
      marginTop: "0px",
      whiteSpace: "pre",
    },
  },
  "& .socialBox": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "6px",
    "@media(max-width:767px)": {
      margin: "auto",
      justifyContent: "center",
      marginTop: "10px",
    },
  },
  "& .iconBox": {
    color: "#fff",
    cursor: "pointer",
    fontSize: "25px",
  },
  "& .baseSection": {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0px",
    "& a": {
      textDecoration: "none",
      margin: "0 10px",
      fontSize: "14px",
      fontWeight: "400",
      color: theme.palette.text.secondary,
      "@media(max-width:420px)": {
        fontSize: "12px",
        margin: "0 5px",
      },
    },
    "@media(max-width:575px)": {
      display: "block",
      justifyContent: "center",
      textAlign: "center",
    },
  },
}));

const Footer = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <Box className="mainfooterBox main-sectionGap">
        <img
          src="/images/footer_bg.jpg"
          alt="Footer Background"
          style={{
            position: "absolute",
            top: "0px",
            zIndex: "-1",
            width: "100%",
            height: "100%",
          }}
        />
        <Container>
          <Box className="innerfooterBox">
            <Box className="displaySpacebetween mainfootercustom">
              <Box className="gridleftBox">
                <img
                  src="/images/logo.svg"
                  alt="Footer Logo"
                  className="footerlogo"
                  onClick={() => router.push("/")}
                />
              </Box>
            </Box>
            <Grid container spacing={3} mt={3}>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box className="contentBox1">
                  <Typography variant="body2" fontWeight={600}>
                    APPLICATIONS
                  </Typography>
                  <Box className="subHeadingBox">
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Apparel
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Automotive
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Filtration
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Customised Nonwoven
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box className="contentBox2">
                  <Typography variant="body2" fontWeight={600}>
                    COMPANY
                  </Typography>
                  <Box className="subHeadingBox">
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Who We Are
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Global Competency
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Innovation
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      CESG Impact
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box className="contentBox3">
                  <Typography variant="body2" fontWeight={600}>
                    MORE
                  </Typography>
                  <Box className="subHeadingBox">
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Contact Us
                    </Typography>
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      Careers
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Box className="contentBox4">
                  <Typography variant="body2" fontWeight={600}>
                    FOLLOW US
                  </Typography>

                  <Box className="subHeadingBox">
                    <Typography variant="body2" color="rgb(106, 106, 106)">
                      LinkedIn
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container>
          <Box
            className="displaySpacebetween"
            pt={10}
            // pb={10}
            sx={{
              "@media(max-width:767px)": {
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              },
            }}
          >
            <Typography variant="body1" className="disclaimer" color="#000">
              ©2025. All Rights Reserved.
            </Typography>
            <Box className="footerbotomText" style={{ gap: "40px" }}>
              <Typography variant="body1" color="#000">
                Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </MainComponent>
  );
};

export default Footer;
