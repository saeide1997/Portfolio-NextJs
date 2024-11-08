'use client'
import React, { useState } from 'react';
import Topbar from './topbar';
import Menu from './menu';

const TopSide = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
                    <Menu menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
                    <Topbar menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
        </div>
    );
};

export default TopSide;