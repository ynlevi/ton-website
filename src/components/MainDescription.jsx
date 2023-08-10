import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function MainDescription({ hl1, hl2, p }) {
  let secGrow = 0;
  const textFromLeft = {
    hide: { x: "-100%", opacity: 0 },
    visi: (ms) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: ms,
      },
    }),
  };

  return (
    <Box
      sx={{
        color: "primary.contrastText",
        position: "absolute",
        zIndex: 2,
        top: "30vh",
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <motion.div
          variants={textFromLeft}
          initial="hide"
          animate="visi"
          custom={0.3}
        >
          <Typography
            variant="h2"
            fontWeight={400}
            fontSize={{ xs: "2rem", sm: "4rem" }}
          >
            {hl1}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={400}
            fontSize={{ xs: "2rem", sm: "4rem" }}
          >
            {hl2}
          </Typography>

          <motion.div variants={textFromLeft} custom={1}>
            <Typography
              variant="h5"
              mt={5}
              maxWidth={600}
              fontSize={{ xs: "1rem", sm: "1.5rem" }}
            >
              {p}
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
