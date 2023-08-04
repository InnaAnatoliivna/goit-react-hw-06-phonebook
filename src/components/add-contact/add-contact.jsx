import { useState } from 'react';
import { getRandomId } from 'components/random-id'
import css from 'components/add-contact/add-contact.module.css';

const AddContactForm = ({ addContact }) => {
    const nameInputId = getRandomId();
    const numerInputId = getRandomId();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeInput = evt => {
        const { name, value } = evt.target;
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    }

    const onAddToContacts = e => {
        e.preventDefault();
        addContact(name, number);
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