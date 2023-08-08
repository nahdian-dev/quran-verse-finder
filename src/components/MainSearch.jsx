import { useState } from 'react';
import axios from "axios";

import ListSurahCard from "./ListSurahCard";

function MainSearch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [valueVerse, setValueVerse] = useState('');
    const [valueTranslation, setValueTranslation] = useState('');
    const [valueRevelation, setValueRevelation] = useState('');

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setValueRevelation("");
            const httpResult = await axios.get(`https://quran-verse-explorer.vercel.app/v1/surah?t=${valueTranslation}&v=${valueVerse}&r=${valueRevelation}`);
            setData(httpResult.data);
            console.log(httpResult.data.length);
        } catch (error) {
            alert(error.response.data.message);
            setData([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (event) => {
        setValueTranslation(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setValueVerse(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setValueRevelation(event.target.value);
    };

    return (
        <section id="main-search">
            <div className="h-screen px-10 flex flex-col items-center justify-center">
                <div className="mb-10 text-center">
                    <p className="text-[30px] font-bold">Form pencarian surah Al-Quran</p>
                    <p className="text-sm">Isi form opsional dengan arti surah, jumlah ayat, dan diturunkan di kota mekkah atau madinah</p>
                </div>
                <div className="grid grid-cols-3 gap-4 h-1/2">
                    <div className="rounded-lg col-span-2 border-4 px-10">
                        <div className="grid grid-cols-7 gap-4 content-center justify-items-center h-full">
                            <div className="search-items col-span-7 flex-col">
                                <div className="flex flex-col w-full items-start mb-3">
                                    <label htmlFor="translation" className="mb-3 text-sm">Translation / Arti :</label>
                                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" type="text" id="translation" name="translation"
                                        placeholder="Contoh: Pembukaan" value={valueTranslation} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="search-items flex flex-col items-center">
                                <label htmlFor="verse" className="text-sm">Jumlah Ayat</label>
                                <input className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    type="text" id="verse" name="verse" placeholder="..." value={valueVerse} onChange={handleInputChange2} />
                            </div>
                            <div className="search-items rounded-lg col-span-2 flex flex-col items-start justify-center px-3 border-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio text-indigo-600" name="radio-option" value="makkiyah" onChange={handleInputChange3} />
                                    <span className="ml-2">Makkiyah</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio text-indigo-600" name="radio-option" value="madaniyah" onChange={handleInputChange3} />
                                    <span className="ml-2">Madaniyah</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio text-indigo-600" name="radio-option" value="" onChange={handleInputChange3} />
                                    <span className="ml-2">Tidak Memilih</span>
                                </label>
                            </div>
                            <button onClick={fetchData} className="search-items rounded-3xl bg-secondary col-start-6 col-span-2 flex justify-center items-center text-white font-bold">
                                Cari
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg border-4">
                        <div className="grid grid-cols-7 items-center mb-2 border-b-2 h-1/6 px-3">
                            <div className='col-span-2'>Daftar Surah</div>
                            <div className='col-start-6 col-span-2'>Total: {data.length}</div>
                        </div>
                        <div className="max-h-52 overflow-y-auto px-5 pt-2">
                            <div className="divide-y divide-orange-300">
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        isLoading ? (
                                            <div> Loading...</div>
                                        ) : data.length === 0 ? (
                                            <div>Kosong</div>
                                        ) : (
                                            (
                                                data.map((item) => (
                                                    <>
                                                        <ListSurahCard name={item.name} />
                                                    </>
                                                ))
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSearch