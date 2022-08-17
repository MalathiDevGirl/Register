import './table.style.css';
import {ReactComponent as EditSvg} from '../../assests/edit.svg';
import {ReactComponent as DeleteSvg} from '../../assests/delete.svg';
import {ReactComponent as AddSvg} from '../../assests/add.svg';
import CardComponent from '../CardComponent/CardComponent';
import { getLocalStorage, updateLocalStorageItem} from '../../utils/utilities';
import { useEffect, useState } from 'react';
const TableComponent = () => {
    const tableData = getLocalStorage("existingData");
    const [actionType, setActionType] = useState('');
    const editHandler = () => {
        console.log("Edited");
    }
    const deleteHandler = (id) => {
        setActionType('Deleted');
        console.log(actionType);
       updateLocalStorageItem(id,'Deleted');
    }
    const addHandler = (id) => {
        setActionType('Added');
        console.log(actionType);
       updateLocalStorageItem(id,'Added');
    }
    useEffect( ()=>{

    },[actionType]);
    const getTableRowData =  (tableData.map((data,index) => {
        const statusClass = data.status === "Added" ? "add-status" : "delete-status";
        return  (<tr key={index+1}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.gender}</td>
            <td>{data.date}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td className={statusClass}>{data.status}</td>
            <td><EditSvg className="action-button" onClick={editHandler}/></td>
            <td>{(data.status !== "Deleted") ? <DeleteSvg className="action-button" onClick={()=>deleteHandler(data.id)}/> : 
            <AddSvg className="action-button" onClick={()=>addHandler(data.id)}/> }</td>
         </tr>);
    }));

    return (
        <CardComponent>
            <div className="table-content">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Password</th>                
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

            <tbody>
                {getTableRowData} 
            </tbody>
            </table>
            </div>
        </CardComponent>
    );
}
export default TableComponent;