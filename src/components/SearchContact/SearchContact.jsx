import css from 'components/SearchContact/searchContact.module.css'

const SearchContact = ({ handleSearchInput, searchTitle }) => {
    return (
        <div className={css.wrapper}>
            <h3 className={css.title}>{searchTitle}</h3>
            <input
                className={css.input}
                type="text"
                onInput={handleSearchInput}
            />
        </div>
    );
}


export default SearchContact;