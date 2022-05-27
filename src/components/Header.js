import React from 'react';
import '../styles/Header.css'

function Header(){
    return <div class="header">
        <a href="#default" class="logo">Company Logo</a>
        <div class="header-right">
            <a class="active" href="#home">Alex Kabe Kabe</a>
            {/* <a href="#contact">Contact</a>
            <a href="#about">About</a> */}
        </div>
    </div>
}

export default Header