import quranLogo from '../assets/logo.png';

function Title() {
    return (
        <section id="header" >
            <div className="w-full h-screen flex flex-col justify-center bg-primary sm:grid sm:grid-cols-2 sm:items-center">
                <img src={quranLogo} className="w-14 h-14 ml-8 sm:hidden" />
                <div className="flex flex-col mx-10">
                    <p className="pb-5 text-[40px] lg:text-[50px] text-white font-bold">Quran Verse Finder</p>
                    <p className="pb-5 text-[10px] lg:text-[15px] text-white">
                        Jelajahi data surah Al-Quran yang memungkinkan Anda untuk menggali lebih dalam ke dalam
                        hikmah dan kebijaksanaan yang terkandung dalam Al-Quran. Melalui teknologi canggih,
                        kami telah menghadirkan <b>Quran Verse Finder</b> ke dalam bentuk yang interaktif dan informatif.
                    </p>
                    <a href="#main-search" className="w-32 lg:w-52 text-[10px] lg:text-[15px] flex flex-row items-center justify-center bg-secondary hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
                        Memulai
                        <svg className="ml-3 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </a>
                </div>
                <div className="hidden sm:flex sm:justify-center">
                    <img src={quranLogo} alt='Quran Verse Finder Logo' className="w-52 h-52 lg:w-80 lg:h-80" />
                </div>
            </div>
        </section>
    );
}

export default Title