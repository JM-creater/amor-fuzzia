import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/bouquet-modal-styles.css";

export const BouquetModal = ({ bouquet, onClose }) => {
  useEffect(() => {
    if (!bouquet) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [bouquet]);

  useEffect(() => {
    if (!bouquet) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bouquet, onClose]);

  return (
    <AnimatePresence>
      {bouquet && (
        <div className="bouquet-modal-portal">
          <motion.div
            key="modal-backdrop"
            className="bouquet-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="bouquet-modal-wrapper" onClick={onClose}>
            <motion.div
              key="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-bouquet-title"
              className="bouquet-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="bouquet-modal-close-btn"
                onClick={onClose}
                aria-label="Close bouquet details"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="bouquet-modal-body">
                <div className="bouquet-modal-media-pane">
                  {bouquet.tag && (
                    <span className="bouquet-modal-tag-badge">
                      🌸 {bouquet.tag}
                    </span>
                  )}

                  <div className="bouquet-modal-image-container">
                    <img
                      src={bouquet.image}
                      alt={bouquet.name}
                      className="bouquet-modal-image"
                      loading="eager"
                      decoding="async"
                      draggable="false"
                    />
                  </div>

                  <div className="bouquet-modal-highlights">
                    <div className="modal-highlight-item">
                      <span className="highlight-icon">🧶</span>
                      <span className="highlight-label">100% Handmade</span>
                    </div>
                    <div className="modal-highlight-item">
                      <span className="highlight-icon">✨</span>
                      <span className="highlight-label">Everlasting</span>
                    </div>
                    <div className="modal-highlight-item">
                      <span className="highlight-icon">⏱️</span>
                      <span className="highlight-label">
                        {bouquet.details?.craftTime
                          ? bouquet.details.craftTime.split(" ")[0] + " Craft"
                          : "1.5h Craft"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bouquet-modal-info-pane">
                  <div className="bouquet-modal-header">
                    <span className="bouquet-modal-brand-label">
                      AMor Fuzzia • Handcrafted Florals
                    </span>
                    <h2
                      id="modal-bouquet-title"
                      className="bouquet-modal-title"
                    >
                      {bouquet.name}
                    </h2>
                    <p className="bouquet-modal-subtitle">{bouquet.subtitle}</p>

                    <div className="bouquet-modal-price-wrap">
                      <span className="bouquet-modal-price">
                        {bouquet.price}
                      </span>
                      <span className="bouquet-modal-price-note">
                        Hand-hooked to order
                      </span>
                    </div>
                  </div>

                  <p className="bouquet-modal-description">
                    {bouquet.description}
                  </p>

                  <div className="bouquet-modal-section bouquet-materials-section">
                    <div className="section-title-wrap">
                      <span className="section-icon">🧸</span>
                      <h3 className="section-heading">Materials Used</h3>
                    </div>
                    <div className="materials-grid">
                      {bouquet.materials?.map((mat, index) => (
                        <div key={index} className="material-card">
                          <div className="material-dot" />
                          <div className="material-text">
                            <span className="material-name">{mat.name}</span>
                            {mat.note && (
                              <span className="material-note">{mat.note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {bouquet.details && (
                    <div className="bouquet-modal-section bouquet-specs-section">
                      <div className="section-title-wrap">
                        <span className="section-icon">📏</span>
                        <h3 className="section-heading">
                          Details & Dimensions
                        </h3>
                      </div>
                      <div className="specs-list">
                        <div className="spec-item">
                          <span className="spec-key">Size</span>
                          <span className="spec-val">
                            {bouquet.details.dimensions}
                          </span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-key">Bloom Style</span>
                          <span className="spec-val">
                            {bouquet.details.bloomType}
                          </span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-key">Handcrafting Time</span>
                          <span className="spec-val">
                            {bouquet.details.craftTime}
                          </span>
                        </div>
                        {bouquet.details.lifespan && (
                          <div className="spec-item">
                            <span className="spec-key">Durability</span>
                            <span className="spec-val">
                              {bouquet.details.lifespan}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {bouquet.careTips && (
                    <div className="bouquet-modal-section bouquet-care-section">
                      <div className="section-title-wrap">
                        <span className="section-icon">💡</span>
                        <h3 className="section-heading">Care Tips</h3>
                      </div>
                      <ul className="care-list">
                        {bouquet.careTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {bouquet.customization && (
                    <div className="bouquet-custom-banner">
                      <span className="custom-icon">💌</span>
                      <p>{bouquet.customization}</p>
                    </div>
                  )}

                  <div className="bouquet-modal-footer">
                    <Link
                      to="/contacts"
                      className="bouquet-modal-inquire-btn"
                      onClick={onClose}
                    >
                      <span>💬 Message Us to Order</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <button
                      type="button"
                      className="bouquet-modal-back-btn"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
