import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ContainerAnimation } from "../../components/animation/container-animation/container-animation";
import { ImageAnimation } from "../../components/animation/image-animation/image-animation";
import {
  containerVariants,
  getCleanTopic,
  getGmailComposeUrl,
  getMailtoUrl,
  itemVariants,
} from "../../functions/functions";
import {
  CONTACT_INFO,
  CONCERN_TOPICS,
  EMAILJS_CONFIG,
} from "../../constants/constants";
import flowerImg from "../bouquet-screen/assets/flower.png";
import sakuraImg from "../home-screen/assets/sakura.png";
import "./styles/contacts-screen-styles.css";

export const ContactsScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "custom",
    message: "",
  });

  const [copiedItem, setCopiedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleCopy = (text, label) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTopicSelect = (topicId) => {
    setFormData((prev) => ({
      ...prev,
      topic: topicId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const cleanTopic = getCleanTopic(formData.topic);
    const currentData = { ...formData, cleanTopic };

    const templateParams = {
      to_name: "AMor Fuzzia",
      to_email: CONTACT_INFO.email,
      email: CONTACT_INFO.email,
      recipient: CONTACT_INFO.email,
      send_to: CONTACT_INFO.email,
      from_name: formData.fullName,
      from_email: formData.email,
      reply_to: formData.email,
      user_name: formData.fullName,
      user_email: formData.email,
      customer_name: formData.fullName,
      customer_email: formData.email,
      sender_email: formData.email,
      phone_number: formData.phone || "",
      user_phone: formData.phone || "",
      phone: formData.phone || "",
      concern_topic: cleanTopic,
      topic: cleanTopic,
      subject: `[AMor Fuzzia Concern] ${cleanTopic} - ${formData.fullName || "Inquiry"}`,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey,
      );

      if (response.status === 200 || response.text === "OK") {
        setSubmitStatus({
          success: true,
          message: `Your message has been delivered to ${CONTACT_INFO.email}! Our team will get back to you shortly.`,
        });
      } else {
        setSubmitStatus({
          success: true,
          message: `Your message has been received! Our team will get back to you shortly at ${formData.email}.`,
        });
      }

      setSubmittedData(currentData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        topic: "custom",
        message: "",
      });
    } catch (error) {
      console.warn("Message delivery notice:", error);
      setSubmitStatus({
        success: false,
        message:
          "We could not send your message directly right now. Your message is saved below so you can easily dispatch it or copy the text.",
      });

      setSubmittedData(currentData);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmitStatus(null);
    setSubmittedData(null);
  };

  return (
    <ContainerAnimation
      className="contacts-screen-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="contacts-hero">
        <ImageAnimation
          src={sakuraImg}
          alt=""
          className="contacts-hero-deco contacts-deco--top-left"
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
          className="contacts-hero-deco contacts-deco--top-right"
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
          className="contacts-hero-deco contacts-deco--bottom-right"
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

        <div className="contacts-hero-content">
          <motion.div
            className="contacts-hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🌸 Direct Inquiries & Contact
          </motion.div>

          <motion.h1
            className="contacts-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Get in Touch with AMor Fuzzia
          </motion.h1>

          <motion.p
            className="contacts-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Have a custom crochet bouquet idea, need to check batch
            availability, or want to discuss your concerns? Send us a message or
            contact our direct phone lines anytime!
          </motion.p>
        </div>
      </section>

      <section className="contacts-main-section">
        <div className="contacts-container-inner">
          <div className="contacts-grid">
            <motion.div
              className="contacts-info-column"
              variants={itemVariants}
            >
              <div className="contacts-info-header">
                <span className="contacts-section-badge">Direct Channels</span>
                <h2 className="contacts-info-title">Reach Out to Us</h2>
                <p className="contacts-info-subtitle">
                  We are always delighted to hear from you. Contact our mobile
                  lines or write directly to our inbox.
                </p>
              </div>

              <div className="contacts-card contacts-card--phones">
                <div className="contacts-card-header">
                  <div className="contacts-card-icon-wrap">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contacts-card-heading">
                      Direct Phone Numbers
                    </h3>
                    <p className="contacts-card-subheading">
                      Call or SMS our artisan team
                    </p>
                  </div>
                </div>

                <div className="contacts-phone-list">
                  {CONTACT_INFO.phones.map((phone) => (
                    <div key={phone.raw} className="contacts-phone-item">
                      <div className="contacts-phone-details">
                        <span className="contacts-phone-number">
                          {phone.display}
                        </span>
                        <span className="contacts-phone-network">
                          {phone.label}
                        </span>
                      </div>

                      <div className="contacts-phone-actions">
                        <button
                          type="button"
                          className="contacts-action-btn contacts-action-btn--copy"
                          onClick={() => handleCopy(phone.raw, phone.raw)}
                          aria-label={`Copy ${phone.display}`}
                        >
                          {copiedItem === phone.raw ? (
                            <>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  x="9"
                                  y="9"
                                  width="13"
                                  height="13"
                                  rx="2"
                                  ry="2"
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                              </svg>
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contacts-card contacts-card--email">
                <div className="contacts-card-header">
                  <div className="contacts-card-icon-wrap">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contacts-card-heading">Official Email</h3>
                    <p className="contacts-card-subheading">
                      Write directly to our Gmail inbox
                    </p>
                  </div>
                </div>

                <div className="contacts-email-box">
                  <span className="contacts-email-address">
                    {CONTACT_INFO.email}
                  </span>

                  <div className="contacts-email-actions">
                    <button
                      type="button"
                      className="contacts-action-btn contacts-action-btn--copy"
                      onClick={() =>
                        handleCopy(CONTACT_INFO.email, "email-main")
                      }
                      aria-label="Copy email address"
                    >
                      {copiedItem === "email-main" ? (
                        <>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contacts-card contacts-card--studio">
                <div className="contacts-card-header">
                  <div className="contacts-card-icon-wrap">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contacts-card-heading">Store Information</h3>
                    <p className="contacts-card-subheading">
                      Every piece is handcrafted with love
                    </p>
                  </div>
                </div>

                <div className="contacts-studio-details">
                  <div className="contacts-detail-item">
                    <span className="contacts-detail-label">
                      🕒 Operating Hours
                    </span>
                    <span className="contacts-detail-value">
                      {CONTACT_INFO.hours}
                    </span>
                  </div>

                  <div className="contacts-detail-item">
                    <span className="contacts-detail-label">
                      ⚡ Fast Response
                    </span>
                    <span className="contacts-detail-value">
                      {CONTACT_INFO.responseNotice}
                    </span>
                  </div>
                </div>

                <div className="contacts-studio-tags">
                  <span className="contacts-tag-pill">
                    🌸 Hand-hooked batches
                  </span>
                  <span className="contacts-tag-pill">
                    🎁 Custom dedicated notes
                  </span>
                  <span className="contacts-tag-pill">
                    ✨ Everlasting blooms
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contacts-form-column"
              variants={itemVariants}
            >
              <div className="contacts-form-header">
                <span className="contacts-section-badge">Send a Message</span>
                <h2 className="contacts-form-title">Concerns & Inquiries</h2>
                <p className="contacts-form-subtitle">
                  Fill out your message below to send directly to{" "}
                  <strong>{CONTACT_INFO.email}</strong>.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted && submittedData ? (
                  <motion.div
                    key="submission-success"
                    className="contacts-success-panel"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="contacts-success-icon-wrap">
                      <span className="contacts-success-emoji">🌸</span>
                    </div>

                    <h3 className="contacts-success-title">
                      {submitStatus?.success !== false
                        ? "Message Sent Successfully!"
                        : "Message Summary"}
                    </h3>

                    <p className="contacts-success-message">
                      Thank you,{" "}
                      <strong>{submittedData.fullName || "friend"}</strong>!{" "}
                      {submitStatus?.success !== false ? (
                        <>
                          Your message regarding{" "}
                          <span className="contacts-success-highlight">
                            {submittedData.cleanTopic}
                          </span>{" "}
                          has been delivered to{" "}
                          <strong>{CONTACT_INFO.email}</strong>. We will get
                          back to you shortly!
                        </>
                      ) : (
                        <>{submitStatus?.message}</>
                      )}
                    </p>

                    <div className="contacts-preview-box">
                      <div className="contacts-preview-header">
                        <span className="contacts-preview-label">
                          Message Summary:
                        </span>
                        <button
                          type="button"
                          className="contacts-preview-copy-btn"
                          onClick={() =>
                            handleCopy(submittedData.message, "submitted-msg")
                          }
                        >
                          {copiedItem === "submitted-msg"
                            ? "✓ Copied Text!"
                            : "📋 Copy Message"}
                        </button>
                      </div>
                      <div className="contacts-summary-details">
                        <p>
                          <strong>Name:</strong> {submittedData.fullName}
                        </p>
                        <p>
                          <strong>Email:</strong> {submittedData.email}
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          {submittedData.phone || "Not provided"}
                        </p>
                        <p>
                          <strong>Topic:</strong> {submittedData.cleanTopic}
                        </p>
                      </div>
                      <pre className="contacts-preview-text">
                        {submittedData.message}
                      </pre>
                    </div>

                    <div className="contacts-success-actions">
                      <motion.a
                        href={getGmailComposeUrl(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary contacts-success-btn contacts-success-btn--gmail"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ marginRight: "6px" }}
                        >
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                        Open in Gmail 🌸
                      </motion.a>

                      <motion.a
                        href={getMailtoUrl(submittedData)}
                        className="btn btn--secondary contacts-success-btn"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Open Default Mail App ✉️
                      </motion.a>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Link
                          to="/bouquet"
                          className="btn btn--secondary contacts-success-btn"
                        >
                          Explore Bouquets ✨
                        </Link>
                      </motion.div>

                      <motion.button
                        type="button"
                        className="btn contacts-action-btn--reset"
                        onClick={handleResetForm}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Send Another Message
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-form-card"
                    className="contacts-form-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form className="contacts-form" onSubmit={handleSubmit}>
                      <div className="form-group form-group--topics">
                        <label className="form-label">
                          What is your concern about?
                        </label>
                        <div
                          className="contacts-topics-grid"
                          role="radiogroup"
                          aria-label="Inquiry Topic"
                        >
                          {CONCERN_TOPICS.map((topic) => {
                            const isSelected = formData.topic === topic.id;
                            return (
                              <button
                                key={topic.id}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                className={`contacts-topic-pill ${
                                  isSelected
                                    ? "contacts-topic-pill--active"
                                    : ""
                                }`}
                                onClick={() => handleTopicSelect(topic.id)}
                              >
                                <span className="topic-pill-label">
                                  {topic.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="fullName" className="form-label">
                          Full Name <span className="required-star">*</span>
                        </label>
                        <div className="input-wrapper">
                          <span className="input-icon" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </span>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="form-input"
                            placeholder="e.g. Maria Santos"
                            required
                            autoComplete="name"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group form-group--half">
                          <label htmlFor="email" className="form-label">
                            Email Address{" "}
                            <span className="required-star">*</span>
                          </label>
                          <div className="input-wrapper">
                            <span className="input-icon" aria-hidden="true">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </span>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className="form-input"
                              placeholder="e.g. maria@gmail.com"
                              required
                              autoComplete="email"
                              inputMode="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group form-group--half">
                          <label htmlFor="phone" className="form-label">
                            Phone Number{" "}
                            <span className="optional-tag">(Optional)</span>
                          </label>
                          <div className="input-wrapper">
                            <span className="input-icon" aria-hidden="true">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </span>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              className="form-input"
                              placeholder="e.g. 0931 995 2887"
                              autoComplete="tel"
                              inputMode="tel"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="form-label-row">
                          <label htmlFor="message" className="form-label">
                            Message Box for Concerns{" "}
                            <span className="required-star">*</span>
                          </label>
                          <span className="form-hint">
                            Provide details about your inquiry or custom order
                          </span>
                        </div>
                        <div className="input-wrapper input-wrapper--textarea">
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="form-input form-textarea"
                            placeholder="Share your concerns, requested bouquet styles, color preferences, celebration date, or questions..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-submit-row">
                        <motion.button
                          type="submit"
                          className="btn btn--primary contacts-submit-btn"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                          {isSubmitting ? (
                            <span className="contacts-submitting-state">
                              <span className="contacts-spinner" />
                              Sending Message...
                            </span>
                          ) : (
                            <span className="contacts-submit-label">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                  marginRight: "8px",
                                  verticalAlign: "middle",
                                }}
                              >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                              </svg>
                              Send Message 🌸
                            </span>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </ContainerAnimation>
  );
};
