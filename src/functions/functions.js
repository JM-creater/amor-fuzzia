import { CONCERN_TOPICS, CONTACT_INFO } from "../constants/constants";

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const sakuraEntrance1 = {
    hidden: { opacity: 0, scale: 0.85, rotate: 0 },
    visible: {
        opacity: 0.5,
        scale: 1,
        rotate: 8,
        transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    },
};

export const sakuraEntrance2 = {
    hidden: { opacity: 0, scale: 0.85, rotate: 10 },
    visible: {
        opacity: 0.35,
        scale: 1,
        rotate: 20,
        transition: { duration: 1.2, ease: "easeOut", delay: 0.35 },
    },
};

export const sakuraEntrance3 = {
    hidden: { opacity: 0, scale: 0.85, rotate: -15 },
    visible: {
        opacity: 0.5,
        scale: 1,
        rotate: -6,
        transition: { duration: 1.2, ease: "easeOut", delay: 0.45 },
    },
};

export const bouquetContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: { duration: 0.25, ease: "easeInOut" },
    },
};

export const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const drawerVariants = {
    hidden: { x: "100%", opacity: 0.5 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 28,
            stiffness: 280,
        },
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export const menuListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.12,
        },
    },
};

export const menuItemVariants = {
    hidden: { opacity: 0, x: 18 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const getCleanTopic = (topicId) => {
    const topicObj = CONCERN_TOPICS.find((t) => t.id === topicId);
    return topicObj
        ? topicObj.label.replace(/^[\p{Emoji}\s]+/u, "").trim()
        : "General Concern";
};

export const getGmailComposeUrl = (data) => {
    const topic = data.cleanTopic || getCleanTopic(data.topic);
    const subject = `[AMor Fuzzia Concern] ${topic} - ${data.fullName || "Inquiry"}`;
    const body = `Hi AMor Fuzzia Team,
            
            I would like to share the following inquiry/concern:

            • Full Name: ${data.fullName}
            • Email: ${data.email}
            • Phone: ${data.phone || "Not provided"}
            • Concern Topic: ${topic}

            Message Details:
            ${data.message}

            ---
            Sent via AMor Fuzzia Website`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        CONTACT_INFO.email,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getMailtoUrl = (data) => {
    const topic = data.cleanTopic || getCleanTopic(data.topic);
    const subject = `[AMor Fuzzia Concern] ${topic} - ${data.fullName || "Inquiry"}`;
    const body = `Hi AMor Fuzzia Team,

        I would like to share the following inquiry/concern:

        • Full Name: ${data.fullName}
        • Email: ${data.email}
        • Phone: ${data.phone || "Not provided"}
        • Concern Topic: ${topic}

        Message Details:
        ${data.message}

        ---
        Sent via AMor Fuzzia Website`;

    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
        subject,
    )}&body=${encodeURIComponent(body)}`;
};