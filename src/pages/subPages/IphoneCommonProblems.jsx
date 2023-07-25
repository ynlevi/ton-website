import NavBar from "../../components/NavBar";
import CardContainer from "../../components/CardContainer";
import MainDescription from "../../components/MainDescription";
import Footer from "../../components/Footer";
import ContactBtn from "../../components/ContactBtn";
import Container from "@mui/material/Container";
export default function IphoneCommonProblems() {
  return (
    <div className="iphone-common-problems">
      <NavBar />
      <Container>
        <CardContainer />
      </Container>
      <Footer />
      <ContactBtn />
    </div>
  );
}
