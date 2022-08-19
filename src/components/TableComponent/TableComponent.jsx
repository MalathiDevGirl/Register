import CardComponent from '../CardComponent/CardComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableBodyComponent from './TableBodyComponent';
import './table.style.css';

const TableComponent = () => {
   
    return (
        <CardComponent>
            <div className="table-content">
            <table>
            <TableHeaderComponent/>
            <TableBodyComponent/>
            </table>
            </div>
        </CardComponent>
    );
}
export default TableComponent;