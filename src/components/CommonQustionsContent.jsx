import { useState } from "react";
import {
  Paper,
  Typography,
  Collapse,
  Box,
  IconButton,
  Divider,
  Link,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactBtn from "../components/ContactBtn";
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
    <Paper elevation={3} sx={{ mt: "5vh", p: 0 }}>
      {sections.map((sec, i) => (
        <Box key={i}>
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
              {sec.headLine}
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
            <Box bgcolor={"secondary.light"} py={1} px={{ xs: 1, md: 3 }}>
              {sec.content.map(([link, img], j) => (
                <Link
                  sx={{ cursor: "pointer" }}
                  href="/common-questions/how-to-fix-a-broken-camera"
                  color={"text.secondary"}
                >
                  <Card
                    key={j}
                    sx={{
                      display: "flex ",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        my: "auto",
                        color: "secondary.main",
                        width: "60% ",
                      }}
                    >
                      <Typography variant="h6">
                        {/* capitalize the first letter of the sentence */}
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                      </Typography>
                    </CardContent>

                    <CardMedia
                      image={img}
                      title="blbla"
                      sx={{ height: 100, width: "40%" }}
                    />
                  </Card>
                </Link>
              ))}
            </Box>
          </Collapse>
          {i < sections.length - 1 && <Divider />}
        </Box>
      ))}
    </Paper>
  );
}
