import PropTypes from 'prop-types';
function ListSurahCard({ items }) {
    const param = items.value.number;

    return (
        <a key={items.uuid} href={`/detail-surah/${param}`} className="container flex justify-center items-center rounded-xl w-full h-8 bg-primary first-line:sm:h-12 lg:h-14" >
            <div key={items.uuid} className="text-white text-center font-bold text-[8px] md:text-[10px] lg:text-sm">
                {items.value.name}
            </div>
        </a >
    )
}

ListSurahCard.propTypes = {
    items: PropTypes.object.isRequired,
    uuid: PropTypes.string.isRequired
}

export default ListSurahCard