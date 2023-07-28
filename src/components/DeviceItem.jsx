import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
} from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
export default function DeviceItem({ name, srcName, delay, elmIsShow }) {
  const castumHidden = {
    opacity: 0,
    filter: "blur(20px)",
    transform: "translateX(-100vh)",
  };
  const castumShow = {
    transition: "all 500ms",
    transitionDelay: delay + "ms",
    opacity: 1,
    filter: "blur(0)",
    transform: "translateX(0)",
  };
  return (
    <Box sx={elmIsShow ? castumShow : castumHidden}>
      <Tooltip title={name}>
        <Button
          sx={{
            borderRadius: "inherit",
            p: 0,
            width: { xs: 90, sm: 180 },
            minWidth: "90px",
            borderRadius: 4,
            boxShadow: 12,
            flexGrow: 1,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
<<<<<<< HEAD
          href={`/#/iphone-common-problems`}
        >
          <img
            src={require(`../data/images/devices/${srcName}.jpg`)}
=======
          href={`/${srcName}-common-problems`}
        >
          <img
            src={`./static/images/devices/${srcName}.jpg`}
>>>>>>> origin/main
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "inherit",
            }}
          />
        </Button>
      </Tooltip>
    </Box>
  );
}
