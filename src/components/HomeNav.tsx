import { IconContext } from "react-icons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

export default function HomeNav() {
    const location = useLocation()
    console.log(location)
    return (
        <div className="nav-container">
            <IconContext.Provider value={{ size: '30px', color: 'white' }}>
                <BiSolidLeftArrow />
                <p className="text-xl text-secondary">{location.pathname}</p>
                <BiSolidRightArrow />
            </IconContext.Provider>
        </div>
    )
}