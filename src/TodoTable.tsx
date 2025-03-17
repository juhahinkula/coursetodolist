import { TodoTableProps } from "./types";
import Button from '@mui/material/Button'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function TodoTable(props: TodoTableProps) {
  const columns: GridColDef[] = [
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'priority', headerName: 'Priority', },
    { field: 'date', headerName: 'Due date', width: 150 },
  ]
  
  return(
    <div style={{ height: 500, width: '60%', margin: 'auto' }}>
      <DataGrid rows={props.todos} columns={columns} />
    </div>
  )
}

export default TodoTable;