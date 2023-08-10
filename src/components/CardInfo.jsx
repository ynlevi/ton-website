import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Box,
  Collapse,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Link,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { motion } from "framer-motion";
import blogs from "../data/objects/blogs";

export default function CardInfo({ headLine, links, priceTable, imgPath, p }) {
  const [isExpand, setIsExpand] = useState(false);

  const toggleExpandMore = () => {
    setIsExpand((prev) => !prev);
  };
  const getHl = (lk) => {
    const data = blogs
      .flatMap((elm) => elm.dataArr)
      .find((i) => `/ton-website/#/blog/${i.url}` === lk).hl;
    /* capitalize the first letter of the sentence */
    return data.charAt(0).toUpperCase() + data.slice(1);
  };
  // motion effects

  const castumMotion = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { ease: "easeOut", duration: 0.8 },
    variants: {
      visible: { y: 0, opacity: 1 },
      hidden: { y: 100, opacity: 0 },
    },
  };
  // styles
  const castumCard = {
    p: 0,
    mb: "3%",
    width: "90%",
    mx: "auto",
  };
  const castumHeadCell = {
    fontSize: 11,
    fontWeight: 600,
  };
  const castumBodyCell = {
    sx: { fontSize: 11 },
    align: "right",
  };

  return (
    <motion.div {...castumMotion}>
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 23,
        }}
      >
        <motion.div {...castumMotion}>
          <CardMedia
            image={
              imgPath ||
              "https://images.unsplash.com/photo-1566492736953-f50ed208fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MyUzQTJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
            }
            alt="lorn-img"
            component="img"
            sx={{
              ...castumCard,
              mt: "5%",
              borderRadius: 4,
              border: ".4px solid lightgray",
            }}
          />
        </motion.div>
        <motion.div
          {...castumMotion}
          transition={{ ...castumMotion.transition, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "40vh",
            overflow: "scroll",
          }}
        >
          <CardContent sx={{ ...castumCard }}>
            <Typography variant="h5" pr={6} mt={2} mb={1}>
              {headLine}
            </Typography>
            <Typography>{p}</Typography>
          </CardContent>
          <CardContent
            sx={{
              ...castumCard,
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                my: "auto",
              }}
              onClick={toggleExpandMore}
              endIcon={
                <ExpandMoreIcon
                  sx={{
                    transform: !isExpand ? "rotate(0deg)" : "rotate(180deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              }
            >
              ราคาโดยประมาณ
            </Button>
          </CardContent>
        </motion.div>
        <Collapse in={isExpand}>
          <CardContent sx={{ color: "textSecondary" }}>
            <Box sx={{ overflowX: "auto" }}>
              {links &&
                links.map((link, i) => (
                  <Link
                    key={i}
                    variant="body1"
                    component={"a"}
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                      display: "block",
                    }}
                    href={link}
                    color={"secondary"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {getHl(link)}
                  </Link>
                ))}
              {priceTable ? (
                <Table sx={{ minWidth: 200 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell sx={{ ...castumHeadCell }} align="right">
                        Basic Model
                      </TableCell>
                      <TableCell sx={{ ...castumHeadCell }} align="right">
                        Pro
                      </TableCell>
                      <TableCell sx={{ ...castumHeadCell }} align="right">
                        Pro Max
                      </TableCell>
                      <TableCell sx={{ ...castumHeadCell }} align="right">
                        Plus
                      </TableCell>
                      <TableCell sx={{ ...castumHeadCell }} align="right">
                        Mini
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {priceTable.map((obj, i) => (
                      <TableRow key={i}>
                        <TableCell sx={{ fontSize: 11, whiteSpace: "nowrap" }}>
                          {obj.model}
                        </TableCell>
                        <TableCell {...castumBodyCell}>
                          {obj.price.basic}
                        </TableCell>
                        <TableCell {...castumBodyCell}>
                          {obj.price.pro}
                        </TableCell>
                        <TableCell {...castumBodyCell}>
                          {obj.price.max}
                        </TableCell>
                        <TableCell {...castumBodyCell}>
                          {obj.price.plus}
                        </TableCell>
                        <TableCell {...castumBodyCell}>
                          {obj.price.mini}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p>not price define. please contact as.</p>
              )}
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </motion.div>
  );
}
