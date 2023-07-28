import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IphoneCommonProblems from "./pages/subPages/IphoneCommonProblems";
import About from "./pages/About";
import CommonQuestions from "./pages/CommonQuestions";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import blogs from "./data/objects/blogs";
// import { Switch } from "@mui/material";
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route
          exact
          path="/iphone-common-problems"
          element={<IphoneCommonProblems />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/common-questions" element={<CommonQuestions />} />
        <Route exact path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
