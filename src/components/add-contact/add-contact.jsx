import { useState } from 'react';
import { getRandomId } from 'components/random-id'
import css from 'components/Add-contact/add-contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';
import { addContact } from 'redux/reducers/contactsSlice';

const nameInputId = getRandomId();
const numerInputId = getRandomId();

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectorContacts);
    const dispatch = useDispatch();

    const onChangeInput = evt => {
        const { name, value } = evt.target;
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    }

    const onAddToContacts = e => {
        e.preventDefault();
        const idContact = getRandomId();
        const dataFields = { name: name, number: number, id: idContact };
        const isContact = contacts.find(contact => contact.name === dataFields.name);
        !isContact ?
            dispatch(addContact(dataFields))
            : alert(`${name} is already in contacts`);
        setName('');
        setNumber('');
    }

    return (
        <>
            <form className={css.form} onSubmit={onAddToContacts}>
                <label className={css.label} htmlFor={nameInputId}>
                    Name
                </label>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={onChangeInput}
                    required
                />
                <label className={css.label} htmlFor={numerInputId}>
                    Number
                </label>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={onChangeInput}
                    required
                />
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </form>
        </>
    )
}

export default AddContactForm;