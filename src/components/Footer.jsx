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
const contactAsIcons = [<InstagramIcon />, <FacebookIcon />, <TwitterIcon />];

const pages = [
  { name: "Home", href: "/home" },
  { name: "Contact", href: "/contact-as" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        mt: 10,
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        p: { xs: "10px 10px 30px", sm: 4 },
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
          mt={{ xs: "5vh", sm: "24vh" }}
        >
          Made with &#9825; by Yonathan Levi | &#169; All rights reserved
          {" " + currentYear}
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <List sx={{ py: 0 }}>
          {pages.map((page) => (
            <ListItem key={page.name} sx={{ px: 0 }}>
              <Button
                sx={{
                  color: "secondary.contrastText",
                  justifyContent: "start",
                }}
                href={"/ton-website/#" + page.href}
                size="small"
              >
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
