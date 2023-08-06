import { motion } from "framer-motion";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <motion.div
      style={{
        position: "sticky",
        top: "0",
        right: "0",
        zIndex: 10,
      }}
    >
      <NavBar />
    </motion.div>
  );
}
