import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function MainDescription() {
  let secGrow = 0;
  return (
    <Box sx={{ my: { xs: 15, sm: 25 }, color: "primary.contrastText" }}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0 }} // Adding delay here
      >
        <Typography variant="h2" fontWeight={400}>
          Ton repairs.
        </Typography>
        <Typography variant="h2" fontWeight={400}>
          {" "}
          the best one in town.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 1 }} // Adding delay here
      >
        <Typography variant="h5" mt={5} maxWidth={600}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odit
          excepturi asperiores consectetur esse eos autem tempore, officiis,
          deleniti corrupti tenetur laboriosam, commodi voluptate expedita.
          Natus est repellendus aperiam sunt.
        </Typography>
      </motion.div>
    </Box>
  );
}
