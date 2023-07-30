import { Box, Button, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
export default function NavLinksItem({ pages }) {
  const location = useLocation();
  const castumActive = {
    "::after": {
      content: "''",
      position: "absolute",
      height: 2,
      bgcolor: "secondary.main",
      width: "calc(100% - 32px)",
      bottom: 0,
    },
  };

  return (
    <nav>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: "2rem",
          padding: 0,
        }}
      >
        {pages.name.map((page, index) => (
          <NavLink
            exact="true"
            to={pages.href[index]}
            onClick={() => window.scrollTo(0, 0)}
            key={index}
          >
            {({ isActive }) => (
              <Typography
                key={page}
                sx={{
                  display: "inline-block",
                  pb: "2px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  fontSize: "small",
                  fontWeight: "500",
                  letterSpacing: 1,
                  color: "primary.contrastText",
                  overflow: "hidden",
                  position: "relative",
                  cursor: isActive ? "default" : "pointer",
                  "::after": {
                    content: "''",
                    position: "absolute",
                    height: "2px",
                    bgcolor: "secondary.main",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: isActive ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform .35s ease-out",
                  },
                  "&:hover": {
                    "::after": {
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                {page}
              </Typography>
            )}
          </NavLink>
        ))}
      </Box>
    </nav>
  );
}
