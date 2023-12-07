import AnimatedContainer from './AnimatedContainer';
import { CgTemplate, CgWebsite } from 'react-icons/cg';
import { projectsData } from './../constants/constants';
import { FaGithubAlt } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        <AnimatedContainer>
            <div className='project' id='project'>
                <h2 className="title">
                    <CgTemplate />
                    Projetos
                </h2>
                <div className="content">
                    {/* Mapeia os projetos e renderiza cada um */}
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-item">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div>
                                <h4>Tecnologias Usadas</h4>
                                <div className="tags">
                                    {project.tags.map((Icon, index) => (
                                        <Icon key={index} size={24} />
                                    ))}
                                </div>
                            </div>
                            <div className="links">
                                <motion.a href={project.source} target="_blank" rel="noopener noreferrer"
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
                                    <CgWebsite /> Ver Online
                                </motion.a>
                                <motion.a href={project.visit} target="_blank" rel="noopener noreferrer"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    whileTap={{ scale: 0.9 }}
                                    whileFocus={{ scale: 1.1, }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaGithubAlt />  Código Fonte
                                </motion.a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default Projects;
