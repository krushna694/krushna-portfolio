import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaArrowRight,
    FaPaperPlane,
    FaArrowLeft,
} from "react-icons/fa";

function Contact() {
    const [showForm, setShowForm] = useState(false);

    const [formStatus, setFormStatus] = useState("idle");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const contactItems = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "your-email@example.com",
            href: "mailto:your-email@example.com",
        },

        {
            icon: <FaLinkedinIn />,
            label: "LinkedIn",
            value: "Connect with me",
            href: "#",
        },

        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "View my projects",
            href: "#",
        },
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },

                    body: JSON.stringify({
                        access_key:
                            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    }),
                }
            );

            const result = await response.json();

            if (result.success) {
                console.log("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                console.error("Failed to send message:", result);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <section
            className="contact-section"
            id="contact"
        >
            <div className="container">

                {/* =========================
            SECTION HEADING
        ========================= */}

                <motion.div
                    className="contact-heading"

                    initial={{
                        opacity: 0,
                        y: 35,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    transition={{
                        duration: 0.7,
                    }}
                >
                    <p className="section-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's connect.
                    </h2>

                    <p>
                        Have an opportunity, project, or just want to
                        say hello? I'd love to hear from you.
                    </p>
                </motion.div>


                {/* =========================
            CONTACT CARD
        ========================= */}

                <motion.div
                    className="contact-card"

                    initial={{
                        opacity: 0,
                        y: 50,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                >


                    {/* =========================
              LEFT SIDE
          ========================= */}

                    <div className="contact-intro">

                        <div className="contact-glow"></div>

                        <span className="contact-status">
                            <span></span>
                            Open to opportunities
                        </span>

                        <h3>
                            Let's build something
                            <span> meaningful.</span>
                        </h3>

                        <p>
                            I'm currently looking for opportunities where
                            I can grow as a developer and contribute to
                            real-world applications.
                        </p>

                        <div className="contact-location">
                            <FaMapMarkerAlt />

                            <span>
                                Nashik, Maharashtra, India
                            </span>
                        </div>

                    </div>


                    {/* =========================
              RIGHT SIDE
          ========================= */}

                    <div className="contact-details">

                        <AnimatePresence mode="wait">

                            {!showForm ? (

                                /* =========================
                                   CONTACT LINKS
                                ========================= */

                                <motion.div
                                    key="contact-links"

                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    exit={{
                                        opacity: 0,
                                        x: -20,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}
                                >

                                    {contactItems.map((item, index) => (

                                        <motion.a
                                            key={item.label}

                                            href={item.href}

                                            className="contact-item"

                                            initial={{
                                                opacity: 0,
                                                x: 25,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}

                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.08,
                                            }}
                                        >

                                            <span className="contact-item-icon">
                                                {item.icon}
                                            </span>

                                            <span className="contact-item-content">

                                                <span className="contact-item-label">
                                                    {item.label}
                                                </span>

                                                <span className="contact-item-value">
                                                    {item.value}
                                                </span>

                                            </span>

                                            <FaArrowRight
                                                className="contact-item-arrow"
                                            />

                                        </motion.a>

                                    ))}


                                    {/* Start Conversation */}

                                    <motion.button
                                        type="button"

                                        className="contact-cta"

                                        onClick={() => setShowForm(true)}

                                        whileHover={{
                                            y: -3,
                                        }}

                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                    >
                                        Start a conversation

                                        <FaArrowRight />
                                    </motion.button>

                                </motion.div>

                            ) : (

                                /* =========================
                                   CONTACT FORM
                                ========================= */

                                <motion.form
                                    key="contact-form"

                                    className="contact-form"

                                    onSubmit={handleSubmit}

                                    initial={{
                                        opacity: 0,
                                        x: 20,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    exit={{
                                        opacity: 0,
                                        x: -20,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}
                                >

                                    <div className="contact-form-header">

                                        <div>
                                            <h3>
                                                Send me a message
                                            </h3>

                                            <p>
                                                I'll get back to you as soon as possible.
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            className="contact-back-button"
                                            onClick={() => setShowForm(false)}
                                        >
                                            <FaArrowLeft />
                                            Back
                                        </button>

                                    </div>


                                    {/* Name + Email */}

                                    <div className="contact-form-row">

                                        <div className="contact-form-group">

                                            <label htmlFor="name">
                                                Your Name
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="contact-form-group">

                                            <label htmlFor="email">
                                                Your Email
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </div>


                                    {/* Subject */}

                                    <div className="contact-form-group">

                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What would you like to discuss?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Message */}

                                    <div className="contact-form-group">

                                        <label htmlFor="message">
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Write your message here..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* Submit */}

                                    <button
                                        type="submit"
                                        className="contact-submit-button"
                                    >
                                        Send Message

                                        <FaPaperPlane />
                                    </button>

                                </motion.form>

                            )}

                        </AnimatePresence>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Contact;