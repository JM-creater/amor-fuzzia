import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ContainerAnimation } from "../../components/animation/container-animation/container-animation";
import { ImageAnimation } from "../../components/animation/image-animation/image-animation";
import { containerVariants, itemVariants } from "../../functions/functions";
import { CONTACT_INFO, FULFILLMENT_OPTIONS, POPULAR_MEETUP_SPOTS, TIMELINE_STEPS } from "../../constants/constants";
import flowerImg from "../bouquet-screen/assets/flower.png";
import sakuraImg from "../home-screen/assets/sakura.png";
import "./styles/find-us-screen-styles.css";

export const FindUsScreen = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToMap = () => {
    const mapElement = document.getElementById("interactive-map-section");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContainerAnimation
      className="find-us-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="find-us-hero">
        <ImageAnimation
          src={sakuraImg}
          alt=""
          className="find-us-hero-deco find-us-deco--top-left"
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
          className="find-us-hero-deco find-us-deco--top-right"
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
          className="find-us-hero-deco find-us-deco--bottom-right"
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

        <div className="find-us-hero-content">
          <motion.div
            className="find-us-hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            📍 Location & Logistics Hub
          </motion.div>

          <motion.h1
            className="find-us-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Find AMor Fuzzia Store
          </motion.h1>

          <motion.p
            className="find-us-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Handcrafting fuzzy flower creations from <strong>Jaclupan, Talisay City, Cebu</strong>.
            Explore our interactive location map, store pickup guidelines, Talisay meetup points,
            and fast courier delivery options.
          </motion.p>

          <motion.div
            className="find-us-hero-tagline-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="find-us-hero-tagline-pill">
              🌸 Store Pickups • Talisay Meetups • Metro Cebu & Nationwide Delivery 🚚
            </span>
          </motion.div>

          <motion.div
            className="find-us-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              onClick={scrollToMap}
              className="btn btn--hero-white"
            >
              View Interactive Map 🗺️
            </button>
            <Link to="/contacts" className="btn btn--hero-translucent">
              Message Us for Pickup 💌
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="find-us-main-section" id="interactive-map-section">
        <div className="find-us-container-inner">
          <div className="find-us-grid">
            <motion.div className="find-us-map-column" variants={itemVariants}>
              <div className="find-us-card-header">
                <span className="find-us-section-badge">🗺️ Interactive Map</span>
                <h2 className="find-us-card-title">Store Location</h2>
                <p className="find-us-card-desc">
                  Explore our store coordinates in Jaclupan, Talisay City. Use the map controls to zoom, explore surrounding routes, or open directions.
                </p>
              </div>

              <div className="find-us-map-frame-wrap">
                <motion.div
                  className="find-us-map-overlay-badge"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="map-badge-icon">💐</span>
                  <div className="map-badge-text">
                    <strong>AMor Fuzzia Store</strong>
                    <span>Jaclupan, Talisay City, Cebu</span>
                  </div>
                </motion.div>

                {!mapLoaded && (
                  <div className="find-us-map-loading" aria-live="polite">
                    <div className="map-loading-spinner" />
                    <span>Loading interactive map...</span>
                  </div>
                )}

                <iframe
                  title="AMor Fuzzia Store Location Map"
                  src="https://maps.google.com/maps?q=Jaclupan,+Talisay+City,+Cebu,+Philippines&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="find-us-map-iframe"
                  loading="lazy"
                  allowFullScreen=""
                  onLoad={() => setMapLoaded(true)}
                />
              </div>

              <div className="find-us-map-footer">
                <div className="find-us-coords-info">
                  <span className="coords-label">Exact Area:</span>
                  <strong className="coords-value">Jaclupan, Talisay City, Cebu 6045</strong>
                </div>

                <div className="find-us-map-actions">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jaclupan,+Talisay+City,+Cebu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="find-us-btn-open-maps"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div className="find-us-info-column" variants={itemVariants}>
              <div className="find-us-card-header">
                <span className="find-us-section-badge">🏡 Store Details</span>
                <h2 className="find-us-card-title">Visiting & Contacting Us</h2>
                <p className="find-us-card-desc">
                  AMor Fuzzia is a home-based artisan workshop. For personal pickups, please arrange your timeslot in advance.
                </p>
              </div>

              <div className="find-us-details-list">
                <div className="find-us-detail-card">
                  <div className="find-us-detail-icon-wrap find-us-icon--location">
                    📍
                  </div>
                  <div className="find-us-detail-body">
                    <span className="find-us-detail-label">Store Address</span>
                    <p className="find-us-detail-value">
                      <strong>Jaclupan, Talisay City, Cebu</strong>
                    </p>
                    <span className="find-us-detail-sub">
                      Philippines • 6045
                    </span>
                  </div>
                </div>

                <div className="find-us-detail-card">
                  <div className="find-us-detail-icon-wrap find-us-icon--hours">
                    ⏰
                  </div>
                  <div className="find-us-detail-body">
                    <span className="find-us-detail-label">Operating & Response Hours</span>
                    <p className="find-us-detail-value">
                      <strong>{CONTACT_INFO.hours}</strong>
                    </p>
                    <span className="find-us-detail-sub">
                      {CONTACT_INFO.responseNotice}
                    </span>
                  </div>
                </div>

                <div className="find-us-detail-card">
                  <div className="find-us-detail-icon-wrap find-us-icon--phone">
                    📞
                  </div>
                  <div className="find-us-detail-body">
                    <span className="find-us-detail-label">Direct Store Hotline</span>
                    <div className="find-us-phones-row">
                      {CONTACT_INFO.phones.map((phone) => (
                        <div key={phone.raw} className="find-us-phone-chip">
                          <a href={phone.tel} className="phone-link">
                            {phone.display}
                          </a>
                          <span className="phone-net">({phone.label})</span>
                          <button
                            type="button"
                            className="phone-copy-btn"
                            onClick={() => handleCopyPhone(phone.raw)}
                            aria-label={`Copy ${phone.display}`}
                            title="Copy number"
                          >
                            📋
                          </button>
                        </div>
                      ))}
                    </div>
                    {copiedPhone && (
                      <span className="find-us-copied-alert">
                        ✓ Phone number copied to clipboard!
                      </span>
                    )}
                  </div>
                </div>

                <div className="find-us-detail-card">
                  <div className="find-us-detail-icon-wrap find-us-icon--email">
                    ✉️
                  </div>
                  <div className="find-us-detail-body">
                    <span className="find-us-detail-label">Official Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="find-us-email-link"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <span className="find-us-detail-sub">
                      For bulk orders, custom designs & inquiries
                    </span>
                  </div>
                </div>
              </div>

              <div className="find-us-quick-contact-box">
                <div className="quick-contact-text">
                  <strong>Ready to order or schedule a pickup?</strong>
                  <p>Send your design idea, budget, and needed date!</p>
                </div>
                <Link to="/contacts" className="btn btn--primary find-us-cta-btn">
                  Message AMor Fuzzia 🌸
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="find-us-fulfillment-section">
        <div className="find-us-container-inner">
          <div className="find-us-section-heading-wrap">
            <span className="find-us-section-badge">🚚 Ways to Receive Your Blooms</span>
            <h2 className="find-us-main-heading">Fulfillment & Delivery Options</h2>
            <p className="find-us-heading-sub">
              Whether you prefer picking up personally or having your bouquet delivered to your doorstep, we have flexible options for everyone.
            </p>
          </div>

          <div className="find-us-fulfillment-grid">
            {FULFILLMENT_OPTIONS.map((opt) => (
              <motion.div
                key={opt.title}
                className="find-us-fulfillment-card"
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <div className="fulfillment-card-top">
                  <div className="fulfillment-icon">{opt.icon}</div>
                  <span className="fulfillment-badge">{opt.badge}</span>
                </div>
                <h3 className="fulfillment-title">{opt.title}</h3>
                <span className="fulfillment-highlight">{opt.highlight}</span>
                <p className="fulfillment-desc">{opt.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="find-us-meetup-section">
        <div className="find-us-container-inner">
          <div className="find-us-meetup-grid">
            {/* Left: Popular Meetup Landmarks */}
            <motion.div className="find-us-info-card" variants={itemVariants}>
              <div className="find-us-card-header">
                <span className="find-us-section-badge">📍 Meetup Spots</span>
                <h3 className="find-us-card-title">Popular Talisay Landmarks</h3>
                <p className="find-us-card-desc">
                  Meetups are strictly within the <strong>Talisay City area</strong>. Here are common meeting points for easy handovers:
                </p>
              </div>

              <div className="find-us-landmarks-list">
                {POPULAR_MEETUP_SPOTS.map((spot) => (
                  <div key={spot.name} className="landmark-item">
                    <span className="landmark-icon">{spot.icon}</span>
                    <div className="landmark-text">
                      <strong className="landmark-name">{spot.name}</strong>
                      <span className="landmark-area">{spot.area}</span>
                    </div>
                    <span className="landmark-tag">Talisay</span>
                  </div>
                ))}
              </div>

              <p className="landmark-note">
                💡 <em>Have a specific landmark in Talisay in mind? Message us and we'll confirm availability!</em>
              </p>
            </motion.div>

            <motion.div className="find-us-info-card" variants={itemVariants}>
              <div className="find-us-card-header">
                <span className="find-us-section-badge">✨ Process</span>
                <h3 className="find-us-card-title">How It Works</h3>
                <p className="find-us-card-desc">
                  Simple 3-step process from selecting your favorite fuzzy flowers to holding them in your hands:
                </p>
              </div>

              <div className="find-us-timeline-list">
                {TIMELINE_STEPS.map((step) => (
                  <div key={step.number} className="timeline-item">
                    <div className="timeline-number-wrap">
                      <span className="timeline-number">{step.number}</span>
                    </div>
                    <div className="timeline-body">
                      <div className="timeline-heading">
                        <span className="timeline-icon">{step.icon}</span>
                        <strong className="timeline-title">{step.title}</strong>
                      </div>
                      <p className="timeline-text">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="timeline-actions">
                <Link to="/bouquet" className="btn btn--primary timeline-cta">
                  Explore Bouquets 🌸
                </Link>
                <Link to="/contacts" className="btn btn--secondary timeline-cta">
                  Send Inquiry 💌
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="find-us-closing-section">
        <div className="find-us-container-inner">
          <motion.div
            className="find-us-closing-card"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <span className="find-us-closing-emoji">💐</span>
            <h2 className="find-us-closing-title">
              Ready to Order or Visit Our Store?
            </h2>
            <p className="find-us-closing-subtitle">
              We look forward to creating everlasting, handmade fuzzy blooms for you or your loved ones. Message us today to arrange your order!
            </p>
            <div className="find-us-closing-actions">
              <Link to="/contacts" className="btn btn--primary">
                Contact & Schedule Pickup 💬
              </Link>
              <Link to="/bouquet" className="btn btn--secondary">
                View Bouquet Catalog 🌸
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ContainerAnimation>
  );
};
