import ContactBtn from "../../components/ContactBtn";
import blogs from "../../data/objects/blogs";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
export default function BlogTemplate() {
  const { id } = useParams();
  const data = blogs.flatMap((elm) => elm.dataArr);
  const blog = data.find((i) => i.url === id);
  const [dynamicSize, setDynamicSize] = useState(1);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["115px end", "-100px 115px"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("target scroll: ", latest);
    setDynamicSize(latest === 1 ? 0.001 : 1 - latest);
    // console.log("dynamicSize: ", dynamicSize);
  });

  if (blog) {
    return (
      <>
        {/* //////todelete */}

        {/* <div
          style={{
            backgroundColor: "red",
            height: 400,
            width: 400,
            marginTop: 800,
            marginBottom: 100,
          }}
        ></div> */}

        {/* //////// */}
        <Box sx={{ mt: "7vh" }}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
          >
            <Box
              width={{ xs: "100%", md: "auto" }}
              sx={{ maxWidth: "49vw", maxHeight: "50vh" }}
            >
              <img
                {...blog.mainImg}
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  width: `${dynamicSize * 100}%`,
                  height: "100%",
                  // zoom: dynamicSize * 0.7,
                  opacity: dynamicSize,
                }}
              />
            </Box>

            <Box
              width={{ xs: "100%", md: "auto" }}
              sx={{
                maxWidth: "50vw",
                my: "auto",
                ml: { xs: 0, md: 2 },
                display: "flex",
                flexDirection: "column",
                zoom: dynamicSize,
                opacity: dynamicSize,

                // alignItems: "end",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: "2rem", sm: "4rem" },
                }}
              >
                {blog.hl}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {blog.sl}
              </Typography>
            </Box>
          </Box>

          <Container sx={{ my: "11vh" }} ref={ref}>
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
