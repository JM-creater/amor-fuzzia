import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ContainerAnimation } from "../../components/animation/container-animation/container-animation";
import { ImageAnimation } from "../../components/animation/image-animation/image-animation";
import { containerVariants, itemVariants } from "../../functions/functions";
import { CONTACT_INFO, HIGHLIGHT_FEATURES, ORDERING_STEPS } from "../../constants/constants";
import flowerImg from "../bouquet-screen/assets/flower.png";
import sakuraImg from "../home-screen/assets/sakura.png";
import "./styles/about-screen-styles.css";

export const AboutScreen = () => {
  return (
    <ContainerAnimation
      className="about-screen-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="about-hero">
        <ImageAnimation
          src={sakuraImg}
          alt=""
          className="about-hero-deco about-deco--top-left"
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{
            opacity: 0.75,
            scale: 1,
            rotate: [-15, -10, -15],
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 1, ease: "easeOut" },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <ImageAnimation
          src={flowerImg}
          alt=""
          className="about-hero-deco about-deco--top-right"
          initial={{ opacity: 0, scale: 0.85, rotate: 25 }}
          animate={{
            opacity: 0.8,
            scale: 1,
            rotate: [25, 30, 25],
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
            scale: { duration: 1, delay: 0.2, ease: "easeOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <ImageAnimation
          src={sakuraImg}
          alt=""
          className="about-hero-deco about-deco--bottom-right"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{
            opacity: 0.65,
            scale: 1,
            rotate: [-8, -4, -8],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.35, ease: "easeOut" },
            scale: { duration: 1, delay: 0.35, ease: "easeOut" },
            rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <div className="about-hero-content">
          <motion.div
            className="about-hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🌸 Our Story & Passion
          </motion.div>

          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Handcrafted with Love, Made Just for You
          </motion.h1>

          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <strong>Amor Fuzzia</strong> is a small, home-based business offering
            handmade fuzzy bouquets made with love for every special occasion.
            Each design is crafted with care and a personal touch, made just for you.
          </motion.p>

          <motion.div
            className="about-hero-tagline-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="about-hero-tagline-pill">
              ✨ Soft, affordable, and made with love — only at Amor Fuzzia 💐
            </span>
          </motion.div>

          <motion.div
            className="about-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to="/bouquet" className="btn btn--hero-white">
              See the Bouquets 🌸
            </Link>
            <Link to="/contacts" className="btn btn--hero-translucent">
              Send an Inquiry 💌
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="about-value-section">
        <div className="about-container-inner">
          <motion.div className="about-banner-card" variants={itemVariants}>
            <div className="about-banner-badge">
              💡 Thoughtful & Accessible Gifting
            </div>
            <h2 className="about-banner-title">
              Finding a bouquet that’s worth your money but still high quality?
            </h2>
            <p className="about-banner-desc">
              <strong>Amor Fuzzia</strong> offers handmade fuzzy bouquets for{" "}
              <span className="about-banner-highlight">less than ₱500</span> —
              perfect for gifts, surprises, birthdays, anniversaries, or any
              special moment without overspending.
            </p>
          </motion.div>

          <div className="about-features-grid">
            {HIGHLIGHT_FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                className="about-feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="about-feature-top">
                  <span className="about-feature-icon" role="img" aria-label={feature.title}>
                    {feature.icon}
                  </span>
                  <span className="about-feature-badge">{feature.badge}</span>
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-desc">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-ordering-section">
        <div className="about-container-inner">
          <div className="about-ordering-grid">
            <motion.div
              className="about-info-card about-info-card--order"
              variants={itemVariants}
            >
              <div className="about-info-header">
                <span className="about-section-badge">🪡 Customization</span>
                <h3 className="about-info-card-title">
                  Custom Orders & Flexible Budgets
                </h3>
                <p className="about-info-card-desc">
                  Custom orders available — send your budget so I can adjust the design!
                  Whether you want specific colors, mixed blossoms, or special ribbon tags,
                  we adapt to your vision.
                </p>
              </div>

              <div className="about-order-steps-box">
                <div className="about-steps-header">
                  <span className="about-steps-title">
                    📩 To order, send a message with:
                  </span>
                </div>

                <div className="about-steps-list">
                  {ORDERING_STEPS.map((step) => (
                    <div key={step.number} className="about-step-item">
                      <div className="about-step-number">{step.number}</div>
                      <div className="about-step-body">
                        <div className="about-step-heading">
                          <span className="about-step-icon">{step.icon}</span>
                          <span>{step.title}</span>
                        </div>
                        <p className="about-step-text">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-order-actions">
                <Link
                  to="/contacts"
                  className="btn btn--primary about-action-primary"
                >
                  Send Order Inquiry 🌸
                </Link>
                <Link
                  to="/bouquet"
                  className="btn btn--secondary about-action-secondary"
                >
                  Browse Bouquets ✨
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="about-info-card about-info-card--logistics"
              variants={itemVariants}
            >
              <div className="about-info-header">
                <span className="about-section-badge">📍 Logistics & Studio</span>
                <h3 className="about-info-card-title">
                  Delivery, Meetups & Location
                </h3>
                <p className="about-info-card-desc">
                  We ensure your handcrafted blooms reach you in pristine shape.
                  Choose the pickup or delivery option that fits your schedule!
                </p>
              </div>

              <div className="about-logistics-list">
                <div className="about-logistics-item">
                  <div className="about-logistics-icon-wrap about-logistics-icon--location">
                    📍
                  </div>
                  <div className="about-logistics-details">
                    <span className="about-logistics-title">Studio Location</span>
                    <p className="about-logistics-text">
                      <strong>Jaclupan, Talisay City, Cebu</strong>
                    </p>
                    <span className="about-logistics-hint">
                      Home-based studio where every fuzzy flower is hand-hooked
                    </span>
                  </div>
                </div>

                <div className="about-logistics-item">
                  <div className="about-logistics-icon-wrap about-logistics-icon--meetup">
                    🤝
                  </div>
                  <div className="about-logistics-details">
                    <span className="about-logistics-title">Meetups Available</span>
                    <p className="about-logistics-text">
                      <strong>Talisay area only</strong>
                    </p>
                    <span className="about-logistics-hint">
                      Convenient designated meeting spots within Talisay City
                    </span>
                  </div>
                </div>

                <div className="about-logistics-item">
                  <div className="about-logistics-icon-wrap about-logistics-icon--delivery">
                    🚚
                  </div>
                  <div className="about-logistics-details">
                    <span className="about-logistics-title">Delivery Available</span>
                    <p className="about-logistics-text">
                      <strong>Can deliver via courier</strong>
                    </p>
                    <span className="about-logistics-hint">
                      Shipping fee will be shouldered by the buyer
                    </span>
                  </div>
                </div>

                <div className="about-logistics-item">
                  <div className="about-logistics-icon-wrap about-logistics-icon--pickup">
                    📦
                  </div>
                  <div className="about-logistics-details">
                    <span className="about-logistics-title">Pickup Option</span>
                    <p className="about-logistics-text">
                      <strong>Pickup available upon arrangement</strong>
                    </p>
                    <span className="about-logistics-hint">
                      Message us for exact pickup schedule & address details
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-direct-contact-bar">
                <div className="about-contact-label">
                  <span>Direct Inquiries:</span>
                  <strong>{CONTACT_INFO.email}</strong>
                </div>
                <Link to="/contacts" className="about-contact-link">
                  Contact Us →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-closing-section">
        <div className="about-container-inner">
          <motion.div
            className="about-closing-card"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <span className="about-closing-emoji">💐</span>
            <h2 className="about-closing-title">
              Soft, affordable, and made with love — only at Amor Fuzzia
            </h2>
            <p className="about-closing-subtitle">
              Ready to surprise someone special or decorate your desk with an everlasting bloom?
              Reach out today and let's craft your dream bouquet!
            </p>
            <div className="about-closing-actions">
              <Link to="/bouquet" className="btn btn--primary">
                Explore Bouquets 🌸
              </Link>
              <Link to="/contacts" className="btn btn--secondary">
                Message Our Artisan Team 💬
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ContainerAnimation>
  );
};
