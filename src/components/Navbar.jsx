import PropTypes from 'prop-types';

function Navbar({ data }) {
    return (
        <nav className="bg-primary">
            <div className="flex flex-row mx-10">
                <a href="/" className="my-5 flex flex-row items-center ">
                    <p className="text-white font-bold">Back</p>
                </a>
                <a className="mx-auto my-5 flex flex-row items-center">
                    <p className="text-white font-bold">Surah {data}</p>
                </a>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    data: PropTypes.string.isRequired
}

export default Navbar