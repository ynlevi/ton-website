import { useState } from "react";
import {
  Paper,
  Typography,
  Collapse,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactBtn from "../components/ContactBtn";
import CQLink from "./CQLInk";
import Blog from "../pages/Blog";
export default function CommonQuestionsContent({ sections }) {
  const [isChosen, setIsChosen] = useState([]);
  const toggleExpandMore = (currentIndex) => {
    setIsChosen((prev) => {
      const isExpanded = prev.includes(currentIndex);
      return isExpanded
        ? prev.filter((index) => index !== currentIndex)
        : [...prev, currentIndex];
    });
  };
  return (
    <Paper elevation={5} sx={{ mt: "5vh", p: 0 }}>
      {sections.map((sec, i) => (
        <>
          <Box
            key={sec.secName}
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
            <CQLink data={sec.dataArr} />
          </Collapse>
          {i < sections.length - 1 && <Divider />}
        </>
      ))}
    </Paper>
  );
}
