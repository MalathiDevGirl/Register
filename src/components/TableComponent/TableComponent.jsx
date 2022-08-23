import CardComponent from '../CardComponent/CardComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableBodyComponent from './TableBodyComponent';
import RegisterForm from '../../page/Register/RegisterForm';
import { updateStatusLocalStorageItem, getLocalStorageSingleItem} from '../../utils/utilities';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { storeActions } from '../../store/storageSlice';
import './table.style.css';

const TableComponent = () => {
    
    const [actionType, setActionType] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState('');
    const dispatch = useDispatch();
    const {updateStatus} = storeActions;
    useEffect( ()=>{
        if(userData.status === 'Added' && actionType === "Edited"){
            setShowForm(true);
        }
    },[actionType,userData]);
  
    const editClick = (id) => {
        setUserData(getLocalStorageSingleItem("existingData",id));
        setActionType('Edited');
    }

    const closeForm = () =>{
        setShowForm(false);
    }

    const deleteClick = (id) => {
        setActionType('Deleted');
        const payload = {
            'id' : id,
            'status' : 'Deleted'
        }
        dispatch(updateStatus(payload));
        updateStatusLocalStorageItem(payload.id,'status',payload.status);
    }

    const addClick = (id) => {
        setActionType('Added');
        const payload = {
            'id' : id,
            'status' : 'Added'
        }
        dispatch(updateStatus(payload));
        updateStatusLocalStorageItem(payload.id,'status',payload.status);
    }

    return (        
        <CardComponent>
        {!showForm ? 
                <div className="table-content">
                <table>
                <TableHeaderComponent/>
                <TableBodyComponent editClick={editClick} deleteClick={deleteClick} addClick={addClick}/>
                </table>
                </div>
            : <RegisterForm editForm={showForm} buttonValue="Edit" userData={userData} closeForm={closeForm}/>}
         </CardComponent>
    );
}
export default TableComponent;