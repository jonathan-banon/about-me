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
            <div className='flex'>
                <div className='text-end pr-6'>
                    <div className=" exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">Sous officier dans l’armée de l'air</p>
                        <p className='text-xs'>Chef d’équipe (Sous-officier supérieur)</p>
                        <p className='text-xs'>Technicien matériel servitude aéronautique</p>
                        <p className='text-xs'>Missions de sécurité intérieure (Vigipirate / Cuirasse)</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">02/21 - 07/21</p>
                    </div>
                    <div className=" exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">Plateforme e-sport (bénévolat)</p>
                        <p className='text-xs'>Migration projet MVC vers Symfony 5</p>
                        <p className='text-xs'>Intégration selon maquette</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">09/21 - 12/21</p>
                    </div>
                    <div className=" exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">Groupe QERYS (CDI)</p>
                        <p className='text-xs'>Intégration selon maquette</p>
                        <p className='text-xs'>Gestion API sur Symfony</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">03/23 - 11/23</p>
                    </div>
                    <div className=" exp-container exp-mob animate__animated">
                        <p className="text-sm font-bold">AIO (contrat pro + CDD)</p>
                        <p className='text-xs'>Intégration selon maquette en Vue.js</p>
                        <p className='text-xs'>Gestion de projet en bureau d’étude </p>
                        <p className='text-xs'>Développement d’applications internes <br></br>(Python, Node-red, Docker)</p>
                    </div>

                </div>
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
                <div className='margin-col-3 pl-6'>
                    <div className='  exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">2010 - 2021</p>
                    </div>
                    <div className="  exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">Projets Wild Code School Bordeaux</p>
                        <p className='text-xs'>Site e-commerce  B to C pour une jeune start-up (Symfony)</p>
                        <p className='text-xs'>Plateforme de jeux en simple MVC avec utilisation API REST</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">08/21 - 09/21</p>
                    </div>
                    <div className=" exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">WDM studio (stage)</p>
                        <p className='text-xs'>Intégration selon maquette</p>
                        <p className='text-xs'>Gestion API sur Symfony</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">03/22 - 06/22</p>
                    </div>
                    <div className=" exp-container exp-mob animate__animated" >
                        <p className="text-sm font-bold">Projet Wid Code School Bordeaux</p>
                        <p className='text-xs'>Blog interactif avec version mobile <br></br>(React / React Native)</p>
                        <p className='text-xs'>Déploiement et intégration continue <br></br> (Docker / Github Actions)</p>
                    </div>
                    <div className=' exp-container exp-mob animate__animated' >
                        <p className="text-sm font-bold">03/23 - Actuellement en poste</p>
                    </div>
                </div>
            </div>
        </div>
   );
}
