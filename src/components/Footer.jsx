import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const contactAsIcons = [<InstagramIcon />, <FacebookIcon />, <TwitterIcon />];

const pages = [
  { name: "Home", href: "/home" },
  { name: "Contact", href: "/contact-as" },
  { name: "About", href: "/about" },
  { name: "Common Questions", href: "/common-questions" },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        mt: 10,
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {contactAsIcons.map((icon, index) => (
            <IconButton key={index} sx={{ color: "secondary.contrastText" }}>
              {icon}
            </IconButton>
          ))}
        </Box>

        <Typography
          variant="caption"
          bottom={"2"}
          textAlign={{ xs: "center", sm: "start" }}
        >
          Made with &#9825; by Yonathan Levi | &#169; All rights reserved
          {" " + currentYear}
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <List>
          {pages.map((page) => (
            <ListItem key={page.name}>
              <Button sx={{ color: "secondary.contrastText" }} href={page.href}>
                {page.name}
              </Button>
            </ListItem>
          ))}
        </List>
        {/* on small screen only */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Box display={"flex"} flexDirection={"column"}>
            {contactAsIcons.map((icon, index) => (
              <IconButton key={index} sx={{ color: "secondary.contrastText" }}>
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
