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
                       <p>Sou um programador Full-Stack freelancer e autodidata, movido pela paixão pela programação. Aprendi a programar por conta própria, guiado pelo prazer de criar soluções inovadoras. Apesar de não possuir certificações formais, tenho plena confiança nas minhas habilidades, consolidadas por meio de experiências práticas e projetos desafiadores.
<br />
Meu conhecimento abrange diversas tecnologias, proporcionando-me a versatilidade para atuar como Full-Stack. No entanto, opto por focar no Front-End, onde minha paixão pelo desenvolvimento web encontra sua expressão mais genuína. Ao longo da minha jornada, também acumulei experiência em projetos de Mobile e Back-End, demonstrando minha adaptabilidade e habilidade de oferecer soluções holísticas, mesmo que essa não seja minha especialidade primária.
<br />
Estou aberto a desafios e comprometido em fornecer soluções de alta qualidade. Se surgir a necessidade de abordar aspectos do desenvolvimento além do Full-Stack, posso garantir a entrega de resultados robustos e satisfatórios.
</p>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default About;
