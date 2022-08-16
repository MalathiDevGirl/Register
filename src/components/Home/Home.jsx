
import Header from '../Header/Header';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import TableComponent from '../TableComponent/TableComponent';
const Home = () => {
    const usertype = 'user';
    const callUser = (usertype === 'admin') ? <TableComponent/> : <ProfileComponent/>;
    return (
        <div>
            <Header/>
            {callUser}
        </div>        
    );
}
export default Home;