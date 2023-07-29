import { useState, useRef } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
  Popover,
  Zoom,
  Slide,
  Fab,
} from "@mui/material";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default function ContactBtn({ btnDelay }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleContactClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        // bottom: 80,
        // right: 50,
        bottom: { xs: "4vh", md: "6vh" },
        right: { xs: "6vw", md: "3vw" },
        display: "flex",
        flexDirection: "column-reverse",
        gap: 2,
        zIndex: 10,
      }}
      ref={containerRef}
    >
      <Zoom
        in={true}
        style={{
          transitionDelay: btnDelay || "800ms",
        }}
      >
        <Fab
          aria-label="add"
          color={isOpen ? "secondary" : "success"}
          onClick={handleContactClick}
        >
          {isOpen ? (
            <CloseIcon />
          ) : (
            <FontAwesomeIcon
              style={{
                transform: "scale(2.4)",
                color: "white",
              }}
              icon={faCommentDots}
            />
          )}
        </Fab>
      </Zoom>

      <Slide direction="up" in={isOpen} container={containerRef.current}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            transform: "rotate(72deg)",
          }}
        >
          <IconButton sx={{ color: "success.main" }}>
            <FontAwesomeIcon
              icon={faLine}
              style={{ transform: "scale(2.2)" }}
            />
          </IconButton>
          <IconButton>
            <FacebookIcon
              sx={{ color: "rgb(27, 116, 228)", transform: "scale(2.8)" }}
            />
          </IconButton>
          <IconButton>
            <WhatsAppIcon
              sx={{ color: "success.main", transform: "scale(2.6)" }}
            />
          </IconButton>
        </Box>
      </Slide>
    </Box>
  );
}
