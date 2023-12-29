import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <header>
            <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 3, 2020</small>
            </div>
        </header>
    );
}

export default Header;