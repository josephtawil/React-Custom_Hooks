import React,{useContext} from 'react'
import userContext from '../utils/UserContext';

const Button = () => {
    const userModel = useContext(userContext);
    return (
        <div>
            <button></button>
            <h1>{userModel.name.value}</h1>
        </div>
    )
}

export default Button
