import { useEffect } from 'react';

export default function ExpPrMobile() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px 0px 0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('okkk')
                    entry.target.classList.add('animate__fadeIn', 'visible')
                } else {
                    entry.target.classList.remove('animate__fadeIn', 'visible')
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="flex flex-col items-center p-2.5 mt-11 text-white">
            <div className="mob-title">
                <h1>MES EXPÉRIENCES PROFESSIONNELLES</h1>
            </div>
            <div className='flex margin-mob'>
                <div className="flex flex-col items-center">
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                    <div className="line line-mob "></div>
                    <div className="circle circle-mob "></div>
                </div>
                <div className='flex margin-mob'>
                    <div className='pr-4'>
                        <div className=" exp-container exp-mob animate__animated" >
                            <p className="text-sm font-bold">Sous officier dans l’armée de l'air :<br></br> 2010 - 2021</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li>Chef d’équipe (Sous-officier supérieur)</li>
                                <li>Technicien matériel servitude aéronautique</li>
                                <li>Missions de sécurité intérieure <br></br>(Vigipirate / Cuirasse)</li>
                            </ul>
                        </div>
                        <div className=" exp-container exp-mob animate__animated" >
                            <p className="text-sm font-bold">Projets Wild Code School Bordeaux : <br></br>02/21 - 07/21</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Site e-commerce  B to C pour une jeune start-up (Symfony)</li>
                                <li className='text-xs'>Intégration selon maquette</li>
                            </ul>
                        </div>
                        <div className=' exp-container exp-mob animate__animated' >
                            <p className="text-sm font-bold">Plateforme e-sport (bénévolat) :<br></br> 08/21 - 09/21</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Migration projet MVC vers Symfony 5</li>
                                <li className='text-xs'>Intégration selon maquette</li>
                            </ul>
                        </div>
                        <div className=" exp-container exp-mob animate__animated" >
                            <p className="text-sm font-bold">WDM studio  (stage) : <br></br>09/21 - 12/21</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Intégration selon maquette</li>
                                <li className='text-xs'>Gestion API sur Symfony</li>
                            </ul>
                        </div>
                        <div className=' exp-container exp-mob animate__animated' >
                            <p className="text-sm font-bold">Groupe QERYS (CDI) : <br></br>03/22 - 06/22</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Maintenance applications internes (Symfony, Zend)</li>
                                <li className='text-xs'>Collaboration en méthodes agiles</li>
                                <li className='text-xs'>Montée en compétences Devops <br></br>(Docker, Jenkins)</li>
                            </ul>
                        </div>
                        <div className=" exp-container exp-mob animate__animated">
                            <p className="text-sm font-bold">Projet Wid Code School Bordeaux : <br></br>03/23 - 11/23</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Blog interactif avec version mobile <br></br>(React / React Native)</li>
                                <li className='text-xs'>Déploiement et intégration continue <br></br>(Docker / Github Actions)</li>
                            </ul>
                        </div>
                        <div className=" exp-container exp-mob animate__animated">
                            <p className="text-sm font-bold">AIO (contrat pro + CDD) : <br></br>03/23 - actuellement en poste</p>
                            <ul className='text-xs list-disc ml-6'>
                                <li className='text-xs'>Intégration selon maquette en Vue.js</li>
                                <li className='text-xs'>Gestion de projet en bureau d’étude </li>
                                <li className='text-xs'>Développement d’applications internes <br></br>(Python, Node-red, Docker)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
