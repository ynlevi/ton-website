import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer";
import MainDescription from "../components/MainDescription";
import ContactBtn from "../components/ContactBtn";
import MainVideo from "../components/MainVideo";
import DevicesManu from "../components/DevicesManu.jsx";
import homeObj from "../data/objects/home";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box>
      <MainVideo />
      <MainDescription homeObj={homeObj} />
      <DevicesManu homeObj={homeObj} />
      <ContactBtn btnDelay={"2s"} />
    </Box>
  );
}
