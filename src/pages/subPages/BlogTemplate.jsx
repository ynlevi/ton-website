import ContactBtn from "../../components/ContactBtn";
import blogs from "../../data/objects/blogs";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
export default function BlogTemplate() {
  const { id } = useParams();
  const data = blogs.flatMap((elm) => elm.dataArr);
  const blog = data.find((i) => i.url === id);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10vh", "30vh end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("target scroll: ", latest);
  });
  const opacity = useTransform(scrollYProgress, [1, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [1, 0], [1, 2.5]);
  const translateXRight = useTransform(
    scrollYProgress,
    (value) => `${(1 - value) * 100}%`
  );
  const translateXLeft = useTransform(
    scrollYProgress,
    (value) => `${(value - 1) * 100}%`
  );
  if (blog) {
    return (
      <>
        <Box sx={{ mt: 0 }}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent={"space-between"}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: "49%" },
                height: { xs: "35vh", md: "43vh", lg: "55vh" },
              }}
            >
              <motion.img
                {...blog.mainImg}
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  width: "100%",
                  height: "100%",
                  translateX: translateXLeft,
                  scale: scale,
                  opacity: opacity,
                }}
              />
            </Box>

            <Box
              width={{ xs: "100%", sm: "auto" }}
              sx={{
                maxWidth: { xs: "100%", md: "75%", lg: "48%" },
                m: { xs: "3vh auto", lg: " auto 0 " },
              }}
            >
              <motion.div
                style={{
                  translateX: translateXRight,
                  scale: scale,
                  opacity: opacity,
                  padding: "0 1% 0 2%",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" },
                  }}
                >
                  {blog.hl}
                </Typography>
                <Typography
                  variant="h6"
                  color={"grey"}
                  sx={{ fontSize: { xs: "1rem", sm: "1.25rem", lg: "1.5rem" } }}
                >
                  {blog.sl}
                </Typography>
              </motion.div>
            </Box>
          </Box>

          <Container sx={{ my: { xs: "6vh", lg: "11vh" } }} ref={ref}>
            <Typography variant="body1" maxWidth={600} mx={"auto"}>
              {blog.p}
            </Typography>
          </Container>
        </Box>
        <ContactBtn />
      </>
    );
  } else {
    return <h1>somthing when terribly wrong</h1>;
  }
}
