import Container from "@mui/material/Container";
import CardInfo from "./CardInfo";
import { Grid, Typography, Box } from "@mui/material";
import { iPhonePrices } from "../data/objects/prices";
import { motion } from "framer-motion";
export default function CardContainer() {
  return (
    <Box sx={{ maxWidth: { xs: 430, md: "100%" }, mx: "auto", mt: 10 }}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", mass: 1 }}
      >
        <Typography variant="h3" fontWeight={100} mb={5}>
          our service:
        </Typography>
      </motion.div>
      <Grid container spacing={{ xs: 5, lg: 10 }}>
        {iPhonePrices.map((iPhonePrice, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CardInfo {...iPhonePrice} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
