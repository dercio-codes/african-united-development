import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";

export default function Portfolio() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#111",
        justifyContent: "space-evenly",
        minHeight: "100vh",
      }}
    >
      {/* <Typography variant="h3">Our Portfolio:</Typography> */}
      <SectionHeader txt={"Our Portfolio"}/>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Carousel />
      </Box>
    </Box>
  );
}
