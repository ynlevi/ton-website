import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IphoneCommonProblems from "./pages/subPages/IphoneCommonProblems";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogTemplate from "./pages/subPages/BlogTemplate";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactBtn from "./components/ContactBtn";
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
      <NavBar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route
          exact
          path="/iphone-common-problems"
          element={<IphoneCommonProblems />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<BlogTemplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
