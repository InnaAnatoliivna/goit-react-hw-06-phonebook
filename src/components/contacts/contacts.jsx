import SavedContact from 'components/savedContact/savedContact'

const Contacts = ({ arrayContacts, onDeleteContact }) => {

    const handleClick = (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.getAttribute('data-id');
            onDeleteContact(id);
        }
    }

    return (
        <ul onClick={handleClick}>
            {arrayContacts.map(contact => (
                <SavedContact
                    arrayContacts={arrayContacts}
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    )
}

export default Contacts;