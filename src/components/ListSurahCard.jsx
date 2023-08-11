import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
function ListSurahCard({ items }) {
    return (
        <Link
            to={'/detail-surah'}
            state={{
                name: items.name,
                number: items.number,
                numberOfAyahs: items.numberOfAyahs,
                translation: items.translation,
                revelation: items.revelation,
                description: items.description
            }}>
            <div className="container flex justify-center items-center rounded-xl h-8 sm:h-12 w-full bg-primary">
                <div className="text-white text-center font-bold text-[8px] sm:text-[10px] md:text-sm">
                    {items.name}
                </div>
            </div>
        </Link>
    )
}

ListSurahCard.propTypes = {
    items: PropTypes.object.isRequired
}

export default ListSurahCard