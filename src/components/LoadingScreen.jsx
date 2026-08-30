import { motion } from "framer-motion";

function LoadingScreen() {
    return (
        <motion.div
            className="loading-screen"

            initial={{
                opacity: 1,
            }}

            animate={{
                opacity: 1,
            }}

            exit={{
                opacity: 0,
            }}

            transition={{
                duration: 0.55,
                ease: "easeInOut",
            }}
        >

            <motion.div
                className="loading-content"

                initial={{
                    opacity: 0,
                    scale: 0.85,
                    y: 0,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}

                exit={{
                    opacity: 0,
                    scale: 0.65,
                    y: -70,
                }}

                transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                }}
            >

                {/* Logo */}

                <motion.div
                    className="loading-logo"

                    initial={{
                        opacity: 0,
                        scale: 0.6,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}

                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    K
                </motion.div>


                {/* Accent Line */}

                <motion.div
                    className="loading-line"

                    initial={{
                        width: 0,
                        opacity: 0,
                    }}

                    animate={{
                        width: 60,
                        opacity: 1,
                    }}

                    transition={{
                        duration: 0.45,
                        delay: 0.35,
                        ease: "easeOut",
                    }}
                />


                {/* Name */}

                <motion.p
                    className="loading-name"

                    initial={{
                        opacity: 0,
                        y: 10,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.5,
                        delay: 0.45,
                        ease: "easeOut",
                    }}
                >
                    KRUSHNA WAKCHAURE
                </motion.p>

            </motion.div>

        </motion.div>
    );
}

export default LoadingScreen;