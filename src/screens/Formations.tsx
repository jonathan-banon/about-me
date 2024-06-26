export default function Formations() {
    return (
        <div className="formations-container">
            <div className="w-4/5 animate__animated  animate__fadeInRight" style={{ animationDelay: '0s' }}>
                <ul className="list-disc ">
                    <p className="font-bold text-2xl ">Développeur web et mobile avancé Wild Code School : 10/22 - 11/23</p>
                    <li className="ml-16">
                        <p className="text-xl">Titre RNCP niveau 6 Concepteur développeur d'applicaitons React / React Native (Bac + 3)</p>
                    </li>
                </ul>
            </div>
            <div className="w-4/5 animate__animated  animate__fadeInRight" style={{ animationDelay: '1s' }}>
                <ul className="list-disc">
                    <p className="font-bold text-2xl">Développeur web Symfony Wild Code School : 02/21 - 07/21</p>
                    <li className="ml-16">
                        <p className="text-xl">Certificat validation de formation Symfony</p>
                    </li>
                </ul>
            </div>
            <div className="w-4/5 animate__animated  animate__fadeInRight" style={{ animationDelay: '2s' }}>
                <ul className="list-disc">
                    <p className="font-bold text-2xl">Brevet Supérieur Sous-officier Armée de l'Air : 2021</p>
                    <li className="ml-16">
                        <p className="text-xl">Diplôme militaire sous-officier supérieur (Bac + 2)</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}