import { backdropClasses, Typography } from '@mui/material';
import React from 'react'
import Logo from '../Assets/Logo.png'
import user from '../Assets/user.png'
import SearchIcon from '../Assets/search.svg';
import { Link } from 'react-router-dom';

const style = {
    background: '#0071BC',
    padding: '5px 10px',
    color: 'white',
    borderRadius: '10px 10px 0px 0px'
};

const Header = () => {
    return (
        <div className='unit-header'>
            <div className='unit-logo'>
                <Link to='/property/unit'>
                    <img src={Logo} alt="" className='unit-logo' />
                </Link>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='Search' className='search-txt' />
                <img src={SearchIcon} alt="search" className='search-icon' />
            </div>
            <Typography variant='div' component='div'  className='account cursor-pointer'>
                <Typography variant="span" component="span"> My Account</Typography>
                <div> <img src={user} alt="user-icon" className='usericon' /></div>

            </Typography>
        </div>
    )
}

export default Header