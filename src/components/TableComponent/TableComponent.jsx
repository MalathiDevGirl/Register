import CardComponent from '../CardComponent/CardComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableBodyComponent from './TableBodyComponent';
import { updateStatusLocalStorageItem, getLocalStorageSingleItem} from '../../utils/utilities';
import { useEffect, useState } from 'react';
import './table.style.css';
import RegisterForm from '../../page/Register/RegisterForm';

const TableComponent = () => {
    
    const [actionType, setActionType] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState('');
    
    useEffect( ()=>{
    },[actionType]);

    const editClick = (id) => {
        setActionType('Edited');
        setShowForm(true);
        setUserData(getLocalStorageSingleItem("existingData",id));
    }

    const closeForm = () =>{
        setShowForm(false);
    }

    const deleteClick = (id) => {
        setActionType('Deleted');
        updateStatusLocalStorageItem(id,'status','Deleted');
    }

    const addClick = (id) => {
        setActionType('Added');
        updateStatusLocalStorageItem(id,'status','Added');
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