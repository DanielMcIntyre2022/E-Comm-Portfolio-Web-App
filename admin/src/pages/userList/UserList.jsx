import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../data';

function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=> {
            return (
                <div className='userListUser flex items-center'>
                    <img className='userListImage w-8 h-8 rounded-full object-cover mr-10' src={params.row.avatar} alt='userProfilePic'/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction',headerName: 'Transaction Total', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <button className='user-list-edit mr-10 cursor-pointer'>Edit</button>
                    <DeleteOutlineIcon className='user-list-delete cursor-pointer text-red-500'/>
                </>
            )
        }}
      ];

  return (
    <div className="user-list flex-[4_4_0%]">
       <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
        pageSize={10}
      />
    </div>
  )
}

export default UserList;