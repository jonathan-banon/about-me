export default function Header () {
    return (
        <header>
            <div className="flex flex-row h-full">
                <div className="basis-1/4 flex justify-end pr-2">
                    <div className="circle-1 rounded-full ">
                    </div>
                </div>
                <div className="basis-3/4 title-container">
                <div className="header-top-right-container">
                    <p className="text-primary font-bold text-4xl">Jonathan Banon</p>
                    <p className="text-primary font-bold text-5xl">Développeur React / Symfony</p>
                    <p className="px-3 text-l">Tout juste diplômé du titre RNCP concepteur développeur d'application (Bac + 3) via une alternance React / React-native d'un an, j’ai aussi eu la chance de me développer sur plusieurs technologies durant mon parcours (Symfony/Docker/MySQL). J’aime le travail en équipe et le partage de connaissances mais je suis également capable de travailler seul.</p>
                </div>
                </div>
            </div>
        </header>
    );
}