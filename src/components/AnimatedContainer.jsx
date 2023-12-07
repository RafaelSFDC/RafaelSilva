import { motion } from "framer-motion";
import React from "react";

const AnimatedContainer = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            // animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimatedContainer;
