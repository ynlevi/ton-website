import DropDownMenu from "./DropDownMenu";
import NavLinksItem from "./NavLinksItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
    <AppBar sx={{ bgcolor: "primary.light", p: 0, position: "relative" }}>
      <Toolbar
        variant="dense"
        sx={{
          m: { xs: "2vh 0", md: "2.5vh 10vw 2.5vh 8vw" },
          display: "flex",
          justifyContent: "space-between",
          minHeight: "fit-container",
        }}
      >
        <Link
          to={"/"}
          sx={{ textDecoration: "none", textDecorationLine: "none" }}
        >
          <Button
            startIcon={<PhoneIphoneIcon />}
            size="small"
            sx={{
              textTransform: "capitalize",
              color: "primary.contrastText",
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Typography variant="h6">Ton repairs</Typography>
          </Button>
        </Link>
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
