import React from 'react';
import '../style/header.css';

const Header = ({title}) => {
    return (
        <header id='header'>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;