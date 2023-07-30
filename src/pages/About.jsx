import { Box } from "@mui/material";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Box
        sx={{ border: "1px solid red", height: 400, width: 400, mx: "auto" }}
      >
        <h1>Hi mom</h1>
      </Box>

      <Box
        sx={{ border: "1px solid red", height: 400, width: 400, mx: "auto" }}
      >
        <h1>Hi dad</h1>
      </Box>
      <Box
        sx={{ border: "1px solid red", height: 400, width: 400, mx: "auto" }}
      >
        <h1>Hi dad</h1>
      </Box>
    </>
  );
}
