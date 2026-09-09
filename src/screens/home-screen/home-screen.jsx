import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageAnimation } from "../../components/animation/image-animation/image-animation";
import {
  containerVariants,
  itemVariants,
  sakuraEntrance1,
  sakuraEntrance2,
  sakuraEntrance3,
} from "../../functions/functions";
import { ContainerAnimation } from "../../components/animation/container-animation/container-animation";
import sakura from "./assets/sakura.png";
import "./styles/home-screen-styles.css";

export const HomePage = () => {
  return (
    <ContainerAnimation
      variants={containerVariants}
      className="home-page-container"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-decoration home-decoration--top" aria-hidden="true">
        <ImageAnimation
          src={sakura}
          variants={sakuraEntrance1}
          className="deco-sakura deco-sakura--1"
          animate={{
            y: [0, -12, 0],
            rotate: [8, 11, 8],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <div
        className="home-decoration home-decoration--bottom"
        aria-hidden="true"
      >
        <ImageAnimation
          src={sakura}
          variants={sakuraEntrance2}
          className="deco-sakura deco-sakura--2"
          animate={{
            y: [0, -12, 0],
            rotate: [8, 11, 8],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <ImageAnimation
          src={sakura}
          variants={sakuraEntrance3}
          className="deco-sakura deco-sakura--3"
          animate={{
            y: [0, -12, 0],
            rotate: [8, 11, 8],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <div className="home-content home-content--centered">
        <motion.div
          className="home-centerpiece-wrapper"
          variants={itemVariants}
        >
          <div className="home-centerpiece-halo" aria-hidden="true" />

          <motion.div
            className="home-floating-chip home-floating-chip--left"
            initial={{ opacity: 0, x: -18, scale: 0.85 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 0.6, delay: 0.3 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
          >
            <span className="chip-emoji">🤍</span>
            <span>Hand-Hooked</span>
          </motion.div>

          <motion.div
            className="home-icon-orb"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              className="home-orbit-icon home-orbit-icon--tl"
              animate={{
                y: [0, -5, 0],
                rotate: [-8, 8, -8],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🤍
            </motion.span>

            <motion.span
              className="home-orbit-icon home-orbit-icon--tr"
              animate={{
                y: [0, -7, 0],
                rotate: [5, -10, 5],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              ✨
            </motion.span>

            <motion.span
              className="home-orbit-icon home-orbit-icon--bl"
              animate={{
                y: [0, 6, 0],
                rotate: [-6, 6, -6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              🎀
            </motion.span>

            <motion.span
              className="home-orbit-icon home-orbit-icon--br"
              animate={{
                y: [0, 5, 0],
                rotate: [8, -6, 8],
                scale: [1, 1.14, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
            >
              🌸
            </motion.span>

            <motion.div
              className="home-main-icon-wrap"
              animate={{
                scale: [1, 1.06, 1],
                rotate: [-2, 2, -2],
              }}
              transition={{
                scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span
                className="home-main-icon"
                role="img"
                aria-label="Handcrafted Fuzzy Bouquet"
              >
                💐
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-floating-chip home-floating-chip--right"
            initial={{ opacity: 0, x: 18, scale: 0.85 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: { duration: 0.6, delay: 0.4 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              },
            }}
          >
            <span className="chip-emoji">✨</span>
            <span>Under ₱500</span>
          </motion.div>
        </motion.div>

        <motion.div className="home-hero-badge" variants={itemVariants}>
          🌸 Handmade Fuzzy Bouquets
        </motion.div>

        <motion.h1 className="home-hero-title" variants={itemVariants}>
          AMor Fuzzia
        </motion.h1>

        <motion.p className="home-hero-tagline" variants={itemVariants}>
          Everlasting fuzzy blooms, hand-hooked with love for every special
          occasion
        </motion.p>

        <motion.div
          className="home-actions home-actions--centered"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/bouquet" className="btn btn--primary">
              See the bouquet 🌸
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/about" className="btn btn--secondary">
              Our story 📖
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </ContainerAnimation>
  );
};
