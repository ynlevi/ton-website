import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer";
import MainDescription from "../components/MainDescription";
import ContactBtn from "../components/ContactBtn";
import MainVideo from "../components/MainVideo";
import DevicesManu from "../components/DevicesManu.jsx";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box>
      <MainVideo />
      <MainDescription />
      <DevicesManu />
      <ContactBtn btnDelay={"2s"} />
    </Box>
  );
}
