import * as React from 'react';
//component
import NavBar from '../home/Navbar.jsx';
import Banner from '../home/banner.jsx';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import { Box, styled } from '@mui/material';
import Footer from '../Footer/Footer.jsx';
// import Product from './Product.jsx';

const Component = styled(Box)`
background: #c EEB;
padding: 10px 10px;
`;

// const product = {
//   name:"T-shirt",
//   images:[{url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=90&crop=false"}],
//   price:"3000rs",
//   id:"aaryan",
// }
const Home = () => {
  return (
    <React.Fragment>
      < Component>
      <Router>
      <NavBar />
        <Banner />
        {/* <h2 className='homeheading'>Featured Product</h2> */}
        {/* <Box className="container" id="container"> */}
          {/* <Product product={product} /> */}
        {/* </Box> */}
        <Routes>
          <Route path='/' element={<Footer/>}/>
        </Routes>
      </Router>
      </ Component>
    </React.Fragment>
  )
};
export default Home;