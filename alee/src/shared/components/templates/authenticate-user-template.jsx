import React, { Component } from 'react';
import { Header, Sidebar } from '..';


class AuthenticateUserTemplate extends Component {
    state = { isActive: false };
    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };
    
    render() {
        const { children } = this.props;
        const isActive = this.state.isActive;
        return (
            <div className={`App ${isActive ? "menuCollapse" : ""}`}>
                <div>
                    <Header onMenuClick={this.handleToggle}/>
                    <Sidebar />
                </div>
                <div className="main-container">
                    <div className="main-page">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}


export default AuthenticateUserTemplate;