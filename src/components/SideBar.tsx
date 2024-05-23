
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function SideBar() {
    return (

        <div className="sideBar-container">
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

                </div>
                <div></div>
                <div></div>
            </div>
            <div>
                <p className="font-bold text-primary text-2xl">COMPETENCES RELATIONNELLES</p>
                <p>- Esprit déquipe</p>
                <p>- Esprit déquipe</p>
                <p>- Esprit déquipe</p>
            </div>
            <div>
                <p className="font-bold text-primary text-2xl">LOISIRS</p>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}