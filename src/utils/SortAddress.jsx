// SortAddress.js
import React, { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { IconButton } from "@mui/material";
import { sortAddress, sortAddressStart } from ".";
import { Check } from "@mui/icons-material";
import toast from "react-hot-toast";

const SortAddress = ({ address, showFull, isShowEnd, showStart }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast.success("Copied!");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Unable to copy text", err);
      });
  };

  return (
    <div
      style={
        showFull
          ? {}
          : {
              display: "flex",
              alignItems: "center",
              justifyContent: isShowEnd ? "end" : "",
            }
      }
    >
      <span>
        {showFull
          ? address
          : showStart
          ? sortAddressStart(address)
          : sortAddress(address.toString())}
      </span>
      <IconButton
        onClick={handleCopyClick}
        style={{
          // marginLeft: "10px",
          cursor: "pointer",
          border: "none",
          background: "transparent",
          height: "34px",
          padding: "0px",
          width: "34px",
        }}
        disabled={copied}
      >
        {copied ? <Check style={{ color: "green" }} /> : <LuCopy />}
      </IconButton>
    </div>
  );
};

export default SortAddress;
