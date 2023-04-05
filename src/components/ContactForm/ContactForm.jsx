import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

function ContactForm({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChangeName = e =>
    setName(e.currentTarget.value);
  
  const handleChangeNumber = e =>
    setNumber(e.currentTarget.value);
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name,number});
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  }; 
   
return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameId}>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            id={nameId}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
          />
        </label>
        <label className={css.label} htmlFor={numberId}>
          Number
          <input
        className={css.input}
        id={numberId}
        type="tel"
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, 
            dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
