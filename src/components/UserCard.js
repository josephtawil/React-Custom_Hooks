import React,{useContext} from 'react'
import profileImage from '../assets/images/profile.png';
import UserContext from '../utils/UserContext';

const UserCard = () => {
    const userModel = useContext(UserContext);
    return (
        <div className="container">
            <div className="card mx-auto" style={{width: "400px"}}>
                <img className="center-block mt-3" 
                style={{width: "200px", margin: "0 auto"}}
                src={profileImage}
                alt="profile"
                />

                <div className="card-body">
                    <h4 className="card-title">{userModel.name.value}</h4>
                    <p className="card-text">{userModel.status.value}</p>
                    
                    <button className="btn btn-primary" onClick={userModel.profile.click}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
