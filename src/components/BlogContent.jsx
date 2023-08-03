import { useState } from "react";
import {
  Paper,
  Typography,
  Collapse,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BlogLink from "./BlogLink";
import Blog from "../pages/Blog";
export default function BlogContent({ sections }) {
  //initial placement - array of index of all sections
  const [isChosen, setIsChosen] = useState(sections.map((_, index) => index));
  const toggleExpandMore = (currentIndex) => {
    console.log(isChosen);
    setIsChosen((prev) => {
      const isExpanded = prev.includes(currentIndex);
      return isExpanded
        ? prev.filter((index) => index !== currentIndex)
        : [...prev, currentIndex];
    });
  };

  return (
    <Paper elevation={5} sx={{ mt: "5vh", p: 0, borderRadius: 5 }}>
      {sections.map((sec, i) => (
        <div key={sec.secName}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              py: 2,
              px: 4,
            }}
            onClick={() => toggleExpandMore(i)}
          >
            <Typography variant="h6" sx={{ cursor: "pointer" }}>
              {sec.secName}
            </Typography>
            <IconButton>
              <ExpandMoreIcon
                sx={{
                  transform: isChosen.includes(i)
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </IconButton>
          </Box>
          <Collapse in={isChosen.includes(i)}>
            <BlogLink data={sec.dataArr} isLastSec={i >= sections.length - 1} />
          </Collapse>
          {i < sections.length - 1 && <Divider />}
        </div>
      ))}
    </Paper>
  );
}
