import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import mainVideo from "../data/video/mainVideo.mp4";
import ReactPlayer from "react-player";
import { Opacity } from "@mui/icons-material";
export default function MainVideo() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ translateX: "0" }}
        animate={{ translateX: "+100%" }}
        transition={{ type: "just", duration: 0.9 }}
        style={{
          zIndex: 1,
          position: "absolute",
        }}
      ></motion.div>
      <Box
        sx={{
          width: "100vw",
          height: "91vh",
          bgcolor: "secondary.main",
          opacity: 0.7,
        }}
      >
        <ReactPlayer
          url={mainVideo}
          className={"main-video"}
          playing
          loop
          muted
          playsinline
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </Box>
  );
}
