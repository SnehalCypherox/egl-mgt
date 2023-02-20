import { Typography } from '@mui/material';
import React from 'react'
import Logo from '../Assets/Logo.png'
import user from '../Assets/user.png'
import SearchIcon from '../Assets/search.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='unit-header'>
            <div className='unit-logo'>
                <Link to='/'>
                    <img src={Logo} alt="" className='unit-logo' />
                </Link>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='Search' className='search-txt' />
                <img src={SearchIcon} alt="search" className='search-icon' />
            </div>
            <div className='account cursor-pointer'>
                <Typography variant="span" component="span"> My Account</Typography>
                <div> <img src={user} alt="user-icon" className='usericon' /></div>

            </div>
        </div>
    )
}

export default Header