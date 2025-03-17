import { useState } from 'react';
import { Todo } from './types';
import TodoTable from './TodoTable';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [todo, setTodo] = useState<Todo>({id: '', description: '', priority: 'low', date: ''});
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = () => {
    if (!todo.description || !todo.date) {
      alert("Enter values first!");
    } 
    else {
      setTodos([...todos, { ...todo, id: uuidv4()}]);
      setTodo({id: '', description: '', priority: 'low', date: '',});
    }
  };

  const deleteTodo = (id: string) => {
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter(todo => id !== todo.id));
    }
  };

  return(
    <>
      <Stack direction="row" mt={2} mb={2} spacing={2} justifyContent="center" alignItems="center">
        <TextField 
          label="Description" 
          onChange={event => setTodo({...todo, description: event.target.value})} 
          value={todo.description} 
        />
        <TextField
          title="Priority"
          select
          slotProps={{
            select: {
              native: true,
            },
          }}
          onChange={event => setTodo({...todo, priority: event.target.value as 'low' | 'medium' | 'high'})} 
          value={todo.priority} 
        >
          <option key="low" value="low">Low</option>
          <option key="medium" value="medium">Medium</option>
          <option key="high" value="high">High</option>
        </TextField>
        <TextField 
          label="Date"
          onChange={event => setTodo({...todo, date: event.target.value})} 
          value={todo.date} 
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button> 
      </Stack>
      <TodoTable todos={todos} handleDelete={deleteTodo} />
    </>
  );
}

export default TodoList;