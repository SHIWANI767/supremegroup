import { ThemeProvider } from "@mui/material/styles";
import "@/Scss/main.css";
import { createCustomTheme } from "/src/Themes/index";
import { useState, useEffect } from "react";
import ContextWrapper from "@/context/ContextWrapper";
import PageLoader from "@/components/PageLoader";
import { Router, useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { isAuthenticated, withoutAuthRoutes } from "@/AuthGuard";
import CustomHead from "@/components/CustomHead";

function MyApp({ Component, pageProps }) {
  const theme = createCustomTheme();
  const router = useRouter();
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [isDashboardLoading, setIsDashboardLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const notRequiresAuth = !withoutAuthRoutes.includes(router.pathname);
    if (isAuthenticated() && router.pathname !== "/") {
      // notRequiresAuth && router.push("/");
    }
  }, [router.pathname]);

  useEffect(() => {
    const isAuth = () => {
      return window.localStorage.getItem("user_token") !== null;
    };
    const withAntiAuthRoutes = [
      "/auth/login",
      "/auth/signup",
      "/auth/forgot",
      "/auth/reset",
      "/auth/otp",
    ];

    const notRequiresAuth = withAntiAuthRoutes.includes(router.pathname);
    if (typeof window !== "undefined" && isAuth() && router.pathname !== "/") {
      // notRequiresAuth && router.push("/");
    }
  }, [router.pathname]);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  useEffect(() => {
    const startLoading = (url) => {
      if (url.includes("/dashboard/")) {
        setIsDashboardLoading(true);
      } else {
        setLoading(true);
      }
    };
    const stopLoading = () => {
      setLoading(false);
      setIsDashboardLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ContextWrapper isDashboardLoading={isDashboardLoading}>
        <CustomHead title="Arbitrage-Bot" image="/images/fav_icon.svg" />
        <Toaster autoClose={1000} position="top-right" reverseOrder={false} />
        {loading && <PageLoader />}
        {!loading && isClientLoaded && (
          <>{getLayout(<Component {...pageProps} />)}</>
        )}{" "}
      </ContextWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
