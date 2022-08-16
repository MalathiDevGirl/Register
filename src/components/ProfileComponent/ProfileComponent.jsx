import {ReactComponent as WelcomeSvg} from '../../assests/welcome.svg';
import './profile.style.css';
const ProfileComponent = () => {
    const profileData = { 
        id: 1, 
        name: 'Malathi', 
        gender: 'Female', 
        date: '31-08-2022', 
        email: 'iammalathikalirajan@gmail.com', 
        password: '********', 
        status: 'Added' 
    }
    return (
        <div className="profile-content">       
         <WelcomeSvg className="welcome-icon"/><h2>Hello {profileData.name}</h2>      
            
            <div  className="profile-data">
            <h2>Gender: {profileData.gender}</h2>
            <h2>Date: {profileData.date}</h2>
            <h2>Email: {profileData.email}</h2>
            <h2>Password: {profileData.password}</h2>
            <h2>Status: {profileData.status}</h2>
            </div>
        </div>
    )
}
export default ProfileComponent;