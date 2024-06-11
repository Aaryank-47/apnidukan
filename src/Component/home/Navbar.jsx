import { Typography, Box, styled } from '@mui/material'; 
import { navData } from '../../constant/data';


const Component = styled(Box)(({ theme }) => ({
   // border: "0.1rem outset black",
    display: 'flex',
    backgroundColor:'#ffff',
    justifyContent: 'space-between',
    borderRadius: "8px",
    margin: '5px 10px 0 10px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
const Container = styled(Box)`
    padding: 12px 20px;
    text-align: center;
    border: 2px solid black;
    margin:1.3rem;
    justify-content: space-evenly;
    border-radius:4px;
    background-color:bisque;
`
const Text = styled(Typography)`
    font-size: 15px;
    font-weight: 600;
    font-family: inherit;
    // border: 2px solid black;
`;

const NavBar = () => {
    return (
        <Component style={{overflowX:'hidden',backgroundColor:'lightblue',border:'1px solid black'}}>
            {
                navData.map(temp => (
                    <Container style={{cursor:'pointer'}}>
                        <img src={temp.url} style={{ width:'75px',display:'flex'}} />
                        <Text>{temp.text}</Text>
                        <a href={temp.link}></a>

                    </Container>
                ))
            }
        </Component>
    );
};

export default NavBar;