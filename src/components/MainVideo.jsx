import { Box } from "@mui/material";
export default function MainVideo() {
  return (
    <video
<<<<<<< HEAD
      src={require("../data/video/mainVideo.mp4")}
=======
      src={"./static/video/mainVideo.mp4"}
>>>>>>> origin/main
      autoPlay
      loop
      muted
      style={{
        width: "100vw",
        position: "absolute",
        zIndex: -1,
        height: "88vh",
        objectPosition: "center",
        objectFit: "cover",
      }}
    />
  );
}
