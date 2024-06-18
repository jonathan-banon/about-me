
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiBoxingGloveBold } from "react-icons/pi";
import { MdOutlineSportsMotorsports } from "react-icons/md";

export default function SideBarMobile() {
    return (

        <div className="text-white p-2.5 sideBar-mob-container">
            <div className="flex justify-between h-1/2">
                <div className="w-1/2">
                    <p className="font-bold text-white text-base">CONTACT</p>
                    <div className="logo-container mt-6">
                        <IconContext.Provider value={{ size: '20px' }}>
                            <MdOutlinePhoneAndroid />
                        </IconContext.Provider>
                        <p className="text-xs">06 40 55 97 17</p>
                    </div>
                    <div className="logo-container mt-6">
                        <IconContext.Provider value={{ size: '20px' }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                        <a className="text-xs" href="mailto:j.banon01@gmail.com">j.banon01@gmail.com</a>
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="font-bold text-white text-base">LIENS UTILES</p>
                    <div>
                        <div className="logo-container mt-6">
                            <IconContext.Provider value={{ size: '20px' }}>
                                <FaGithub />
                            </IconContext.Provider>
                            <a className="text-xs" href="https://github.com/jonathan-banon" target="_blank" rel="noreferrer">Github</a>
                        </div>
                        <div className="logo-container mt-6">
                            <IconContext.Provider value={{ size: '20px' }}>
                                <FaLinkedin />
                            </IconContext.Provider>
                            <a className="text-xs" href="https://www.linkedin.com/in/jonathan-banon/" target="_blank" rel="noreferrer">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between h-1/2">
                <div className="w-1/2">
                    <p className="font-bold text-white text-base">COMPETENCES RELATIONNELLES</p>
                    <ul className="list-disc text-xs mt-6 leading-6">
                        <li className="ml-4">Esprit d'équipe</li>
                        <li className="ml-4">Enthousiaste</li>
                        <li className="ml-4"> Adaptabilité</li>
                    </ul>
                </div>
                <div className="w-1/2 mt-6">
                    <p className="font-bold text-white text-base">LOISIRS</p>
                    <div className="logo-container mt-6">
                        <IconContext.Provider value={{ size: '20px' }}>
                            <PiBoxingGloveBold />
                        </IconContext.Provider>
                        <p className="text-xs">Combattant dans l'âme</p>
                    </div>
                    <div className="logo-container mt-6">
                        <IconContext.Provider value={{ size: '20px' }}>
                            <MdOutlineSportsMotorsports />
                        </IconContext.Provider>
                        <p className="text-xs">Bébé motard</p>
                    </div>
                </div>
            </div>
        </div>
    );
}