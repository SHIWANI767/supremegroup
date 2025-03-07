import React, { useEffect } from "react";
import HomeLayout from "@/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "./home/Banner";
import Scroll from "react-scroll";
import CustomHead from "@/components/CustomHead";

import RotatingComponent from "./home/RotatingComponent";
import ContactForm from "./home/ContactForm";

export default function HomePage() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
      const param = searchParams.get("id");
      const targetDiv = document.getElementById(param);

      if (targetDiv) {
        const offsetTop =
          targetDiv.getBoundingClientRect().top + window.scrollY;

        const headerHeight = 130; // Adjust this value based on your layout
        const scroll = Scroll.animateScroll;

        scroll.scrollTo(offsetTop - headerHeight, {
          duration: 800,
          smooth: "easeInOutQuad",
        });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <CustomHead
        title="Supreme Group"
        image="/images/favicon.ico"
        video=""
        isVideo={false}
      />
      <Box>
        <Box className="bannerlanding">
          <Banner />
          <RotatingComponent />
          <div id="contact" style={{ background: "#006abc" }}>
            <ContactForm />
          </div>
        </Box>
      </Box>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
