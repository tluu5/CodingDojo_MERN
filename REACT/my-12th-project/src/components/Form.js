import React, { useContext } from 'react';
import WordContext from '../contexts/WordContext';

const Form = (props) => {
    const {form,setForm} = useContext(WordContext);
    return(
        <form className='w-50 mx-auto'>
            <input value={form} onChange={(event) => setForm(event.target.value)} type="text" className='w-100 form-control'/>
        </form>
    )
}

export default Form;