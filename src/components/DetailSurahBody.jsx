import { useLocation } from 'react-router-dom';

function DetailSurahBody() {
    let { state } = useLocation();

    return (
        <section>
            <div className="h-screen px-10 flex flex-col items-center justify-center">
                <div className="w-full grid grid-cols-5 gap-2 sm:gap-4 h-[80%] sm:h-[40%] md:h-[60%]">
                    <div className="rounded-lg border-4 col-span-5 sm:col-start-1 sm:col-span-2 px-5 py-3 sm:px-10 sm:py-10">
                        <ol>
                            <li>Surah: {state.name}</li>
                            <li>Nomor: {state.number}</li>
                            <li>Total ayat: {state.numberOfAyahs}</li>
                            <li>Arti: {state.translation}</li>
                            <li>Diturunkan: {state.revelation}</li>
                        </ol>
                    </div>
                    <div className="overflow-y-auto rounded-lg border-4 col-span-5 sm:col-span-3 px-5 py-3 sm:px-10 sm:py-10">
                        <p>Deskripsi:</p>
                        <p>{state.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSurahBody