import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ContactBtn from "../../components/ContactBtn";
import blogs from "../../data/objects/blogs";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
export default function BlogTemplate() {
  const { id } = useParams();
  const data = blogs.flatMap((elm) => elm.dataArr);
  const blog = data.find((i) => i.url === id);
  if (blog) {
    return (
      <Box>
        <Container sx={{ mt: "7vh" }}>
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
            <Box width={{ xs: "100%", md: "50%" }}>
              <img
                {...blog.mainImg}
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  width: "100%",
                }}
              />
            </Box>
            <Box
              width={{ xs: "100%", md: "60%" }}
              sx={{ my: "auto", ml: { xs: 0, md: 2 } }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: "2rem", sm: "4rem" },
                }}
              >
                {blog.hl}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {blog.sl}
              </Typography>
            </Box>
          </Box>
          <Box maxWidth={600} m={"5vh auto"}>
            <Typography variant="body1" mt={"4vh"}>
              {blog.p}
            </Typography>
          </Box>
        </Container>
        <ContactBtn />
      </Box>
    );
  } else {
    return <h1>somthing wenet wrong</h1>;
  }
}
