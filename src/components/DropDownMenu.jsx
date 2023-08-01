import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Link } from "react-router-dom";

export default function DropDownMenu({ pages }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerIsOpen((prev) => !prev);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setDrawerIsOpen((prev) => !prev);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerIsOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Box
          sx={{
            height: "100%",
            color: "primary.light",
            bgcolor: "secondary.light",
            width: "60vw",
          }}
        >
          <List>
            <ListItem>
              <ListItemButton
                component="a"
                href="/ton-website/#/"
                onClick={handleClick}
              >
                <PhoneIphoneIcon />
              </ListItemButton>
            </ListItem>
            <Divider />
            {pages.name.map((page, index) => (
              <ListItem key={page}>
                <Link
                  to={pages.href[index]}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <ListItemButton
                    // href={"/ton-website/#" + }
                    sx={{ color: "primary.main" }}
                    onClick={handleClick}
                  >
                    <ListItemText primary={page}></ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
