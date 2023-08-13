import PropTypes from 'prop-types';

function DetailSurahBody({ data }) {
    return (
        <section>
            <div className="h-screen px-10 flex flex-col items-center justify-center">
                <div className="w-full grid grid-cols-5 gap-2 sm:gap-4 h-[80%] sm:h-[40%] md:h-[60%]">
                    <div className="rounded-lg border-4 col-span-5 sm:col-start-1 sm:col-span-2 px-5 py-3 sm:px-10 sm:py-10">
                        <ol>
                            <li>Surah: {data.name}</li>
                            <li>Nomor: {data.number}</li>
                            <li>Total ayat: {data.numberOfAyahs}</li>
                            <li>Arti: {data.translation}</li>
                            <li>Diturunkan: {data.revelation}</li>
                        </ol>
                    </div>
                    <div className="overflow-y-auto rounded-lg border-4 col-span-5 sm:col-span-3 px-5 py-3 sm:px-10 sm:py-10">
                        <p>Deskripsi:</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

DetailSurahBody.propTypes = {
    data: PropTypes.object
}

export default DetailSurahBody