export default function HeaderMobile() {
    return (
        <header className="w-full">
            <div className="flex flex-row h-full">
                <div className="basis-1/5 flex justify-end pr-2">
                    <div className="circle-1 rounded-full ">
                    </div>
                </div>
                <div className="basis-4/5 title-container">
                    <div className="header-top-right-container">
                    <p className="text-primary text-4xl myTitle">Jonathan Banon</p>
                    <p className="text-primary text-5xl myTitle">Développeur React / Symfony</p>
                    </div>
                </div>
            </div>
        </header>
    );
}