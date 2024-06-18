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
import { FaCss3Alt } from "react-icons/fa";

export default function SkillsMobile() {
    return (
        <IconContext.Provider value={{ size: '40px', color: 'white' }}>
            <div className="skills-container skills-mob">
                <div className="mob-title">
                    <h1 >MES FORMATIONS</h1>
                </div>
                <div>
                    <p className="text-center text-2xl font-bold mb-7">Languages</p>
                    <div className="skills-bg">
                        <div className="skills relative">
                            <div className="skill-container absolute top-0 left-0">
                                <IoLogoJavascript />
                                <p>Javascript</p>
                            </div>
                            <div className="skill-container absolute top-0 right-0">
                                <FaPhp />
                                <p>PHP</p>
                            </div>
                            <div className="skill-container absolute bottom-0 left-0">
                                <SiTypescript />
                                <p>Typescript</p>
                            </div>
                            <div className="skill-container absolute bottom-0 right-0">
                                <FaCss3Alt />
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-2xl font-bold mb-7">Outils</p>
                    <div className="skills-bg">
                        <div className="skills relative">
                            <div className="skill-container absolute top-0 left-0">
                                <SiMysql />
                                <p>MySQL</p>
                            </div>
                            <div className="skill-container  absolute top-0 right-0">
                                <GrGraphQl />
                                <p>GraphQL</p>
                            </div>
                            <div className="skill-container  absolute bottom-0 left-0">
                                <FaDocker />
                                <p>Docker</p>
                            </div>
                            <div className="skill-container absolute bottom-0 right-0">
                                <FaGitAlt />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-2xl font-bold mb-7">Technologies</p>
                    <div className="skills-bg">
                        <div className="skills relative">
                            <div className="skill-container absolute top-0 left-0">
                                <FaVuejs className="" />
                                <p>Vue.Js</p>
                            </div>
                            <div className="skill-container absolute top-0 right-0">
                                <FaSymfony className="" />
                                <p>Symfony</p>
                            </div>
                            <div className="skill-container absolute bottom-0 left-0">
                                <FaReact className="" />
                                <p>React</p>
                            </div>
                            <div className="skill-container absolute bottom-0 right-0">
                                <TbBrandReactNative className="" />
                                <p className="text-center">React Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}