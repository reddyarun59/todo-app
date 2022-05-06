import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { nanoid } from 'nanoid';
//import './App.css';

const App = () => {
	const [todoListItems, setTodoListItems] = React.useState([]);


	return (
		<main className='App'>
			<TodoForm
				onSubmit={text =>
					text &&
					setTodoListItems([
						{ id: nanoid(), text, complete: false },
						...todoListItems,
					])
				}
			/>
			{todoListItems.length > 0 ? (
				<>
					<TodoList
						todoListItems={todoListItems}
						setTodoListItems={setTodoListItems}
					/>
					<button
						onClick={() => setTodoListItems([])}
						className='clear-list'
					>
						<FontAwesomeIcon icon={faTrash} /> clear list
					</button>
				</>
			) : null}
		</main>
	);
};

export default App;