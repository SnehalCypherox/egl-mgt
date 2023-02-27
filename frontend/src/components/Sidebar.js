import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import propertyIcon from '../Assets/Property.svg'
import propertyIconBlue from '../Assets/PropertyBlue.svg'
import Inspections from '../Assets/Inspections.png'
import Tenants from '../Assets/Tenants.png'
import settings from '../Assets/settings.png'
import arrow from '../Assets/SideView.png'
import { Link } from 'react-router-dom'
import logout from '../Assets/logout.svg'
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/signin");
    }


    const data =
        [
            {
                path: '/property',
                icon: propertyIcon,
                blueIcon: propertyIconBlue,
                info: 'Property',
                subData: [
                    {
                        id: 1,
                        subname: 'Unit',
                        subpath: 'property/unit'
                    },
                    {
                        id: 2,
                        subname: 'Buildings',
                        subpath: 'property/building'
                    },
                    {
                        id: 3,
                        subname: 'Communities',
                        subpath: 'property/communities'
                    }
                ],
            },
            {
                path: '/inspection',
                icon: Inspections,
                blueIcon: propertyIconBlue,
                info: 'Inspections',
                subData: [
                    {
                        id: 1,
                        subname: 'Active',
                        subpath: 'inspection/active'
                    },
                    {
                        id: 2,
                        subname: 'Scheduled',
                        subpath: 'inspection/scheduled'
                    },
                    {
                        id: 3,
                        subname: 'Archived',
                        subpath: 'inspection/archive'
                    }
                ],
            },
            {
                path: '/tenants',
                icon: Tenants,
                blueIcon: propertyIconBlue,
                info: 'Tenants',
                subData: [
                    {
                        id: 1,
                        subname: 'Unit',
                        subpath: 'property/unit'
                    },
                    {
                        id: 2,
                        subname: 'Buildings',
                        subpath: 'property/building'
                    },
                    {
                        id: 3,
                        subname: 'Communities',
                        subpath: 'property/communities'
                    }
                ],
            },
            {
                path: '/setting',
                icon: settings,
                blueIcon: propertyIconBlue,
                info: 'Settings',
                subData: [
                    {
                        subname: 'Profile Settings',
                        subpath: 'property/unit'
                    }
                ],
            }
        ]

    return (

        <div className='sidebar'>
            <div className='collapse cursor-pointer' onClick={() => { }}>
                <img src={arrow} alt="arrow" />
            </div>
            {data.map((item, index) => {
                return (
                    <Accordion className='accordian-blue' key={index}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore className='downarrow' />}
                            aria-controls={item.info}
                            id={item.info}
                        >
                            <Typography variant="div" component="div">
                                <div className='assets'>
                                    <img src={item.icon} alt="propertyIconBlue" style={{ marginRight: '20px' }} />
                                    <span>{item.info}</span>
                                </div>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='sub-list'>
                            <ul>
                                {item.subData.map((innerData, index) => (
                                    <li key={index}>
                                        <Link to={innerData.subpath}>
                                            {innerData.subname}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                )
            })}

            <div onClick={handleClick} className='logout-btn cursor-pointer'>
                <img src={logout} alt="" />
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Sidebar