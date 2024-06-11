import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import React, { useState } from 'react'
import HbMenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StarIcon from '@mui/icons-material/Star';
import SellIcon from '@mui/icons-material/Sell';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';


const LinkMenu = styled(Link)`
text-decoration: none;
color:black
`
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <React.Fragment >

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >

        <List sx={{ backgroundColor: 'white',width:'300px'}}>
          {<Divider color="black" />}
          <ListItemButton sx={{ backgroundColor: 'lightblue'}}>
            <ListItemIcon  sx={{ color: 'black',alignItems:'center' }}>
              <AccountCircleIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px',alignItems:'center' }}>
              <LinkMenu href ="#">
                  <MenuItem sx={{fontSize:'1.3rem' }}>Login & SignUp</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >

          {<Divider color="black" />}
        </List>

        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <DeliveryDiningIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>ORDER</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>

        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon  sx={{ color: 'black',alignItems:'center' }}>
              <ShoppingCartCheckoutIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>My Cart</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>

        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <StarIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>Favourite</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>

        {<Divider color="black" />}
        
        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <StorefrontIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>Seller</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>
        
        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <NotificationsIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>Notifications</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>
        
        <Divider color="black" />
        
        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <ReviewsIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
                <LinkMenu href ="#">
                  <MenuItem>Your Review</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>

        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <HelpCenterIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
              <LinkMenu href ="#">
                  <MenuItem>Help Center</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>

        <List sx={{ backgroundColor: 'white' }}>
          <ListItemButton >
            <ListItemIcon sx={{ color: 'black',alignItems:'center' }} >
              <SellIcon />
              <ListItemText sx={{ color: 'black', marginLeft: '10px', alignItems:'center' }}>
              <LinkMenu href ="#">
                  <MenuItem>Top Sell</MenuItem>
                </LinkMenu>
              </ListItemText>
            </ListItemIcon >
          </ListItemButton >
        </List>
      </Drawer>

      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <HbMenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp;









/* <List sx={{backgroundColor:'white'}} >
  {
    pages2.map((pages2, index) => (
      <ListItemButton key={index}>
        <ListItemIcon>
          <ListItemText sx={{color:'black'}}>{pages2}</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    ))
  }
</List>
  <Divider/>
<List sx={{backgroundColor:'white'}}>
  {
    pages3.map((pages3, index) => (
      <ListItemButton key={index}>
        <ListItemIcon>
          <ListItemText sx={{color:'black'}}>{pages3}</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    ))
  }
</List>
<Divider/> */