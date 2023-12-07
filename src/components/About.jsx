import AnimatedContainer from './AnimatedContainer';
import { CgWebsite } from 'react-icons/cg';
const About = () => {

    return (
        <AnimatedContainer>
            <div className='aboutContainer'>
                <h2 className="title">
                    <CgWebsite />
                    Sobre
                </h2>
                <div className="about">
                    <img src="images/laptop.jpg" alt="" />
                    <div className="content">
                        <h3>Sobre mim</h3>
                        <p>Sou um programador Front-End FreeLancer.  Sou autodidata, aprendi a programar sozinho porque eu gosto de programação. Então mesmo sem qualquer certificado tenho confiança nas minhas habilidades.
                            <br />
                            Embora tenha conhecimentos em várias tecnologias o que me dá a cápacidade de ser Full-Stack eu prefiro focar no Front-End, desenvolvimento Web. Já trabalhei tanto com Mobile tanto quanto Back-End, servidor. Como falei, não é o meu foco, mas eu consigo entregar algo caso necessário.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default About;
