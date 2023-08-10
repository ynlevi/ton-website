import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogTemplate from "./pages/subPages/BlogTemplate";
import CPTemplate from "./pages/subPages/CPTemplate";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<BlogTemplate />} />
        <Route exact path="/commen-problems/:device" element={<CPTemplate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
