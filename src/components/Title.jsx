function Title() {
    return (
        <section id="header" >
            <div className="w-full h-screen flex flex-col justify-center bg-primary sm:grid sm:grid-cols-2 sm:items-center">
                <img src="/src/assets/logo.png" className="w-20 h-20 ml-8 sm:hidden" />
                <div className="flex flex-col mx-10">
                    <p className="pb-5 text-[50px] text-white font-bold">Quran Verse Finder</p>
                    <p className="pb-5 text-sm text-white">
                        Sit culpa sint magna minim. Incididunt commodo
                        est irure aliqua exercitation Lorem nisi nisi culpa quis do tempor.
                        Amet aute Lorem eiusmod et amet officia cupidatat est eu elit tempor nulla in et.
                    </p>
                    <a href="#main-search" className="flex flex-row items-center justify-center w-52 bg-secondary hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
                        Get Started
                        <svg className="ml-3 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </a>
                </div>
                <div className="hidden sm:flex sm:justify-center">
                    <img src="/src/assets/logo.png" className="w-80 h-80 relative" />
                </div>
            </div>
        </section>
    );
}

export default Title