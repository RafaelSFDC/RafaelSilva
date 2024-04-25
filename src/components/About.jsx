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
                    {/* <img src="images/laptop.jpg" alt="" /> */}
                    <div className="content">
                        <h3>Sobre mim</h3>
                        <p>Meu nome é Rafael e sou Desenvolvedor Web. Comecei a estudar programação por que eu me sempre gostei de saber como as tecnologias funcionavam. Aprendi a programar por conta da minha paixão pela programação.
                            <br />
                            Decidi começar pelo Front-End e não me arrependo. Apesar do JavaScript ser uma linguagem totalmente caótica, eu gostei de aprender e me aprofundar na programação. Embora gostar mais de front-end, também me interesso por tecnologias de back-end.
                            <br />
                            Atualmente sou programador FreeLancer, mas não me importaria de trabalhar fixamente.
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default About;
