import DropDownMenu from "./DropDownMenu";
import NavLinksItem from "./NavLinksItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export default function NavBar() {
  const pages = {
    name: ["Home", "Contact", "About", "Common Questions"],
    href: ["/", "/contact-as", "/about", "/common-questions"],
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "primary.light" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 0,
        }}
      >
        <Button
          href="/"
          variant="outline"
          startIcon={<PhoneIphoneIcon />}
          size="large"
          sx={{ textTransform: "capitalize", my: 1.5 }}
        >
          <Typography variant="h6" py={1}>
            Ton repairs
          </Typography>
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
