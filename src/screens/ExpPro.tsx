import { useEffect } from 'react';

export default function ExpPro() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.exp-container-3');

                if (square) {
                    if (entry.isIntersecting) {
                        console.log("hello");
                        square.classList.add('animate__fadeInRightBig');
                    } else {
                        square.classList.remove('animate__fadeInRightBig');
                    }
                }
            });
        });

        const squareWrapper = document.querySelector('.col-span-5');
        if (squareWrapper) {
            observer.observe(squareWrapper);
        }

        return () => {
            if (squareWrapper) {
                observer.unobserve(squareWrapper);
            }
        };
    }, []);

    return (
        <div className="grid grid-cols-6 overflow-scroll p-2.5">
            <div className="flex flex-col items-center">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="col-span-5">
                <div className="exp-container ">
                <h1 className="animate__animated animate__bounce">An animated element</h1>
                    <p className="text-xl font-bold animate__fadeInRightBig">Sous officier dans l’armée de l'air : 2010 - 2021</p>
                    <p>Chef d’équipe ( Sous-officier supérieur )
                        Technicien matériel servitude aéronautique
                        Mission de sécurité intérieure ( Vigipirate / Cuirasse )</p>
                </div>
                <div className="exp-container">
                    <p className="text-xl font-bold">Projets Wild Code School Bordeaux : 02/21 - 07/21</p>
                    <p>Site e-commerce  B to C pour une jeune start-up (Symfony)
                        Plateforme de jeux en simple MVC avec utilisation API REST</p>
                </div>
                <div className="exp-container">
                    <p className="text-xl font-bold">Plateforme e-sport (bénévolat) : 08/21 - 09/21</p>
                    <p>Migration projet MVC vers Symfony 5
                        Intégration selon maquette</p>
                </div>
                <div className="exp-container">
                    <p className="text-xl font-bold">WDM studio  (stage) : 09/21 - 12/21</p>
                    <p>Intégration selon maquette
                        Gestion API sur Symfony</p>
                </div>
                <div className="exp-container">
                    <p className="text-xl font-bold">Groupe QERYS (CDI) : 03/22 - 06/22</p>
                    <p>Intégration selon maquette
                        Gestion API sur Symfony</p>
                </div>
                <div className="exp-container">
                    <p className="text-xl font-bold">Projet Wid Code School Bordeaux : 03/23 - 11/23</p>
                    <p>Blog interactif avec version mobile ( React / React Native )
                        Déploiement et intégration continue ( Docker / Github Actions )</p>
                </div>
                <div className="exp-container-3">
                    <p className="text-xl font-bold">AIO (contrat pro + CDD) : 03/23 - actuellement en poste</p>
                    <p>Chef d’équipe ( Sous-officier supérieur )
                        Technicien matériel servitude aéronautique
                        Mission de sécurité intérieure ( Vigipirate / Cuirasse )</p>
                </div>
            </div>
            <div className="square-wrapper">
                <div className="square"></div>
            </div>
        </div>
    );
}
