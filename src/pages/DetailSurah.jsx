import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import DetailSurahBody from "../components/DetailSurahBody";

function DetailSurah() {
    const [data, setData] = useState([]);
    const { surah } = useParams();

    useEffect(() => {
        async function fetchData() {
            const httpResult = await axios.get('https://quran-verse-explorer.vercel.app/surah');
            const fetchData = httpResult.data;

            fetchData.map((item) => {
                if (item.number === parseInt(surah)) {
                    setData(item)
                }
            });
        }
        fetchData();
    }, [surah]);

    return (
        <>
            <Navbar data={data.name} />
            <DetailSurahBody data={data} />
            {/* <Footer /> */}
        </>
    )
}

export default DetailSurah