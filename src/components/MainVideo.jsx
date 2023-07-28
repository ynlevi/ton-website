import { Box } from "@mui/material";
import { motion } from "framer-motion";
export default function MainVideo() {
  return (
    <div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "+100%" }}
        transition={{ ease: "easeOut", duration: 0.9 }}
        style={{
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Box
          sx={{ width: "100vw", height: "91vh", bgcolor: "secondary.light" }}
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
          position: "absolute",
          zIndex: -2,
        }}
      />
    </div>
  );
}
