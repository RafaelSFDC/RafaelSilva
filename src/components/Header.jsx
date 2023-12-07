import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";
const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="project" spy={true} smooth={true} duration={500}>Projetos</Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} duration={500}>Habilidades</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>Contato</Link>
                </li>
                <li>
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://github.com/RafaelSFDC"
                        className=" components">
                        <FaGithub />
                    </a>
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho-902a47173/"
                        className="components">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </header>
    )
};

export default Header;
