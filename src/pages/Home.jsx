import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer";
import MainDescription from "../components/MainDescription";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";
import MainVideo from "../components/MainVideo";
import DevicesManu from "../components/DevicesManu.jsx";
import { Box } from "@mui/material";

import Container from "@mui/material/Container";
import zIndex from "@mui/material/styles/zIndex";
export default function Home() {
  return (
    <Box>
      <NavBar />
      <MainVideo />
      <Container>
        <MainDescription />
        <DevicesManu />
      </Container>
      <Footer />
      <ContactBtn btnDelay={"2s"} />
    </Box>
  );
}
