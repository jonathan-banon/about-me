export default function Header () {
    return (
        <header className="h-full">
            <div className="flex flex-row h-full">
                <div className="basis-1/4">
                    <div className="circle-1 rounded-full">
                        <div className="circle-2 rounded-full"></div>
                    </div>
                </div>
                <div className="basis-3/4 title-container">3/4</div>
            </div>
        </header>
    );
}