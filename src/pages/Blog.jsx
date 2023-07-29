import BlogContent from "../components/BlogContent";
import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";
import blogs from "../data/objects/blogs";
export default function Blog() {
  return (
    <>
      <Container
        sx={{ mt: "10vh", mb: "15vh", width: { xs: "100vw", md: 750 } }}
      >
        <Typography variant="h3" component={"h2"} fontWeight={300}>
          My Blog
        </Typography>
        <BlogContent sections={blogs} />
        <ContactBtn />
      </Container>
    </>
  );
}
