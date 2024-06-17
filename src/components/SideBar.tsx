
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiBoxingGloveBold } from "react-icons/pi";
import { MdOutlineSportsMotorsports } from "react-icons/md";

export default function SideBar() {
    return (

        <div className="sideBar-container text-primary p-2.5">
            <div>
                <p className="font-bold text-primary text-xl">CONTACT</p>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <MdOutlinePhoneAndroid />
                    </IconContext.Provider>
                    <p>06 40 55 97 17</p>
                </div>
                <div className="logo-container">
                    <IconContext.Provider value={{ size: '30px' }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                    <a className="hover:font-bold" href="mailto:j.banon01@gmail.com">j.banon01@gmail.com</a>
                </div>
            </div>
            <div>
                <p className="font-bold text-primary text-xl">LIENS UTILES</p>
                <div>
                    <div className="logo-container">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaGithub />
                        </IconContext.Provider>
                        <a className="hover:font-bold" href="https://github.com/jonathan-banon" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <div className="logo-container">
                        <IconContext.Provider value={{ size: '30px' }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                        <a className="hover:font-bold" href="https://www.linkedin.com/in/jonathan-banon/" target="_blank" rel="noreferrer">Linkedin</a>
                    </div>
                </div>
            </div>
            <div>
                <ul className="list-disc">
                    <p className="font-bold text-primary text-xl">COMPETENCES RELATIONNELLES</p>
                    <li className="ml-4">Esprit d'équipe</li>
                    <li className="ml-4">Enthousiaste</li>
                    <li className="ml-4"> Adaptabilité</li>
                </ul>
            </div>
            <div>
                <p className="font-bold text-primary text-xl">LOISIRS</p>
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