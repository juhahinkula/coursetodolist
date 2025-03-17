import { TodoTableProps } from "./types";
import { DataGrid, GridColDef, GridRowParams , GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoTable(props: TodoTableProps) {
  const columns: GridColDef[] = [
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'priority', headerName: 'Priority', },
    { field: 'date', headerName: 'Due date', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem 
          icon={<DeleteIcon />} 
          onClick={() => props.handleDelete(params.row.id) } 
          label="Delete" />,
      ]
    },
  ]
  
  return(
    <div style={{ height: 500, width: '60%', margin: 'auto' }}>
      <DataGrid 
        rows={props.todos} 
        columns={columns} 
      />
    </div>
  )
}

export default TodoTable;