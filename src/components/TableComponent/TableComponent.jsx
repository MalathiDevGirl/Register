import './table.style.css';
import {ReactComponent as EditSvg} from '../../assests/edit.svg';
import {ReactComponent as DeleteSvg} from '../../assests/delete.svg';
import {ReactComponent as AddSvg} from '../../assests/add.svg';
import CardComponent from '../CardComponent/CardComponent';
const TableComponent = () => {
    const tableData = [
        { id: 1,name:'Malathi',gender:'Female',date:'31-08-2022',email:'iammalathikalirajan@gmail.com',password:'********',status: 'Added' },
        { id: 2,name:'Malls',gender:'Female',date:'15-08-2022',email:'malathikalirajan@gmail.com',password:'********',status: 'Added' },
        { id: 3,name:'Deva',gender:'Male',date:'05-08-2022',email:'deva@gmail.com',password:'********',status: 'Added'},
        { id: 4,name:'Dev',gender:'Male',date:'23-08-2022',email:'dev@gmail.com',password:'********',status: 'Added'},
        { id: 5,name:'Devi',gender:'Female',date:'05-08-2022',email:'devi@gmail.com',password:'********',status: 'Added'},
        { id: 6,name:'Malathi',gender:'Female',date:'31-08-2022',email:'iammalathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 7,name:'Malls',gender:'Female',date:'15-08-2022',email:'malathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 8,name:'Deva',gender:'Male',date:'05-08-2022',email:'deva@gmail.com',password:'********',status: 'Added'},
        { id: 9,name:'Dev',gender:'Male',date:'23-08-2022',email:'dev@gmail.com',password:'********',status: 'Added'},
        { id: 10,name:'Devi',gender:'Female',date:'05-08-2022',email:'devi@gmail.com',password:'********',status: 'Added'},
        { id: 11,name:'Malathi',gender:'Female',date:'31-08-2022',email:'iammalathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 12,name:'Malls',gender:'Female',date:'15-08-2022',email:'malathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 13,name:'Deva',gender:'Male',date:'05-08-2022',email:'deva@gmail.com',password:'********',status: 'Added'},
        { id: 14,name:'Dev',gender:'Male',date:'23-08-2022',email:'dev@gmail.com',password:'********',status: 'Added'},
        { id: 15,name:'Devi',gender:'Female',date:'05-08-2022',email:'devi@gmail.com',password:'********',status: 'Added'},
        { id: 16,name:'Malathi',gender:'Female',date:'31-08-2022',email:'iammalathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 17,name:'Malls',gender:'Female',date:'15-08-2022',email:'malathikalirajan@gmail.com',password:'********',status: 'Added'},
        { id: 18,name:'Deva',gender:'Male',date:'05-08-2022',email:'deva@gmail.com',password:'********',status: 'Added'},
        { id: 19,name:'Dev',gender:'Male',date:'23-08-2022',email:'dev@gmail.com',password:'********',status: 'Deleted'},
        { id: 20,name:'Devi',gender:'Female',date:'05-08-2022',email:'devi@gmail.com',password:'********',status: 'Deleted'},
    ]
    const editHandler = () => {
        console.log("Edited");
    }
    const deleteHandler = () => {
        console.log("Deleted");
    }
    const addHandler = () => {
        console.log("Added");
    }
    const getTableRowData = (tableData.map((data) => {
        const statusClass = data.status === "Added" ? "add-status" : "delete-status";
        return  (<tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.gender}</td>
            <td>{data.date}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td className={statusClass}>{data.status}</td>
            <td><EditSvg className="action-button" onClick={editHandler}/></td>
            <td>{(data.status !== "Deleted") ? <DeleteSvg className="action-button" onClick={deleteHandler}/> : <AddSvg className="action-button"  onClick={addHandler}/> }</td>
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