'use client'
import React, { useState } from 'react';
import Topbar from './topbar';
import menu from './menu';

const TopSide = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
                    <Topbar menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
                    <menu menuOpen= {menuOpen} setMenuOpen = {setMenuOpen}/>
        </div>
    );
};

export default TopSide;