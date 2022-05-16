import React from 'react'
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MovingIcon from '@mui/icons-material/Moving';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navabar.css'

function Navabar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='main'>
      <nav className='navmain'>
        <div>
          <img src='flipkart.webp'></img>
          <input type="search " placeholder='Search for products, brands and more'></input>
          <button>Login</button>
        </div>
        <div>
          become a seller
        </div>
        <div>
          <Button
            style={{ color: 'white', height: 40, padding: 0, transform: 'translateY(-4px)' }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            More <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><NotificationsIcon ></NotificationsIcon>&nbsp;Notification prefrances</MenuItem>
            <MenuItem onClick={handleClose}><QuestionAnswerIcon></QuestionAnswerIcon>&nbsp;24 <CloseIcon fontSize='small'></CloseIcon>7</MenuItem>
            <MenuItem onClick={handleClose}>< MovingIcon></MovingIcon>&nbsp;Advertise</MenuItem>
            <MenuItem onClick={handleClose}><DownloadIcon></DownloadIcon>&nbsp;download</MenuItem>
          </Menu>
        </div>
        <div><ShoppingCartIcon></ShoppingCartIcon>cart</div>
      </nav>
    </div>
  )
}

export default Navabar