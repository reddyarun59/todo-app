import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


const TodoForm = ({ onSubmit }) => {
    const [value, setValue]=React.useState("")
    const resetValue=()=>{
        setValue('')
    }
	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
		resetValue();
	};
    const handleChange=(e)=>{
        setValue(e.target.value);

    }

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='form-input'
				type='text'
				placeholder='I need to...'
                onChange={handleChange}
                value={value}
			/>
			<button className='form-btn'>
				<FontAwesomeIcon icon={faPlusCircle} />
			</button>
		</form>
	);
};

export default TodoForm;