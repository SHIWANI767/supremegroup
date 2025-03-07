import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Container,
  IconButton,
  Button,
} from "@mui/material";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../components/Logo";
import AppContext from "@/context/AppContext";
import { FaLinkedinIn } from "react-icons/fa";
import Cookies from "js-cookie";
import { api_configs } from "@/api-services";
import { apiRouterCall } from "@/api-services/service";

const headersData = [
  { label: "Contact Us", href: "/", link: { id: "contact" } },
];

export default function Header() {
  const router = useRouter();
  const auth = useContext(AppContext);
  const { openTrmConPol, setOpenTrmConPol } = useContext(AppContext);
  const [state, setState] = useState({ mobileView: false, drawerOpen: false });

  useEffect(() => {
    const setResponsiveness = () =>
      setState((prev) => ({ ...prev, mobileView: window.innerWidth < 1220 }));

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
    return () => window.removeEventListener("resize", setResponsiveness);
  }, []);

  const handleDrawerOpen = () =>
    setState((prev) => ({ ...prev, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prev) => ({ ...prev, drawerOpen: false }));

  const updateTermsAndConditions = async (type) => {
    try {
      const response = await apiRouterCall({
        method: "GET",
        url: api_configs.updateTermsAndConditions,
        token: localStorage.getItem("user_token"),
        paramsData: { termsAndConditions: type },
      });
      if (response.data.responseCode === 200) auth.getProfileDataHandler(token);
    } catch (error) {
      console.error(error);
    }
  };

  const femmecubatorLogo = (
    <Box onClick={() => router.push("/")}>
      <Logo className="logoImg" />
    </Box>
  );

  const getMenuButtons = () =>
    headersData.map(({ label, href, link }, index) => (
      <Button
        key={index}
        color="inherit"
        className={`menuButton ${router.pathname === href ? "active" : ""}`}
        onClick={() =>
          router.pathname === "/"
            ? Scroll.scroller.scrollTo(link.id, { smooth: true, duration: 500 })
            : router.push({ pathname: "/", query: { id: link.id } })
        }
      >
        {label}
      </Button>
    ));

  const getMenuButtonsMobile = () =>
    headersData.map(({ label, href, link }, index) => (
      <Button
        key={index}
        color="inherit"
        className={`menuButton ${router.pathname === href ? "active" : ""}`}
        onClick={() => {
          if (href !== "/") {
            router.push(href);
          } else {
            router.push(`/${link.id ? "?id=" + link.id : ""}`);
            handleDrawerClose();
          }
        }}
        style={{ display: "block", padding: "7px 17px" }}
      >
        {label}
      </Button>
    ));

  const displayDesktop = () => (
    <Toolbar className="topbarmainBox" style={{ padding: 0 }}>
      <Box className="displaySpacebetween width100">
        {femmecubatorLogo}
        <Box className="displayStart" style={{ gap: "32px" }}>
          {getMenuButtons()}
          <Box className="buttonTopbar displayStart" style={{ gap: "15px" }}>
            <IconButton
              style={{ background: "transparent" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/supreme-group-company/"
                )
              }
            >
              <FaLinkedinIn style={{ color: "#000000" }} />
            </IconButton>
            <img
              src="/images/Landing/social_lang.svg"
              alt="Language Selector"
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>
      </Box>
    </Toolbar>
  );

  const displayMobile = () => (
    <Toolbar>
      <Box className="displaySpacebetween width100">
        <Drawer
          anchor="right"
          open={state.drawerOpen}
          onClose={handleDrawerClose}
        >
          <Box style={{ padding: "10px" }}>
            <Box mb={3} mt={3}>
              {femmecubatorLogo}
            </Box>
            {getMenuButtonsMobile()}
            <Box
              className="buttonTopbar displayStart"
              mt={2}
              style={{ gap: "15px" }}
            >
              <IconButton
                style={{ background: "transparent" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/supreme-group-company/"
                  )
                }
              >
                <FaLinkedinIn style={{ color: "#000000" }} />
              </IconButton>
              <img
                src="/images/Landing/social_lang.svg"
                alt="Language Selector"
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Drawer>
        {femmecubatorLogo}
        <Box className="topbarmainBox">
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon style={{ color: "#5CD6FF", fontSize: "30px" }} />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );

  return (
    <AppBar
      elevation={0}
      className="backbarmainBox"
      style={{
        padding: "10px 0 0",
        position: "relative",
        background: "transparent",
      }}
    >
      <Container maxWidth="lg">
        {state.mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </AppBar>
  );
}
