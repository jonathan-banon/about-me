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
    console.log(location.pathname)
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
    return (
        <div className="nav-container h-1/6 relative ">
            <IconContext.Provider value={{ size: '40px', color: 'white' }}>
                {(location.pathname === "/Formations" || location.pathname === "/ExpPro") && (
                    <BiSolidLeftArrow className=" cursor-pointer absolute left-20" onClick={() => navigate(previousPath)} />
                )}
                <p className="text-3xl font-bold w-1/2 text-center">{title}</p>
                {(location.pathname === "/" || location.pathname === "/Formations") && (
                    <BiSolidRightArrow className=" cursor-pointer absolute right-20" onClick={() => navigate(nextPath)} />
                )}
            </IconContext.Provider>
        </div>
    )
}