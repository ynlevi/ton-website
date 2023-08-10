import Container from "@mui/material/Container";
import CardInfo from "./CardInfo";
import { Grid, Typography, Box } from "@mui/material";
import cpObj from "../data/objects/cp";
import { motion } from "framer-motion";
export default function CardContainer() {
  return (
    <Container>
      <Box sx={{ maxWidth: { xs: 430, md: "100%" }, mx: "auto", mt: 10 }}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", mass: 1 }}
        >
          <Typography variant="h3" fontWeight={100} mb={5}>
            บริการของเรา
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 5, lg: 10 }}>
          {/* iphone needs to be shange to 'device' */}
          {cpObj.iPhone.map((deviceObj, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CardInfo {...deviceObj} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
