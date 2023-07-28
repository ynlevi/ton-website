import CommonQuestionsContent from "../components/CommonQustionsContent";
import { Container, Typography, Card, Paper, Collapse } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ContactBtn from "../components/ContactBtn";
import blogs from "../data/objects/blogs";
import Blog from "./Blog";
export default function CommonQuestions() {
  return (
    <>
      <NavBar />
      <Container
        sx={{ mt: "10vh", mb: "15vh", width: { xs: "100vw", md: 750 } }}
      >
        <Typography variant="h3" component={"h2"} fontWeight={300}>
          Common Questions
        </Typography>
        <CommonQuestionsContent sections={blogs} />
      </Container>
      <Footer />
      <ContactBtn />
    </>
  );
}
