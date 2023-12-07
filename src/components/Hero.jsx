import HeroAnimation from './HeroAnimation';
import { motion } from 'framer-motion';
import AnimatedContainer from './AnimatedContainer';

const Hero = () => {
    return (
        <AnimatedContainer>
            <div className="hero">
                <motion.div className="content">
                    <span>Bem vindo ao meu Portifólio</span>
                    <h1>Me chamo Rafael</h1>
                    <p>Sou Desenvolvedor Web</p>
                </motion.div>
                <HeroAnimation />
            </div>
        </AnimatedContainer>
    )
};

export default Hero;
