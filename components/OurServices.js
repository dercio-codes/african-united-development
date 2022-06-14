import * as React from "react";
import SectionHeader from "./SectionHeader";
import SecondarySectionHeader from "./SecondarySectionHeader";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function OurServices() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#111111",
        color: "#fff",
        minHeight: "100vh",
        padding: 8,
      }}
    >
      <SectionHeader txt={"Our Services"} />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <HomeRoundedIcon
            sx={{
              fontSize: 58,
              fill:"#f7a02e"
            }}
          />
          <SecondarySectionHeader txt={"Building"} />

          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <HandymanRoundedIcon
            sx={{
              fontSize: 58,
              fill:"#f7a02e"
            }}
          />

          <SecondarySectionHeader txt={"Renovation"} />

          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <EngineeringRoundedIcon
            sx={{
              fontSize: 58,
              fill:"#f7a02e"
            }}
          />
          <SecondarySectionHeader txt={"Interiors"} />

          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <FoundationRoundedIcon
            sx={{
              fontSize: 58,
              fill:"#f7a02e"
            }}
          />
          <SecondarySectionHeader txt={"Plumbing"} />

          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
      </Grid>
      
      {/* <div style={{
        width:"70%",
        height:4,
        background:'#f7a02e'
      }}>

      </div> */}
    </Box>
  );
}
