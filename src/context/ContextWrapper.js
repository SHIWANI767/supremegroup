import React, { useState, useEffect, createContext } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { apiRouterCall } from "../api-services/service";
import Cookies from "js-cookie";
import { api_configs } from "@/api-services";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("user_token", accessToken);
    axios.defaults.headers.common.Authorization = `${accessToken}`;
    Cookies.set("user_token", accessToken, { expires: 1 }); // Expires in 1 day
  } else {
    localStorage.removeItem("user_token");
    delete axios.defaults.headers.common.Authorization;
    Cookies.remove("user_token");
  }
};
function checkLogin(token) {
  const user_token = Cookies.get("user_token");

  if (typeof window !== "undefined" && window.localStorage) {
    if (user_token) {
      const accessToken = window.localStorage.getItem("user_token") || token;
      return !!accessToken;
    } else {
      window.localStorage.removeItem("user_token");
      return false;
    }
  } else {
    return false;
  }
}

export default function ContextWrapper({ children, ...props }) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData, setUserData] = useState();
  const [connectedExchangeList, setConnectedExchangeList] = useState();
  const [openTrmConPol, setOpenTrmConPol] = useState(false);
  const [plans, setPlans] = useState([]);
  const [nowpaymentCoinList, setexchnageType] = useState([]);
  const [subscriptionIdd, setSubscriptionIdd] = useState("");
  const [topHeading, setTopHeading] = useState("Dashboard");

  const cookieValue = Cookies.get("AcceptTerm&Condition");
  const router = useRouter();

  const getNowPaymentcoins = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: api_configs.getPlan,
        headers: {
          "Content-Type": "application/json",
          token: window.localStorage.getItem("user_token"),
        },
      });
      if (res.data.responseCode === 200) {
        // console.log(" ------- response responseCode ", res.data.result);
        setPlans(res.data.result);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(" ----------- cookieValue ", cookieValue);
    if (!cookieValue) {
      setOpenTrmConPol(true);
    }
  }, [cookieValue]);
  const getProfileDataHandler = async (token) => {
    try {
      const response = await apiRouterCall({
        method: "GET",
        url: api_configs.getProfile,
        token: token,
      });
      if (response?.data?.responseCode === 200) {
        setUserData(response?.data?.result);
        let is_admin = response?.data?.result.userType;
        Cookies.set("is_admin", is_admin);
        if (response?.data?.result.subscriptionPlaneStatus) {
          getMyPlan(response?.data?.result.subscriptionPlaneId, token);
        }
        if (response?.data?.result.termsAndConditions == "ACCEPT") {
          setOpenTrmConPol(false); // must be false
        } else if (cookieValue) {
          setOpenTrmConPol(false);
        } else {
          setOpenTrmConPol(true);
        }
      } else {
        handleLogout("Your session has expired. Please log in again.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getMyPlan = async (iddd, token) => {
    // console.log(" ---------- getMyPlan", iddd);
    try {
      const res = await axios({
        method: "GET",
        url: api_configs.myPlan,
        headers: { token: token },
        params: {
          planStatus: "ACTIVE",
          limit: 10,
        },
      });
      if (res.data.responseCode === 200) {
        setSubscriptionIdd(res.data.result.docs[0].subScriptionPlanId);
        console.log(
          iddd,
          " ---------- getMyPlan",
          res.data.result.docs[0].subScriptionPlanId
        );
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getConnectedExchangeList = async () => {
    try {
      const response = await apiRouterCall({
        method: "GET",
        url: api_configs.connectedExchangeList,
        token: window.localStorage.getItem("user_token"),
      });
      if (response.data.responseCode === 200) {
        setConnectedExchangeList(response.data.result);
        Cookies.set("is_exchange", response.data.result.length);
      }
    } catch (error) {
      console.log(error);
      Cookies.set("is_exchange", 0);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("user_token")) {
        getProfileDataHandler(window.localStorage.getItem("user_token"));
        getConnectedExchangeList(window.localStorage.getItem("user_token"));
        getNowPaymentcoins();
      }
    }
  }, [isLogin]);

  const handleLogout = (mess) => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_token");
    data.userLogIn(false, null);
    router.replace("/"); 
    Cookies.remove("user_token");
    Cookies.remove("is_admin");
    Cookies.remove("is_exchange");
    // Cookies.remove("AcceptTerm&Condition");
    mess && toast.success(mess);
    // toast.success("Your session has expired. Please log in again.");
  };

  //sign in using google
  const signInWithGoogle = () => {
    // signInWithPopup(auth, new GoogleAuthProvider());
  };
  //sign in using facebook
  const signInWithFacebook = () => {
    // signInWithPopup(auth, new FacebookAuthProvider());
  };
  let data = {
    data: "hello",
    topHeading,
    setTopHeading,
    userLoggedIn: isLogin,
    isAdmin: userData?.userType,
    userData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
    plans,
    nowpaymentCoinList,
    isDashboardLoading: props.isDashboardLoading,
    connectedExchangeList,
    handleLogout: (e) => handleLogout(e),
    getProfileDataHandler: (data) =>
      getProfileDataHandler(localStorage.getItem("user_token")),
    getConnectedExchangeList: (t) => getConnectedExchangeList(t),
    signInWithFacebook,
    signInWithGoogle,
    openTrmConPol,
    setOpenTrmConPol,
    subscriptionIdd,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
