import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./typography";

const baseOptions = {
  palette: {
    primary: {
      main: "#000000", // Customize this color as needed
    },
    secondary: {
      main: "#626262", // Customize this color as needed
    },

    background: {
      main: "#080031", // Customize this color as needed
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFFCC",
    },

    // Add more color definitions as needed
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "200px",
          backgroundColor: "#fff",
          boxShadow:
            "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        },
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          position: "relative",
          borderBottom: "2px solid #ffffff",
          // borderRadius: "8px",
          padding: "10px",
          // background: "#0000000D",
          // "height": "48px",

          "&::before": {
            // borderBottom: "1px solid #ffffff",
            left: "0",
            bottom: "0",
            content: '""',
            position: "absolute",
            right: "0",
            WebkitTransition:
              "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            transition:
              "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            pointerEvents: "none",
          },
          "&::after": {
            borderBottom: "none !important",
            left: "0",
            bottom: "0",
            content: '""',
            position: "absolute",
            right: "0",
            WebkitTransform: "scaleX(0)",
            MozTransform: "scaleX(0)",
            MsTransform: "scaleX(0)",
            transform: "scaleX(0)",
            WebkitTransition:
              "-webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            pointerEvents: "none",
          },
        },
        input: {
          fontSize: 18,
          fontWeight: 400,
          color: "#ffffff",

          lineHeight: "20px",
          // textTransform: "math-auto",
          "&::placeholder": {
            fontWeight: 400, // Increase weight
            color: "#ffffff", // Change color
            opacity: 1,
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          padding: "0px !important",
          backgroundColor: "#000", // Change the background color here
        },
        tag: {
          backgroundColor: "#000",
        },
        inputRoot: {
          maxHeight: "46px",
          padding: "5px",
        },
        option: {
          color: "#fff",
          fontSize: "14px !important",
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "0px",
          textAlign: "left",
        },
        input: {
          width: "0",
          color: "#fff",
          fontSize: "13px !important",
          fontWeight: "400",
        },
      },
    },
    MuiButton: {
      root: {
        background: "red",
        textTransform: "capitalize",
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "none",
          // border: "1px solid rgba(255, 255, 255, 0.60)",
        },
      },
      styleOverrides: {
        containedSecondary: {
          color: "#FFFFFF",
          padding: "14.7px 40px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "11.06px",
          fontFamily: "'Outfit', sans-serif",
          background: "#FFFFFF0D",
          lineHeight: "21.71px",
          border: "1px solid #FFFFFF1A",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            color: "#FFFFFF",
            background: "linear-gradient(180deg, #806DFF 0%, #4A33E7 100%)",
          },

          "&[disabled]": {
            backgroundColor: "#2752e75c",
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },

        sizeLarge: {
          padding: "14.7px 55px",
        },

        sizeSmall: {
          padding: "8px 30px",
          fontSize: "14px",
        },
        containedPrimary: {
          color: "#FFFFFF",
          padding: "10.7px 30px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "400",
          borderRadius: "100px",
          fontFamily: '"Inter", sans-serif',
          background: "#2752E7",
          lineHeight: "23.36px",
          boxShadow: "none",
          border: "1px solid #2752E7",
          "&:hover": {
            border: "1px solid #2752E7",
            color: "#2752E7",
            background: "#FFFFFF",
          },

          "&[disabled]": {
            backgroundColor: "#2752e75c",
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
        outlinedPrimary: {
          borderRadius: "100px",
          color: "#ffffff",
          whiteSpace: "pre",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "23.36px",
          fontFamily: '"Inter", sans-serif',
          padding: "10.7px 30px",
          border: "1px solid #ffffff !important",
          "&:hover": {
            border: "1px solid #2752E7 !important",
            color: "#000000",
            background: "#ffffff",
          },
        },
        outlinedSecondary: {
          color: "#000000",
          padding: "12.7px 40px",
          textTransform: "capitalize",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "52px",
          border: "1px solid #0000001A",
          background: "transparent",
          lineHeight: "20px",
          height: "52.38px !important",
          "&:hover": {
            color: "#000000",
            background: "#80EC00",
          },
          "@media (max-width: 780px)": {
            padding: "10px 20px",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#757575",
        },
        root: {
          background: "#0000000D !important",
          position: "relative",
          border: "1px solid #0000000D",
          color: "#FFFFFFBF",
          padding: "0px",
          borderRadius: "8px",
        },
      },
      select: {
        padding: "15px",
      },
    },
  },
};

export const createCustomTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themeOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
