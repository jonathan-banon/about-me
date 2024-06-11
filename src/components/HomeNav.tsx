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
            title = "MES COMPÉTENCES TECHNIQUES";
            previousPath = "/ExpPro";
            nextPath = "/Formations";
            break;
        case "/Formations":
            title = "MES FORMATIONS";
            previousPath = "/";
            nextPath = "/ExpPro";
            break;
        case "/ExpPro":
            title = "MES EXPÉRIENCES PROFESSIONNELLES";
            previousPath = "/Formations";
            nextPath = "/Resume";
            break;
        case "/Resume":
            title = "MON RÉSUMÉ";
            previousPath = "/ExpPro";
            nextPath = "/";
            break;
        default:

    }
    return (
        <div className="nav-container h-1/6 relative ">
            <IconContext.Provider value={{ size: '40px', color: 'white' }}>
                {location.pathname !== "/" && (
                    <BiSolidLeftArrow className=" cursor-pointer absolute left-20" onClick={() => navigate(previousPath)} />
                )}
                <p className="text-3xl font-bold w-1/2 text-center">{title}</p>
                {location.pathname !== "/Resume"  && (
                    <BiSolidRightArrow className=" cursor-pointer absolute right-20" onClick={() => navigate(nextPath)} />
                )}
            </IconContext.Provider>
        </div>
    )
}