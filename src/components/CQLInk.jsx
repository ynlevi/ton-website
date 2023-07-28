import {
  Box,
  Link,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Blog from "../pages/Blog";
export default function CQLink({ data }) {
  return (
    <Box bgcolor={"secondary.light"} py={1} px={{ xs: 1, md: 3 }}>
      {data.map((dObj) => (
        <Link
          key={dObj.key}
          sx={{ cursor: "pointer" }}
          href={`/#/blog/${dObj.url}`}
          color={"primary"}
        >
          <Card
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
                {dObj.hl.charAt(0).toUpperCase() + dObj.hl.slice(1)}
              </Typography>
            </CardContent>

            <CardMedia
              image={dObj.mainImg.src}
              title={dObj.mainImg.alt}
              sx={{ height: 100, width: "40%" }}
            />
          </Card>
        </Link>
      ))}
    </Box>
  );
}
