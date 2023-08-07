import css from 'components/SearchContact/searchContact.module.css'

const SearchContact = ({ handleSearchInput, searchTitle, filter }) => {
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>{searchTitle}</h3>
            <input
                className={css.input}
                type="text"
                onInput={handleSearchInput}
            // value={filter}
            />
        </div>
    );
}


export default SearchContact;