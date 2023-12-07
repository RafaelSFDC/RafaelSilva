import { useState } from "react";
import { data } from "./Data";
import { motion } from "framer-motion";
import AnimatedContainer from "../AnimatedContainer";
import { CgComment, CgTerminal } from "react-icons/cg";

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Web");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <AnimatedContainer>
            <div className="skills" id="skills">
                <h2 className="title">
                    <CgTerminal />
                    Habilidades
                </h2>
                <div className="skills-buttons">
                    {Object.keys(data).map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={selectedCategory === category ? "active" : ""}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut"
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            whileTap={{ scale: 0.9 }}
                            whileFocus={{ scale: 1.1, }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
                <div className="content">
                    {data[selectedCategory].map((item, index) => (
                        <motion.div key={item.text + index} className="content-item"
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut"
                            }}
                            initial={{ x: -150, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200 }}
                        >
                            <item.icon />
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedContainer>

    );
};

export default Skills;
