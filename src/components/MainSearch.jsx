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
            const httpResult = await axios.get(`https://quran-verse-explorer.vercel.app/surah?t=${valueTranslation}&v=${valueVerse}&r=${valueRevelation}`);
            setData(httpResult.data);
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
                <div className="mb-5 sm:mb-10 text-center">
                    <p className="font-bold text-2xl sm:text-[25px] xl:text-[30px]">Form pencarian surah Al-Quran</p>
                    <p className="text-[8px] mt-2 sm:text-[10px] xl:text-[14px]">Isi form opsional dengan arti surah, jumlah ayat, dan diturunkan di kota mekkah atau madinah</p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="rounded-lg border-4 col-span-3 px-5 py-3 sm:h- sm:col-span-2 sm:px-10 sm:py-10">
                        <div className="grid grid-cols-7 gap-4 content-center justify-items-center h-full">
                            <div className="search-items col-span-7 flex-col sm:mb-3">
                                <div className="flex flex-col w-full items-start">
                                    <label htmlFor="translation" className="mb-3 text-[8px] sm:text-[10px] md:text-sm xl:text-[16px]">Translation / Arti :</label>
                                    <input className="w-full h-5 sm:h-7 xl:h-10 text-[6px] sm:text-[10px] xl:text-[14px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" type="text" id="translation" name="translation"
                                        placeholder="Contoh: Pembukaan" value={valueTranslation} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="search-items flex flex-col items-center col-span-2 md:col-span-1">
                                <label htmlFor="verse" className="text-center text-[8px] sm:text-[10px] md:text-sm xl:text-[16px]">Jumlah Ayat</label>
                                <input className="w-full sm:h-7 xl:h-10 text-[6px] sm:text-[10px] xl:text-[14px] mt-1 sm:mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    type="text" id="verse" name="verse" placeholder="..." value={valueVerse} onChange={handleInputChange2} />
                            </div>
                            <div className="search-items h-12 sm:h-20 xl:h-full col-span-3 lg:col-span-3 rounded-lg flex flex-col items-start justify-center px-1 sm:px-3 border-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio h-[4px] sm:h-2 text-indigo-600" name="radio-option" value="makkiyah" onChange={handleInputChange3} />
                                    <span className="ml-2 text-[6px] sm:text-[10px]">Makkiyah</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio h-[4px] sm:h-2 text-indigo-600" name="radio-option" value="madaniyah" onChange={handleInputChange3} />
                                    <span className="ml-2 text-[6px] sm:text-[10px]">Madaniyah</span>
                                </label>

                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio h-[4px] sm:h-2 text-indigo-600" name="radio-option" value="" onChange={handleInputChange3} />
                                    <span className="ml-2 text-[6px] sm:text-[10px]">Tidak Memilih</span>
                                </label>
                            </div>
                            <div className='w-full flex justify-center items-center col-start-6 col-span-2'>
                                <button onClick={fetchData} className="search-items text-[8px] sm:text-[10px] lg:text-[16px] xl:text-[20px] h-6 sm:h-8 lg:h-full rounded-md sm:rounded-3xl bg-secondary text-white font-bold">
                                    Cari
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border-4 col-span-3 sm:col-span-1">
                        <div className='flex flex-col max-h-64 lg:max-h-96 min-h-[50%]'>
                            <div className="grid grid-cols-7 items-center mb-2 border-b-2 h-6 sm:h-1/6 px-3 text-[6px] sm:text-[9px] md:text-[11px] lg:text-[14px]">
                                <div className='col-span-3'>Daftar Surah</div>
                                <div className='col-start-6 col-span-2'>Total: {data.length}</div>
                            </div>
                            {
                                isLoading ? (
                                    <div className='text-[6px] sm:text-[9px] md:text-[11px] lg:text-[14px] flex items-center justify-center'>
                                        Loading...
                                    </div>
                                ) : data.length === 0 ? (
                                    <div className='text-[6px] sm:text-[9px] md:text-[11px] lg:text-[14px] flex items-center justify-center'>
                                        Tidak ada data
                                    </div>
                                ) : (
                                    <div className="h-full overflow-y-auto sm:px-3 md:px-5 pt-2">
                                        <div className="divide-y divide-orange-300">
                                            <div className="grid grid-cols-3 sm:grid-cols-2 gap-3 px-3 sm:gap-2 md:gap-4">
                                                {data.map((item, index) => (
                                                    <>
                                                        <div key={item.name}>
                                                            <ListSurahCard items={item} index={index} />
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSearch