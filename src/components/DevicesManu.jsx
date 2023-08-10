import { useEffect, useRef, useState } from "react";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import DeviceItem from "./DeviceItem";
import { motion } from "framer-motion";
export default function DevicesManu({ homeObj }) {
  const deviceItem = [
    { name: "AirPods", srcName: "airpods" },
    { name: "Watch", srcName: "apple-watch" },
    { name: "iPad", srcName: "ipad" },
    { name: "iPhone", srcName: "iphone" },
    { name: "MacBook", srcName: "macbook" },
  ];
  ///motion effect:
  const containerEffec = {
    hide: {
      opacity: 0,
      x: "-100%",
    },
    visi: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Container sx={{ m: "8vh auto 16vh" }}>
      <motion.div
        variants={containerEffec}
        initial="hide"
        whileInView="visi"
        viewport={{ once: true }}
      >
        <Typography variant="h5" component={"h4"}>
          {homeObj.choose}
        </Typography>

        <Box
          mt={5}
          display={"flex"}
          flexWrap={"wrap"}
          gap={{ xs: 2, md: 4 }}
          justifyContent={"flex-start"}
        >
          {deviceItem.map((item) => {
            return <DeviceItem key={item.name} {...item} />;
          })}
        </Box>
      </motion.div>
    </Container>
  );
}
