export default function Header() {
    return (
        <header className="w-full">
            <div className="flex flex-row h-full">
                <div className="basis-1/5 flex justify-end pr-2">
                    <div className="circle-1 rounded-full ">
                    </div>
                </div>
                <div className="basis-4/5 title-container">
                    <div className="header-top-right-container">
                    <p className="text-primary font-bold text-4xl">Jonathan Banon</p>
                    <p className="text-primary font-bold text-5xl">Développeur React / Symfony</p>
                    </div>
                </div>
            </div>
        </header>
    );
}