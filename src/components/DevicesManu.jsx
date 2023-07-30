import { useEffect, useRef, useState } from "react";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import DeviceItem from "./DeviceItem";
export default function DevicesManu() {
  const deviceItem = [
    { name: "AirPods", srcName: "airpods" },
    { name: "Watch", srcName: "apple-watch" },
    { name: "iPad", srcName: "ipad" },
    { name: "iPhone", srcName: "iphone" },
    { name: "MacBook", srcName: "macbook" },
  ];

  const targetRef = useRef(null);
  const [elmIsShow, setElmIsShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setElmIsShow(entry.isIntersecting));
    });
    targetRef.current && observer.observe(targetRef.current);
  }, []);
  let delay = 0;
  return (
    <Container sx={{ m: "8vh auto 16vh" }}>
      <Typography variant="h5" component={"h4"}>
        choose your device:
      </Typography>
      <Box
        mt={5}
        display={"flex"}
        flexWrap={"wrap"}
        ref={targetRef}
        gap={{ xs: 2, md: 4 }}
        justifyContent={"flex-start"}
      >
        {deviceItem.map((item) => {
          delay += 100;
          return (
            <DeviceItem
              key={item.name}
              {...item}
              delay={delay}
              elmIsShow={elmIsShow}
            />
          );
        })}
      </Box>
    </Container>
    // </Container>
  );
}
