import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
    const [position, setPosition] = useState({
        x: -100,
        y: -100,
    });

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );

        if (!mediaQuery.matches) {
            return;
        }

        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        const handleMouseOver = (event) => {
            const target = event.target.closest(
                "a, button, input, textarea, select"
            );

            setIsHovering(Boolean(target));
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        document.addEventListener(
            "mouseover",
            handleMouseOver
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            document.removeEventListener(
                "mouseover",
                handleMouseOver
            );
        };
    }, []);

    return (
        <>
            {/* Outer Ring */}

            <motion.div
                className="custom-cursor-ring"
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: isHovering ? 1.35 : 1,
                    rotate: 100,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    mass: 0.4,
                }}
            />

            {/* Water Drop */}

            <motion.div
                className="custom-cursor-drop"
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: isHovering ? 1.35 : 1,
                    rotate: 100,
                }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 35,
                    mass: 0.15,
                }}
            />
        </>
    );
}

export default CustomCursor;