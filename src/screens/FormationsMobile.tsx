
export default function FormationsMobile() {
    return (
        <div className="formations-container formations-mob h-fit text-white">
            <div className="mob-title">
                <h1>MES FORMATIONS</h1>
            </div>
            <div className=" p-2.5 animate__animated  animate__fadeInRight" style={{ animationDelay: '0s' }}>
                <ul className="list-disc ">
                    <p className="font-bold text-base ">Développeur web et mobile avancé Wild Code School : 10/22 - 11/23</p>
                    <li className="ml-16">
                        <p className="text-base">Titre RNCP niveau 6 Concepteur développeur d'applicaitons React / React Native (Bac + 3)</p>
                    </li>
                </ul>
            </div>
            <div className="mt-10 p-2.5 animate__animated  animate__fadeInRight" style={{ animationDelay: '1s' }}>
                <ul className="list-disc">
                    <p className="font-bold text-base">Développeur web Symfony Wild Code School : 02/21 - 07/21</p>
                    <li className="ml-16">
                        <p className="text-base">Certificat validation de formation Symfony</p>
                    </li>
                </ul>
            </div>
            <div className="mt-10 p-2.5 animate__animated  animate__fadeInRight" style={{ animationDelay: '2s' }}>
                <ul className="list-disc">
                    <p className="font-bold text-base">Brevet Supérieur Sous-officier Armée de l'Air : 2021</p>
                    <li className="ml-16">
                        <p className="text-base">Diplôme militaire sous-officier supérieur (Bac + 2)</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}