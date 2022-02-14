import React, { useState } from 'react';
import Header from '../../components/organisms/header';
import Sidebar from '../organisms/sidebar';
import { useSelector } from 'react-redux';
function AuthenticateUserTemplate(props) {

    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    };
    const auth = useSelector(state => state.auth)
    return (
        <div className={`App ${isActive ? "menuCollapse" : ""}`}>
            <div>
                {auth.userDetail &&
                    <> <Header onMenuClick={handleToggle} />
                        <Sidebar {...props} />
                    </>}
            </div>
            <div className="main-container">
                <div className="main-page">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export default AuthenticateUserTemplate;