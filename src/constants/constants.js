import { SiExpo, SiMongodb, SiAppwrite, SiExpress, SiFirebase, SiVite, SiJavascript, SiTypescript, SiReactquery, SiFramer, SiRedux, SiTailwindcss, SiOpenai } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";


export const projectsData = [
    {
        title: "Hoobank",
        description:
            "Um projeto simples que visa criar uma landingpage de um site de banco.",
        image: "images/1.png",
        tags: [SiVite, SiTailwindcss, FaReact],
        source: "https://rafaelsfdc.github.io/BankWebsite/",
        visit: "https://github.com/RafaelSFDC/BankWebsite",
        id: 0,
    },
    // {
    //     title: "OpenAI",
    //     description:
    //         "Projeto que utiliza de uma inteligencia artificial para gerar imagens. Utilizando Back-End para armazenar os dados.",
    //     image: "images/2.png",
    //     tags: [SiMongodb, FaReact, SiOpenai, SiExpress],
    //     source: "https://openai-front-end.onrender.com",
    //     visit: "https://github.com/RafaelSFDC/OpenAI",
    //     id: 1,
    // },
    {
        title: "Hilink",
        description:
            "Uma landingpage sobre um aplicativo de viagens",
        image: "images/3.png",
        tags: [TbBrandNextjs, SiTailwindcss, SiTypescript, TbBrandFramerMotion],
        source: "https://travelapp-5kb2.onrender.com/",
        visit: "https://github.com/RafaelSFDC/travel_app",
        id: 2,
    },
    {
        title: "Flexibble",
        description:
            "Uma plataforma para exibir projeto de programadores. Utilizando Back-End para armazenar os dados. Processo de CRUD completo.",
        image: "images/4.png",
        tags: [SiVite, SiTailwindcss, SiTypescript, SiAppwrite, TbBrandFramerMotion],
        source: "https://flexibblevite.onrender.com/",
        visit: "https://github.com/RafaelSFDC/FlexibbleVite",
        id: 3,
    },
];
