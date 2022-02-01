import Box from "@mui/material/Box";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        padding: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
      }}
    >
      <span>Created By - </span>
      <span style={{opacity:0}}>{"_"}</span>
      <Link href="https://github.com/derciomaduna-codes">
        <a target="_blank"> Dercio Maduna</a>
      </Link>
    </Box>
  );
}
