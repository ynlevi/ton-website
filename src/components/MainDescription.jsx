import { Box, Typography } from "@mui/material";

export default function MainDescription() {
  return (
    <Box sx={{ my: { xs: 15, sm: 20 }, color: "primary.contrastText" }}>
      <Typography variant="h2" fontWeight={400}>
        Ton repairs.
      </Typography>
      <Typography variant="h2" fontWeight={400}>
        {" "}
        the best one in town.
      </Typography>
      <Typography variant="h5" mt={5} maxWidth={600}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odit
        excepturi asperiores consectetur esse eos autem tempore, officiis,
        deleniti corrupti tenetur laboriosam, commodi voluptate expedita. Natus
        est repellendus aperiam sunt.
      </Typography>
    </Box>
  );
}
