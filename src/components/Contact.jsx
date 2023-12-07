import AnimatedContainer from './AnimatedContainer';
import { CgComment } from 'react-icons/cg';
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
const Contact = () => {

    return (
        <AnimatedContainer>
            <div className='aboutContainer'>
                <h2 className="title">
                    <CgComment />
                    Contato
                </h2>
                <div className="contact">
                    <div>
                        <FaWhatsapp />
                        (21) 97967-4045
                    </div>
                    <div>
                        <MdAttachEmail />
                        rafael.20.03@hotmail.com
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    )
};

export default Contact;
