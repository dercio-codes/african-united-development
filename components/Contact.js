import DarkSectionHeader from "./DarkSectionHeader";
import SecondarySectionHeader from "./SecondarySectionHeader";
import { styled, makeStyles } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Instagram from "@mui/icons-material/Instagram";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import Link from "next/link";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import DarkSecondarySectionHeader from "./DarkSecondaySectionHeader";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default () => {
  return (
    <div
      style={{
        minHeight: "110vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "4rem",
        }}
      >
        <DarkSectionHeader txt="CONTACT US" />
      </Box>


      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              padding: "60px",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <DarkSecondarySectionHeader txt={"Fill in the form below"} />
            <div
                style={{
                  height: "5px",
                  width: "50px",
                  background: "#111",
                }}
              ></div>

            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              sx={{
                width: "100%",
                marginTop: 4,
                "&:focus": {
                  fill: "#f7a02e !important",
                },
              }}
            />

            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              sx={{
                width: "100%",
                marginTop: 4,
                "&:focus": {
                  fill: "#f7a02e !important",
                },
              }}
            />

            <TextField
              id="standard-basic"
              label="Phone Number"
              type="tel"
              variant="standard"
              sx={{
                width: "100%",
                marginTop: 4,
                "&:focus": {
                  fill: "#f7a02e !important",
                },
              }}
            />

            <TextField
              id="standard-basic"
              label="Enter Your Message Here"
              variant="standard"
              multiline
              rows={"6"}
              sx={{
                width: "100%",
                marginTop: 4,
                "&:focus": {
                  fill: "#f7a02e !important",
                },
              }}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
                marginTop: 4,
              }}
            >
              <Button
                sx={{
                  background: "#f7a02e",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </Box>
            <div
              style={{
                height: "2px",
                width: "85%",
                background: "#f7a02e",
                position: "absolute",
                margin: "auto",
                bottom: 0,
              }}
            ></div>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
              width: "100%",
              position: "relative",
              padding: "32px",
            }}
          >
            <Stack>
              <DarkSecondarySectionHeader txt={"Scan Me"} />
              <div
                style={{
                  height: "5px",
                  width: "50px",
                  background: "#111",
                }}
              ></div>
            </Stack>
            <img
              src="./img/qr-code-1.png"
              alt=""
              style={{
                height: "40%",
                objectFit: "contain",
                width: "100%",
              }}
            />

            <Box
              sx={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <Link href={"https://google.com/"}>
                <a
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <Instagram
                    sx={{
                      fill: "#111",
                      fontSize:32,
                      "&:hover": {
                        fill: "#f7a02e",
                      },
                    }}
                  />
                </a>
              </Link>

              <Link href={"https://google.com/"}>
                <a
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <EmailOutlined
                    sx={{
                      fill: "#111",
                      fontSize:32,
                      "&:hover": {
                        fill: "#f7a02e",
                      },
                    }}
                  />
                </a>
              </Link>

              <Link href={"https://google.com/"}>
                <a
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <PhoneOutlined
                    sx={{
                      fill: "#111",
                      fontSize:32,
                      "&:hover": {
                        fill: "#f7a02e",
                      },
                    }}
                  />
                </a>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
