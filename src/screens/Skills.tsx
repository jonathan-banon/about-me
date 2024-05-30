import { IconContext } from "react-icons";
import { FaSymfony } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaVuejs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";

export default function Skills() {
    return (
        <div>
            <IconContext.Provider value={{ size: '40px', color: 'white' }}>
                <div>
                    <FaVuejs />
                    <FaSymfony />
                    <FaReact />
                    <TbBrandReactNative />
                </div>
                <div>
                    <SiMysql />
                    <GrGraphQl />
                </div>
                <div>
                    <IoLogoJavascript />
                    <FaPhp />
                    <SiTypescript />
                </div>
                <div>
                    <FaDocker />
                    <FaGitAlt />
                </div>
            </IconContext.Provider>
        </div>
    )
}