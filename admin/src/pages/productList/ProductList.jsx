import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/apiCalls';

function ProductList() {

    const [data, setData] = useState(productRows);

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(dispatch);
    },[dispatch])

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=> {
            return (
                <div className='productListUser flex items-center'>
                    <img className='productListImage w-8 h-8 rounded-full object-cover mr-10' src={params.row.img} alt='userProfilePic'/>
                    {params.row.name}
                </div>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price',headerName: 'Price', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                <Link to={'/product/' + params.row.id}>
                    <button className='product-list-edit mr-10 cursor-pointer'>Edit</button>
                </Link>
                    <DeleteOutlineIcon className='product-list-delete cursor-pointer text-red-500' onClick={() => handleDelete(params.row.id)}/>
                </>
            )
        }}
      ];

  return (
    <div className="product-list flex-[4]">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
        pageSize={10}
      />
    </div>
  )
};

export default ProductList;