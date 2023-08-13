import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
function ListSurahCard({ items }) {
    return (
        <Link
            to={'/detail-surah'}
            state={{
                name: items.value.name,
                number: items.value.number,
                numberOfAyahs: items.value.numberOfAyahs,
                translation: items.value.translation,
                revelation: items.value.revelation,
                description: items.value.description
            }}
        >
            <div key={items.uuid} className="container flex justify-center items-center rounded-xl w-full h-8 bg-primary first-line:sm:h-12 lg:h-14">
                <div key={items.uuid} className="text-white text-center font-bold text-[8px] md:text-[10px] lg:text-sm">
                    {items.uuid}
                </div>
            </div>
        </Link>
    )
}

ListSurahCard.propTypes = {
    items: PropTypes.object.isRequired,
    uuid: PropTypes.string.isRequired
}

export default ListSurahCard