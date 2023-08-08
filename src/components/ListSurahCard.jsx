import PropTypes from 'prop-types';

function ListSurahCard({ name }) {
    return (
        <a href="/detail-surah" className="container flex justify-center items-center rounded-xl h-20 w-full bg-primary">
            <div className="text-white font-bold text-sm">
                {name}
            </div>
        </a>
    )
}

ListSurahCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default ListSurahCard