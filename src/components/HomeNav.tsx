import { IconContext } from "react-icons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function HomeNav() {
    const location = useLocation();
    const navigate = useNavigate();

    let title = "";
    let previousPath = "/";
    let nextPath = "/";

    switch (location.pathname) {
        case "/":
            title = "COMPÉTENCES TECHNIQUES";
            previousPath = "/ExpPro";
            nextPath = "/Formations";
            break;
        case "/Formations":
            title = "FORMATIONS";
            previousPath = "/";
            nextPath = "/ExpPro";
            break;
        case "/ExpPro":
            title = "EXPERIENCES PROFESSIONNELLES";
            previousPath = "/Formations";
            nextPath = "/";
            break;
        default:

    }
    console.log(location.pathname)
    console.log(title)
    return (
        <div className="nav-container h-1/6">
            <IconContext.Provider value={{ size: '40px', color: 'white' }}>
                <BiSolidLeftArrow onClick={() => navigate(previousPath)} />
                <p className="text-2xl font-bold w-2/6 text-center">{title}</p>
                <BiSolidRightArrow onClick={() => navigate(nextPath)} />
            </IconContext.Provider>
        </div>
    )
}