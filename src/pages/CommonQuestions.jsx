import CommonQuestionsContent from "../components/CommonQustionsContent";
import { Container, Typography, Card, Paper, Collapse } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ContactBtn from "../components/ContactBtn";
export default function CommonQuestions() {
  const commonQuestions = [
    {
      headLine: "Fix a problem",
      content: [
        [
          "how to fix a broken camera",
          "https://images.ctfassets.net/16nm6vz43ids/5PlF2DxT3CllBEcczibIyC/7184961b3235bed86533f0ed4aaa419a/Fix_broken_iPhone_camera.jpg?w=1440&h=810&q=65&fm=webp",
        ],
        [
          "My keybord is stuck. what to do??",
          "https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        ],
      ],
    },
    {
      headLine: "Tips",
      content: [
        [
          "how to save bettery life",
          "https://images.ctfassets.net/16nm6vz43ids/5PlF2DxT3CllBEcczibIyC/7184961b3235bed86533f0ed4aaa419a/Fix_broken_iPhone_camera.jpg?w=1440&h=810&q=65&fm=webp",
        ],
        [
          "how to choose the right repair company",
          "https://images.ctfassets.net/16nm6vz43ids/5PlF2DxT3CllBEcczibIyC/7184961b3235bed86533f0ed4aaa419a/Fix_broken_iPhone_camera.jpg?w=1440&h=810&q=65&fm=webp",
        ],
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <Container
        sx={{ mt: "10vh", mb: "15vh", width: { xs: "100vw", md: 750 } }}
      >
        <Typography variant="h3" component={"h2"} fontWeight={300}>
          Common Questions
        </Typography>
        <CommonQuestionsContent sections={commonQuestions} />
      </Container>
      <Footer />
      <ContactBtn />
    </>
  );
}
