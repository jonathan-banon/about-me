import { useEffect } from 'react';

export default function ExpPro() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-45% 0px 0px 0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
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
        <div className=" flex justify-center overflow-scroll p-2.5 mt-11">
            <div className='flex'>
                <div className='text-end pr-6'>
                    <div className=" exp-container animate__animated" >
                        <p className="text-2xl font-bold">Sous officier dans l’armée de l'air</p>
                        <p className='text-xl'>Chef d’équipe (Sous-officier supérieur)</p>
                        <p className='text-xl'>Technicien matériel servitude aéronautique</p>
                        <p className='text-xl'>Missions de sécurité intérieure (Vigipirate / Cuirasse)</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">02/21 - 07/21</p>
                    </div>
                    <div className=" exp-container animate__animated" >
                        <p className="text-2xl font-bold">Plateforme e-sport (bénévolat)</p>
                        <p className='text-xl'>Migration projet MVC vers Symfony 5</p>
                        <p className='text-xl'>Intégration selon maquette</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">09/21 - 12/21</p>
                    </div>
                    <div className=" exp-container animate__animated" >
                        <p className="text-2xl font-bold">Groupe QERYS (CDI)</p>
                        <p className='text-xl'>Intégration selon maquette</p>
                        <p className='text-xl'>Gestion API sur Symfony</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">03/23 - 11/23</p>
                    </div>
                    <div className=" exp-container animate__animated">
                        <p className="text-2xl font-bold">AIO (contrat pro + CDD)</p>
                        <p className='text-xl'>Intégration selon maquette en Vue.js</p>
                        <p className='text-xl'>Gestion de projet en bureau d’étude </p>
                        <p className='text-xl'>Développement d’applications internes <br></br>(Python, Node-red, Docker)</p>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                    <div className="line "></div>
                    <div className="circle "></div>
                </div>
                <div className='margin-col-3 pl-6'>
                    <div className='  exp-container animate__animated' >
                        <p className="text-2xl font-bold">2010 - 2021</p>
                    </div>
                    <div className="  exp-container animate__animated" >
                        <p className="text-2xl font-bold">Projets Wild Code School Bordeaux</p>
                        <p className='text-xl'>Site e-commerce  B to C pour une jeune start-up (Symfony)</p>
                        <p className='text-xl'>Plateforme de jeux en simple MVC avec utilisation API REST</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">08/21 - 09/21</p>
                    </div>
                    <div className=" exp-container animate__animated" >
                        <p className="text-2xl font-bold">WDM studio (stage)</p>
                        <p className='text-xl'>Intégration selon maquette</p>
                        <p className='text-xl'>Gestion API sur Symfony</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">03/22 - 06/22</p>
                    </div>
                    <div className=" exp-container animate__animated" >
                        <p className="text-2xl font-bold">Projet Wid Code School Bordeaux</p>
                        <p className='text-xl'>Blog interactif avec version mobile <br></br>(React / React Native)</p>
                        <p className='text-xl'>Déploiement et intégration continue <br></br> (Docker / Github Actions)</p>
                    </div>
                    <div className=' exp-container animate__animated' >
                        <p className="text-2xl font-bold">03/23 - Actuellement en poste</p>
                    </div>
                </div>
            </div>
        </div>
   );
}
