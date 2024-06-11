import { Box, Button, styled, Typography,IconButton} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoreIcon from '@mui/icons-material/Store';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ShoppingCart } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import PreviewIcon from '@mui/icons-material/Preview';
import SellIcon from '@mui/icons-material/Sell';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import LoginIcon from '@mui/icons-material/Login'; 
import { PiUserSwitchFill } from "react-icons/pi";

const Mkv = styled(Menu)`
margin-top:20px;
`;
//all link in Menu an buttons
const LinkMenu = styled(Link)`
color:black ;
text-decoration: none; 
`;

const Skv = styled(Menu)`
margin-top:20px;
`;
//Geate account
const Kl = styled(SwitchAccountIcon)`  
padding:10px;
`;
//Your Review
const Kh = styled(SellIcon)`
margin-left:35px;
`;
//Top Sell
const Kg = styled(PreviewIcon)`
margin-left:10px;
`;
//logi
const Kd =styled(LoginIcon)`
margin-left:26px;
`;
 //Logout
const Kt = styled(LogoutIcon)`
margin-left:22px;
`;
//Favourite
const Ky = styled(FavoriteBorderIcon)`
padding:5px;
`;
//Help Center
const  Ka = styled(HeadsetMicIcon)`
margin-left:10px;
`;
//Orders
const Ko = styled(DirectionsBikeIcon)`
margin-left:20px;
`;
//Switch account
const Kp = styled(PiUserSwitchFill)`
padding:10px;
font-size:1.7rem;
`;
//SignUp
const Ku = styled(PermIdentityIcon)`
margin-left:19px;
`;
const LoginButton = styled(Box)`
width:100%;
height:40px; 
margin-left:12px;
margin-right:auto%;
display:flex;
margin:0 50% 0 20%;
`;
const BecomeSeller = styled(Button)
`
    height:40px;
    font-Family: initial;
    font-Size:17px;
    color:#ffff;    
    margin-Right:50px;
}`;

const CustomButtons = () => {
 // login-menu hover bat
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick =(event: React.mouseEvent1) => {
      setAnchorEl( event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(false);
    };
// End Tha Login-menu bar

// NOtification Bar.
    const [anchorEl3, setAnchorEl3] = React.useState(false);
    const open3 = Boolean(anchorEl3);
    const handleClick3 =(event: React1.mouseEvent1) => {
      setAnchorEl3( event.currentTarget);
    };
    const handleClose3 = () => {
      setAnchorEl3(false);
    };
// End the bar.
//This is a seller-hover bar
const [anchorEl1, setAnchorEl1] = React.useState(false);
const open1 = Boolean(anchorEl1);
const handleClick1 =(event1: React.mouseEvent3) => {
  setAnchorEl1( event1.currentTarget);
};
const handleClose1 = () => {
  setAnchorEl1(false);
};
  // END the bar
  
 
    return (
       
        <LoginButton onClick={handleClose}>
              
        <Button  variant="" style={{ color: "#ffff", fontFamily: "initial",marginRight:"15%",marginLeft:'-10%', fontSize: "17px",width:100}}  
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick} 
       
      >    
       {< AccountCircleIcon fontSize="large"/>}
        
      
        < Mkv  
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onMouseLeave={handleClose}
        MenuListProps={{'aria-labelledby': 'basic-button',}}
      >
        <  Box onMouseLeave={handleClose}> 
        <LinkMenu  href="#"><MenuItem onClick={handleClose}>SignUp<Ku/></MenuItem></LinkMenu>
        <LinkMenu  href="#"><MenuItem onClick={handleClose}>Login<Kd/></MenuItem></ LinkMenu>
        <LinkMenu  href="#"><MenuItem onClick={handleClose}>Favourite<Ky/></MenuItem></ LinkMenu>
        <LinkMenu  href="#"><MenuItem onClick={handleClose}>Orders<Ko/></MenuItem></ LinkMenu>
        <LinkMenu href="#"><MenuItem onClick={handleClose}>Logout<Kt/></MenuItem></ LinkMenu>
        </Box>
      </Mkv>
       
      </Button >
      
      
             < BecomeSeller variant=""
             id="basic"
             aria-controls={open1 ? 'basic2' : undefined}
             aria-haspopup="true"
             aria-expanded={open1 ? 'true' : undefined}
             onMouseEnter={handleClick1}
             style={{marginLeft:'-6%'}}
            >
             
            {<StoreIcon fontSize="large" />}
       
      < Skv
        id="basic2"
        anchorEl={anchorEl1}
        open={open1}
        onMouseLeave={handleClose1}
        MenuListProps={{'aria-labelledby': 'basic',}}
      >
        < Box onMouseLeave={handleClose1} > 
        < LinkMenu  href="#"><MenuItem onClick={handleClose1} >Create account<Kl/></MenuItem></LinkMenu>
        <LinkMenu LinkMenu  href="#"><MenuItem onClick={handleClose1}>Switch account< Kp /></MenuItem></LinkMenu>
        </ Box>
      </Skv>
         
      </BecomeSeller>
      
            <Button>
                <ShoppingCart  fontSize="large" style={{color: "#ffff",marginLeft:'-26%'}} />
                < LinkMenu  href="#">  <Typography  style={{color: "#ffff"}}>Cart</Typography></LinkMenu>
            </Button>

                        
      <IconButton aria-label="threeDotButton" size="large" style={{textAlign:"center",marginRight:'60px'}}

      id="basic-button1"
      aria-controls={open3 ? 'basic-menu5' : undefined}
      aria-haspopup="true"
      aria-expanded={open3 ? 'true' : undefined}
      onMouseEnter={handleClick3}
      >
      < Mkv  
        id="basic-menu5"
        anchorEl={anchorEl3}
        open={open3}
        onMouseLeave={handleClose3}
        MenuListProps={{'aria-labelledby': 'basic-button',}}
      >
        <Box onMouseLeave={handleClose3}> 
        <LinkMenu  href="#"><MenuItem onClick={handleClose3}>Help Center<Ka/></MenuItem></ LinkMenu>
        <LinkMenu  href="#"><MenuItem onClick={handleClose3}>Top Sell<Kh/></MenuItem></ LinkMenu>
        <LinkMenu  href="#"><MenuItem onClick={handleClose3}>Your Review<Kg/></MenuItem></  LinkMenu>
        </Box>
      </Mkv>

      < MoreVertIcon fontSize="inherit" style={{color:"#ffff"}}/>
      </IconButton>
     
      </LoginButton>
    );
};
export default CustomButtons;