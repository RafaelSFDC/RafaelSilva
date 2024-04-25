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
<<<<<<< HEAD
                        <p>Meu nome é Rafael e sou Desenvolvedor Web. Comecei a estudar programação por que eu me sempre gostei de saber como as tecnologias funcionavam. Aprendi a programar por conta da minha paixão pela programação.
                            <br />
                            Decidi começar pelo Front-End e não me arrependo. Apesar do JavaScript ser uma linguagem totalmente caótica, eu gostei de aprender e me aprofundar na programação. Embora gostar mais de front-end, também me interesso por tecnologias de back-end.
                            <br />
                            Atualmente sou programador FreeLancer, mas não me importaria de trabalhar fixamente.
                        </p>
=======
                       <p>Sou um programador Full-Stack freelancer e autodidata, movido pela paixão pela programação. Aprendi a programar por conta própria, guiado pelo prazer de criar soluções inovadoras. Apesar de não possuir certificações formais, tenho plena confiança nas minhas habilidades, consolidadas por meio de experiências práticas e projetos desafiadores.
<br />
Meu conhecimento abrange diversas tecnologias, proporcionando-me a versatilidade para atuar como Full-Stack. No entanto, opto por focar no Front-End, onde minha paixão pelo desenvolvimento web encontra sua expressão mais genuína. Ao longo da minha jornada, também acumulei experiência em projetos de Mobile e Back-End, demonstrando minha adaptabilidade e habilidade de oferecer soluções holísticas, mesmo que essa não seja minha especialidade primária.
<br />
Estou aberto a desafios e comprometido em fornecer soluções de alta qualidade. Se surgir a necessidade de abordar aspectos do desenvolvimento além do Full-Stack, posso garantir a entrega de resultados robustos e satisfatórios.
</p>
>>>>>>> 19f52cf078428814b7913324a1a99952286a9b44
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default About;
