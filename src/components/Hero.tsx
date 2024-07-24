import Navbar from "./Navbar";
import styles from "../styles/Hero.module.css";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { Variants, motion } from "framer-motion";
interface HeroProps {
  containerVariants: Variants;
}
const Hero: React.FC<HeroProps> = ({ containerVariants }) => {
  const { navToggle, handleNavToggle, isDesktop } = useContext(GlobalContext);
  return (
    <div className={styles.hero}>
      <Navbar containerVariants={containerVariants} />
      {!isDesktop && !navToggle && (
        <svg
          height="32px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          fill="white"
          className={styles.navOpen}
          onClick={handleNavToggle}
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      )}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 3 }}
      >
        Car Race
      </motion.h1>
      <motion.h4
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 4 }}
      >
        Action, Comedy . <span>1hr 56m</span>
      </motion.h4>
      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 5 }}
      >
        A skilled but disgraced former police officer is dragged back into the
        world of high-octane car chases and intense crime-fighting. When a
        ruthless international crime syndicate begins targeting top executives
        for a sinister plot involving stolen technology.
      </motion.p>
      <motion.button
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 5.5 }}
      >
        {" "}
        <svg
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          fill=""
        >
          <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
        </svg>
        Watch Now
      </motion.button>
    </div>
  );
};

export default Hero;
