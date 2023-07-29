import DropDownMenu from "./DropDownMenu";
import NavLinksItem from "./NavLinksItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { motion, useScroll } from "framer-motion";
export default function NavBar() {
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
          {/* nav links on big screens */}
          <NavLinksItem pages={pages} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
