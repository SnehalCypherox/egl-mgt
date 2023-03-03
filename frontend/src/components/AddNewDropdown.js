import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const AddNewDropdown = ({ menuTitle, subMenuList, handleSelectedMenu }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    {menuTitle}
                </Button>
                <Menu
                    id="demo-customized-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {subMenuList.map((menu) => {
                        return (
                            <MenuItem
                                key={menu.menuId}
                                onClick={() => {
                                    handleSelectedMenu(menu);
                                    handleClose();
                                    // titleName(menu.menuTitle)
                                }}
                            >
                                {menu.menuTitle}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div>
        </>
    );
};

export default AddNewDropdown;
