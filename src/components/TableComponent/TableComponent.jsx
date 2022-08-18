import './table.style.css';
import {ReactComponent as EditSvg} from '../../assests/edit.svg';
import {ReactComponent as DeleteSvg} from '../../assests/delete.svg';
import {ReactComponent as AddSvg} from '../../assests/add.svg';
import CardComponent from '../CardComponent/CardComponent';
import { getLocalStorage, updateLocalStorageItem} from '../../utils/utilities';
import { useNavigate  } from "react-router-dom";
import { useEffect, useState } from 'react';

const TableComponent = () => {
        
    const navigate = useNavigate(); 
    const tableData = getLocalStorage("existingData");
    const [actionType, setActionType] = useState('');
    const editHandler = (id) => {
        console.log("Edited");        
        navigate(`/register/${id}`);
    }
    const deleteHandler = (id) => {
        setActionType('Deleted');
       updateLocalStorageItem(id,'status','Deleted');
    }
    const addHandler = (id) => {
        setActionType('Added');
       updateLocalStorageItem(id,'status','Added');
    }

    useEffect( ()=>{

    },[actionType]);
   
    const getTableRowData =  () =>{
        if(tableData !== null){
           const showTableData = (tableData.map((data,index) => {
                const statusClass = data.status === "Added" ? "add-status" : "delete-status";
                return  (<tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.date}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td className={statusClass}>{data.status}</td>
                    <td><EditSvg className="action-button" onClick={()=>editHandler(data.id)}/> </td>
                    <td>{(data.status !== "Deleted") ? <DeleteSvg className="action-button" onClick={()=>deleteHandler(data.id)}/> : 
                    <AddSvg className="action-button" onClick={()=>addHandler(data.id)}/> }</td>
                 </tr>);
            }));     
        return showTableData;            
        }
        else {
            return  (<tr>
                <td className='no-data' colSpan={9}>No Data</td>
            </tr>);
        }
    }

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
                {getTableRowData()} 
            </tbody>
            </table>
            </div>
        </CardComponent>
    );
}
export default TableComponent;