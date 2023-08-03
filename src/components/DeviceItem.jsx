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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function DeviceItem({ name, srcName }) {
  const itemsEffect = {
    hide: { y: "-100%", x: "-100%", filter: "blur(20px)", opacity: 0 },
    visi: { y: 0, x: 0, filter: "blur(0)", opacity: 1 },
  };
  return (
    <motion.div
      variants={itemsEffect}
      viewport={{ once: true }}
      style={{
        flex: "1 1 0",
        flexBasis: "100px",
        maxWidth: "30%",
      }}
    >
      <Link to={`iphone-common-problems`}>
        <Tooltip title={name}>
          <Button
            onClick={() => window.scrollTo(0, 0)}
            sx={{
              borderRadius: "inherit",
              p: 0,
              borderRadius: 4,
              boxShadow: 12,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              src={require(`../data/images/devices/${srcName}.jpg`)}
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
      </Link>
    </motion.div>
  );
}
