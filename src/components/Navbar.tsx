import styles from "../styles/Navbar.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Variants, motion, AnimatePresence } from "framer-motion";
interface NavProps {
  containerVariants: Variants;
}

const svgVariants = {
  initial: { rotate: -360, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    trasition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
const Navbar: React.FC<NavProps> = ({ containerVariants }) => {
  const { navToggle, handleNavToggle, isDesktop } = useContext(GlobalContext);
  return (
    <>
      <AnimatePresence>
        <motion.nav
          className={
            isDesktop ? styles.navbar : navToggle ? styles.navMob : styles.off
          }
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
        >
          {!isDesktop && (
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.navClose}
              onClick={handleNavToggle}
            >
              <title />
              <path
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"
                fill="#f5f5f5"
              />
            </svg>
          )}
          <motion.svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logo}
            variants={svgVariants}
            initial="initial"
            animate="visible"
          >
            <rect fill="none" height="256" width="256" />
            <motion.path
              d="M106.6,152.1l-8.7,9.8a47.9,47.9,0,1,1,0-67.8l60.2,67.8a47.9,47.9,0,1,0,0-67.8l-8.7,9.8"
              fill="none"
              stroke=" rgb(199, 88, 88)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              variants={pathVariants}
              initial="initial"
              animate="visible"
            />
          </motion.svg>
          <ul>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>New & Popular</li>
          </ul>

          {/* using ul and li because they are not gonna  be functional links so just placholders */}
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
