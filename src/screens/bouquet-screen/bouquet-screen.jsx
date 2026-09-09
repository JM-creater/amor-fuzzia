import { useState, useRef, useEffect, useCallback } from "react";
import { BOUQUET_PRODUCTS } from "../../constants/constants";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { ContainerAnimation } from "../../components/animation/container-animation/container-animation";
import {
  bouquetContainerVariants,
  cardVariants,
} from "../../functions/functions";
import { BouquetModal } from "./components/bouquet-modal/bouquet-modal";
import flowerImg from "./assets/flower.png";
import { ImageAnimation } from "../../components/animation/image-animation/image-animation";
import "./styles/bouquet-screen-styles.css";

export const BouquetScreen = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedBouquet, setSelectedBouquet] = useState(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const x = useMotionValue(0);

  const SPOTLIGHT_BOUQUETS = BOUQUET_PRODUCTS.filter(
    (b) => b.isLatest || b.tag === "Bestseller" || b.tag === "Popular",
  );

  const filteredCatalog =
    activeFilter === "all"
      ? BOUQUET_PRODUCTS
      : activeFilter === "latest"
        ? BOUQUET_PRODUCTS.filter((b) => b.isLatest)
        : BOUQUET_PRODUCTS.filter((b) =>
          b.tag?.toLowerCase().includes(activeFilter.toLowerCase()),
        );

  const updateBounds = useCallback(() => {
    if (carouselRef.current && trackRef.current) {
      const scrollW = trackRef.current.scrollWidth;
      const clientW = carouselRef.current.clientWidth;
      const max = Math.max(0, scrollW - clientW);
      setMaxDrag(max);

      const currentX = x.get();
      setCanScrollLeft(currentX < -8);
      setCanScrollRight(currentX > -max + 8);

      const prog =
        max > 0 ? Math.min(100, Math.max(0, (-currentX / max) * 100)) : 100;
      setCurrentProgress(prog);
    }
  }, [x]);

  useEffect(() => {
    const timeout = setTimeout(updateBounds, 120);
    window.addEventListener("resize", updateBounds);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  useEffect(() => {
    return x.on("change", (latestX) => {
      setCanScrollLeft(latestX < -8);
      setCanScrollRight(latestX > -maxDrag + 8);
      if (maxDrag > 0) {
        const prog = Math.min(100, Math.max(0, (-latestX / maxDrag) * 100));
        setCurrentProgress(prog);
      } else {
        setCurrentProgress(100);
      }
    });
  }, [maxDrag, x]);

  const slide = (direction) => {
    const currentX = x.get();
    const slideAmount = 334;
    let targetX =
      direction === "left" ? currentX + slideAmount : currentX - slideAmount;
    targetX = Math.max(-maxDrag, Math.min(0, targetX));
    animate(x, targetX, { type: "spring", stiffness: 350, damping: 32 });
  };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handleCardClick = (bouquet) => {
    if (!isDraggingRef.current) {
      setSelectedBouquet(bouquet);
    }
  };

  return (
    <>
      <ContainerAnimation
        className={"bouquet-screen-container"}
        variants={bouquetContainerVariants}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        <section className="bouquet-hero">
          <ImageAnimation
            src={flowerImg}
            alt={""}
            className={"bouquet-hero-deco bouquet-deco--top-left"}
            initial={{ opacity: 0, scale: 0.85, rotate: -25 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              rotate: [-25, -20, -25],
              y: [0, -8, 0],
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
            alt={""}
            className={"bouquet-hero-deco bouquet-deco--top-right"}
            initial={{ opacity: 0, scale: 0.85, rotate: 35 }}
            animate={{
              opacity: 0.65,
              scale: 1,
              rotate: [35, 38, 35],
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.15, ease: "easeOut" },
              scale: { duration: 1, delay: 0.15, ease: "easeOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <ImageAnimation
            src={flowerImg}
            alt={""}
            className={"bouquet-hero-deco bouquet-deco--bottom-right"}
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            animate={{
              opacity: 0.75,
              scale: 1,
              rotate: [-10, -6, -10],
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.3, ease: "easeOut" },
              scale: { duration: 1, delay: 0.3, ease: "easeOut" },
              rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <div className="bouquet-hero-content">
            <motion.h1
              className="bouquet-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Every bouquet, hand-hooked to order.
            </motion.h1>
            <motion.p
              className="bouquet-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Made in small batches, so quantities are limited. Message us to
              check what's currently in stock before ordering.
            </motion.p>
          </div>
        </section>

        <section className="bouquet-spotlight-section">
          <div className="bouquet-container-inner">
            <div className="bouquet-section-header">
              <div className="bouquet-section-title-wrap">
                <span className="bouquet-section-badge">
                  Handpicked Highlights
                </span>
                <h2 className="bouquet-section-title">Spotlight Creations</h2>
                <p className="bouquet-section-subtitle">
                  Swipe or drag to explore our most beloved handcrafted designs
                </p>
              </div>

              <div className="bouquet-slider-nav">
                <span className="bouquet-drag-hint">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <span>Drag to browse</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>

                <div className="bouquet-arrow-buttons">
                  <button
                    type="button"
                    className="bouquet-arrow-btn"
                    onClick={() => slide("left")}
                    disabled={!canScrollLeft}
                    aria-label="Previous spotlight bouquet"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="bouquet-arrow-btn"
                    onClick={() => slide("right")}
                    disabled={!canScrollRight}
                    aria-label="Next spotlight bouquet"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="bouquet-carousel-wrapper" ref={carouselRef}>
              <motion.div
                ref={trackRef}
                className="bouquet-carousel-track"
                style={{ x }}
                drag="x"
                dragConstraints={{ right: 0, left: -maxDrag }}
                dragElastic={0.12}
                dragTransition={{ bounceStiffness: 400, bounceDamping: 35 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {SPOTLIGHT_BOUQUETS.map((bouquet) => (
                  <motion.div
                    key={`spotlight-${bouquet.id}`}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bouquet-card bouquet-card--spotlight"
                    role="button"
                    tabIndex={0}
                    aria-label={`View details and materials for ${bouquet.name}`}
                    onClick={() => handleCardClick(bouquet)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedBouquet(bouquet);
                      }
                    }}
                  >
                    {bouquet.tag && (
                      <span className="bouquet-card-badge">
                        🌸 {bouquet.tag}
                      </span>
                    )}

                    <div className="bouquet-card-image-wrapper">
                      <img
                        src={bouquet.image}
                        alt={bouquet.name}
                        className="bouquet-card-image"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>

                    <h3 className="bouquet-card-title">{bouquet.name}</h3>
                    <p className="bouquet-card-subtitle">{bouquet.subtitle}</p>

                    <hr className="bouquet-card-divider" />

                    <div className="bouquet-card-footer">
                      <span className="bouquet-card-price">
                        {bouquet.price}
                      </span>
                      <span className="bouquet-card-view-btn">
                        View Details →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="bouquet-carousel-footer">
              <div className="bouquet-progress-track">
                <div
                  className="bouquet-progress-bar"
                  style={{ width: `${Math.max(15, currentProgress)}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bouquet-catalog-section">
          <div className="bouquet-container-inner">
            <div className="bouquet-catalog-header">
              <div className="bouquet-section-title-wrap">
                <span className="bouquet-section-badge">
                  Complete Catalogue
                </span>
                <h2 className="bouquet-section-title">Explore All Bouquets</h2>
                <p className="bouquet-section-subtitle">
                  Browse and compare our full collection of handcrafted
                  everlasting flowers
                </p>
              </div>

              <div
                className="bouquet-filters"
                role="tablist"
                aria-label="Bouquet Catalog Filters"
              >
                <button
                  role="tab"
                  aria-selected={activeFilter === "all"}
                  className={`bouquet-filter-btn ${activeFilter === "all"
                    ? "bouquet-filter-btn--active"
                    : "bouquet-filter-btn--inactive"
                    }`}
                  onClick={() => setActiveFilter("all")}
                >
                  All ({BOUQUET_PRODUCTS.length})
                </button>
                <button
                  role="tab"
                  aria-selected={activeFilter === "bestseller"}
                  className={`bouquet-filter-btn ${activeFilter === "bestseller"
                    ? "bouquet-filter-btn--active"
                    : "bouquet-filter-btn--inactive"
                    }`}
                  onClick={() => setActiveFilter("bestseller")}
                >
                  Bestsellers
                </button>
                <button
                  role="tab"
                  aria-selected={activeFilter === "latest"}
                  className={`bouquet-filter-btn ${activeFilter === "latest"
                    ? "bouquet-filter-btn--active"
                    : "bouquet-filter-btn--inactive"
                    }`}
                  onClick={() => setActiveFilter("latest")}
                >
                  New Arrivals
                </button>
              </div>
            </div>

            <motion.div
              layout
              className="bouquet-grid"
              variants={bouquetContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="popLayout">
                {filteredCatalog.map((bouquet) => (
                  <motion.div
                    key={`catalog-${bouquet.id}`}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bouquet-card"
                    role="button"
                    tabIndex={0}
                    aria-label={`View details and materials for ${bouquet.name}`}
                    onClick={() => setSelectedBouquet(bouquet)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedBouquet(bouquet);
                      }
                    }}
                  >
                    {bouquet.tag && (
                      <span className="bouquet-card-badge">
                        🌸 {bouquet.tag}
                      </span>
                    )}

                    <div className="bouquet-card-image-wrapper">
                      <img
                        src={bouquet.image}
                        alt={bouquet.name}
                        className="bouquet-card-image"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>

                    <h3 className="bouquet-card-title">{bouquet.name}</h3>
                    <p className="bouquet-card-subtitle">{bouquet.subtitle}</p>

                    <hr className="bouquet-card-divider" />

                    <div className="bouquet-card-footer">
                      <span className="bouquet-card-price">
                        {bouquet.price}
                      </span>
                      <span className="bouquet-card-view-btn">
                        View Details →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </ContainerAnimation>

      <BouquetModal
        bouquet={selectedBouquet}
        onClose={() => setSelectedBouquet(null)}
      />
    </>
  );
};
