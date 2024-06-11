import { IconContext } from "react-icons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function HomeNav() {
    const location = useLocation();
    const navigate = useNavigate();

    let title = "";
    let previousPath = "About-me/";
    let nextPath = "/";
    switch (location.pathname) {
        case "About-me/":
            title = "MES COMPÉTENCES TECHNIQUES";
            previousPath = "About-me/ExpPro";
            nextPath = "About-me/Formations";
            break;
        case "About-me/Formations":
            title = "MES FORMATIONS";
            previousPath = "About-me/";
            nextPath = "About-me/ExpPro";
            break;
        case "About-me/ExpPro":
            title = "MES EXPÉRIENCES PROFESSIONNELLES";
            previousPath = "About-me/Formations";
            nextPath = "About-me/Resume";
            break;
        case "About-me/Resume":
            title = "MON RÉSUMÉ";
            previousPath = "About-me/ExpPro";
            nextPath = "About-me/";
            break;
        default:

    }
    return (
        <div className="nav-container h-1/6 relative ">
            <IconContext.Provider value={{ size: '40px', color: 'white' }}>
                {location.pathname !== "About-me/" && (
                    <BiSolidLeftArrow className=" cursor-pointer absolute left-20" onClick={() => navigate(previousPath)} />
                )}
                <p className="text-3xl font-bold w-1/2 text-center">{title}</p>
                {location.pathname !== "About-me/Resume"  && (
                    <BiSolidRightArrow className=" cursor-pointer absolute right-20" onClick={() => navigate(nextPath)} />
                )}
            </IconContext.Provider>
        </div>
    )
}