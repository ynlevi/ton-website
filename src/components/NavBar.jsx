import DropDownMenu from "./DropDownMenu";
import NavLinksItem from "./NavLinksItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { motion, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  //add progress line on blog/:name page only
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const isOnBlogPage = location.pathname.includes("/blog/");

  const pages = {
    name: ["Home", "Contact", "About", "Blog"],
    href: ["/", "/contact-as", "/about", "/blog"],
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "primary.light", p: 0 }}>
      <Toolbar
        sx={{
          m: { xs: "2.5vh 0", md: "3vh 10vw 2vw 8vw" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          href="/ton-website/#/"
          variant="outline"
          startIcon={<PhoneIphoneIcon />}
          size="large"
          sx={{ textTransform: "capitalize" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <Typography variant="h6">Ton repairs</Typography>
        </Button>
        <Box>
          {/* hamburger btn on mobile screens */}
          <DropDownMenu pages={pages} />
          {/* nav links on large screens */}
          <NavLinksItem pages={pages} />
        </Box>
      </Toolbar>

      {/* track scroll */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: "#F87474",
          visibility: isOnBlogPage ? "visible" : "hidden",
        }}
      />
    </AppBar>
  );
}
