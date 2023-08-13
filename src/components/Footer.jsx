function Footer() {
    return (
        <div className="grid grid-cols-1 grid-flow-row">
            <div className="flex flex-col bg-primary p-20 text-center">
                <p className="text-[25px] sm:text-[30px] text-white font-bold mb-5">Quran Verse Finder</p>
                <p className="text-[10px] sm:text-sm text-white mb-8">
                    Terima kasih telah mengunjungi website kami. Kami berkomitmen untuk memberikan pengalaman penjelajahan data Al-Quran yang berharga dan inspiratif.
                    Jika Anda memiliki pertanyaan, masukan, atau tanggapan, jangan ragu untuk menghubungi kami.
                    Kami senang bisa berkontribusi dalam memperluas pemahaman tentang Al-Quran melalui teknologi dan wawasan.
                </p>
                <div className="flex justify-center items-center gap-4">
                    {/* Instagram */}
                    <a href="https://www.instagram.com/nahdiann/" className="fill-white" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/nah-dian-40952a1a5/" className="fill-white" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                    </a>

                    {/* Youtube */}
                    <a href="https://www.youtube.com/channel/UC474qnpwuP7syXqFJUKfLKA" className="fill-white" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                    </a>

                    <a href="https://www.buymeacoffee.com/nahdian" target="_blank" rel="noreferrer">
                        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=nahdian&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" alt="Buy me A Coffee" />
                    </a>

                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="bg-secondary text-start">
                    <p className="mx-5 my-3 text-white text-[8px] sm:text-sm font-bold">Versi: 1.0.0</p>
                </div>
                <div className="bg-secondary text-end">
                    <p className="mx-5 my-3 text-white text-[8px] sm:text-sm font-bold">Develop by: nahdian.dev@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer