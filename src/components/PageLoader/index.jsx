import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function PageLoading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex={2000}
      background="#ffffff"
    >
      <img src="/images/logo.png" alt="loader" style={{ maxWidth: "180px" }} />
    </Box>
  );
}
