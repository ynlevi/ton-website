import NavBar from "../components/NavBar";
import MainDescription from "../components/MainDescription";
import ContactBtn from "../components/ContactBtn";
import MainVideo from "../components/MainVideo";
import DevicesManu from "../components/DevicesManu.jsx";
import { Box } from "@mui/material";
import homeObj from "../data/objects/home";

export default function Home() {
  return (
    <Box>
      <MainVideo />
      {console.log(homeObj)}
      <MainDescription {...homeObj} />
      <DevicesManu choose={homeObj.choose} />
      <ContactBtn btnDelay={"2s"} />
    </Box>
  );
}
