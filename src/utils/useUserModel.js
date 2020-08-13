import {useState} from 'react';
import profileImage from '../assets/images/profile.png';

const useUserModel = () => {

    const [nameState, setName] = useState("Joseph");
    const [imageState, setImage] = useState(profileImage);
    const [statusState, setStatus] = useState("Excited");
    const [excitementLevelState, setExcitementLevelState] = useState("");
    const [profileState, setProfileState] = useState([]);

    return {
        error: nameState === "" ? "Please enter a name value" : "",
        name: {
            value: nameState,
            onChange: (e) => setName(e.target.value),
        },
        image:{
            value: imageState,
            onChange: (e) => setImage(e.target.value),
        },
        status: {
            value: statusState,
            onChange: (e) => setStatus(e.target.value),
        },
        excitementLevel:{
            value: excitementLevelState,
            onChange: (e) => setExcitementLevelState(e.target.value),
        },
        profile:{
            value: profileState,
            click: () => {
                setProfileState([...profileState, {name: nameState}]);
            },
        }
    };
};

export default useUserModel;