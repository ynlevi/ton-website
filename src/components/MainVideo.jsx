import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
export default function MainVideo() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ translateX: "0" }}
        animate={{ translateX: "+100%" }}
        transition={{ ease: "easeOut", duration: 0.9 }}
        style={{
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "91vh",
            bgcolor: "secondary.main",
          }}
        />
      </motion.div>
      <video
        src={require("../data/video/mainVideo.mp4")}
        autoPlay
        loop
        muted
        style={{
          width: "100vw",
          height: "91vh",
          objectPosition: "center",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
    </Box>
  );
}
