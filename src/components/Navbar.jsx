import { useLocation } from 'react-router-dom';

function Navbar() {
    let { state } = useLocation();

    return (
        <nav className="bg-primary">
            <div className="flex flex-row mx-10">
                <a href="/" className="my-5 flex flex-row items-center ">
                    <p className="text-white font-bold">Back</p>
                </a>
                <a className="mx-auto my-5 flex flex-row items-center">
                    <p className="text-white font-bold">Surah {state.name}</p>
                </a>
            </div>
        </nav>
    )
}

export default Navbar