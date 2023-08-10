import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import CardInfo from "../../components/CardInfo";
import cpObj from "../../data/objects/cp";
import ContactBtn from "../../components/ContactBtn";
export default function CPTemplate() {
  const { device } = useParams();
  console.log(device);
  if (cpObj.hasOwnProperty(device)) {
    return (
      <>
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
              {console.log(device)}
              {cpObj[device].map((deviceObj, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <CardInfo {...deviceObj} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <ContactBtn />
      </>
    );
  } else {
    return <h1>not such device name exist here</h1>;
  }
}
