
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiBoxingGloveBold } from "react-icons/pi";
import { MdOutlineSportsMotorsports } from "react-icons/md";

export default function SideBar() {
    return (

        <div className="sideBar-container basis-1/4 ">
            <div>
                <p className="font-bold text-primary text-2xl">CONTACT</p>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <MdOutlinePhoneAndroid />
                    </IconContext.Provider>
                    <p>06 .. .. .. ..</p>
                </div>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                    <p>monMail@gmail.com</p>
                </div>
            </div>
            <div>
                <p className="font-bold text-primary text-2xl">LiENS UTILES</p>
                <div>
                    <div className="logo-container">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <p>Github</p>
                    </div>
                    <div className="logo-container">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                        <p>monMail@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-bold text-primary text-2xl">COMPETENCES RELATIONNELLES</p>
                <p>- Esprit déquipe</p>
                <p>- Enthousiaste</p>
                <p>- Adaptabilité</p>
            </div>
            <div>
                <p className="font-bold text-primary text-2xl">LOISIRS</p>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <PiBoxingGloveBold />
                    </IconContext.Provider>
                    <p>Combattant dans l'âme</p>
                </div>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <MdOutlineSportsMotorsports />
                    </IconContext.Provider>
                    <p>Bébé motard</p>
                </div>
            </div>
        </div>
    );
}