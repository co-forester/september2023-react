import {useLocation} from "react-router-dom";

const UserDetails = () => {
   const {state:{id}} = useLocation()


    return (
        <div>
            UserDetails
        </div>
    );
};

export {UserDetails};