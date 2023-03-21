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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Sidebar = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/signin");
    }

    const [expanded, setExpanded] = React.useState(false);

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
                        subpath: 'setting'
                    }
                ],
            }
        ]

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (

        <div className='sidebar'>
            <div className='collapse cursor-pointer'>
                <img src={arrow} alt="arrow" />
            </div>
            {
                data.map((item) => {
                    return (
                        <Accordion className='accordian-blue' id={item.info} expanded={expanded === item.info} onChange={handleChange(item.info)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }} />}
                                aria-controls={item.info}>
                                <Typography variant="div" component="div">
                                    <img src={item.icon} alt="propertyIconBlue" style={{ marginRight: '20px', width: '21px', height: '21px' }} />
                                    <span>{item.info}</span>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className='sub-list'>
                                <ul>
                                    {item.subData.map((innerData) => (
                                        <li key={innerData.id}>
                                            <Link to={innerData.subpath}>
                                                {innerData.subname}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

            <div onClick={handleClick} className='logout-btn cursor-pointer'>
                <img src={logout} alt="" />
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Sidebar