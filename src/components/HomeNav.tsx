import { IconContext } from "react-icons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export default function HomeNav() {
    return (
        <div className="nav-container">
            <IconContext.Provider value={{ size: '30px' , color:'white'}}>
                <BiSolidLeftArrow />
                <BiSolidRightArrow />
            </IconContext.Provider>
        </div>
    )
}