import React, { useState } from 'react';
import { Header, Sidebar } from '..';

function AuthenticateUserTemplate(props) {
    const [isActive, setIsActive] = React.useState(false)
    
    const handleToggle = () => {
        setIsActive(!isActive)
    };
    
    return (
        <div className={`App ${isActive ? "menuCollapse" : ""}`}>
            <div>
                <Header onMenuClick={handleToggle}/>
                <Sidebar />
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