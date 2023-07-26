import "./App.css";
import { Route, Routes, Link, Router, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import IphoneCommonProblems from "./pages/subPages/IphoneCommonProblems";
import About from "./pages/About";
import CommonQuestions from "./pages/CommonQuestions";
import HowToFixABrokenCamera from "./pages/subPages/HowToFixABrokenCamera";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3AB0FF",
      contrastText: "#F9F2ED",
    },
    secondary: {
      light: "#F9F2ED",
      main: "#F87474",
      contrastText: "#F9F2ED",
    },
    success: {
      main: "#00f900",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/home/iphone-common-problems"
          element={<IphoneCommonProblems />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/common-questions" element={<CommonQuestions />} />
        <Route
          exact
          path="/common-questions/how-to-fix-a-broken-camera"
          element={<HowToFixABrokenCamera />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
