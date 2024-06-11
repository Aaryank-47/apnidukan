import { AppBar, styled, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import DrawerComp from './DrawerComp';
// import StoreIcon from '@mui/icons-material/Store';
import smlogo from '../../logo/logo2.png'



const StyledHeader = styled(AppBar)`
background: #262626;
height: 80px`;

const Mainlogo = styled(Box)`
width:20%;
// line-height:0;
margin-right:150px;
margin-left:1%;
height:-33%;
marginTop:10%;
`

const Header = () => {
   const theme = useTheme();
   // console.log(theme);

   const isSize = useMediaQuery('(min-width:466px)');
   const isMatch = useMediaQuery(theme.breakpoints.down('md'));
   // console.log(isMatch)
   const logoURL = 'https://storage.googleapis.com/zopsmart-uploads/originals/20200729/apnidukan%281%29-20200729-062205.png';

   return (

      < StyledHeader>
         <Toolbar>
            {
               isSize ? (
                  <Mainlogo>
                     <img src={logoURL} alt="dfg" style={{height:'60px',marginTop:'10%',marginBottom:'1.4rem'}}/>
                  </Mainlogo>
               )
                  : (
                     <Mainlogo>
                        <img src={smlogo} alt="logo" style={{ width: 73, minHeight: 55 }} />
                     </Mainlogo>

                  )
            }

            <Search />
            {
               isMatch ? (
                  <DrawerComp />
               )
                  : (
                     <Box>
                        <CustomButtons />
                     </Box>
                  )
            }
           
         </Toolbar>
      </StyledHeader >
   )

}

export default Header;