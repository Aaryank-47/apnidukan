import { InputBase, Box, styled, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const InputSearchBase = styled(InputBase)`
font-size:130% ;
font-weight:550;
width: 100%;
padding-left:10%;
// margin-left:12px;
`;
const SearchContainer = styled(Box)`
  width:40%;
  // margin-top:10%
  height:40px;
  background-color: #ffff;
  border-radius:20px;
  margin-left:-8%;
  margin-bottom:1.4rem;
  display:flex;
`;
const Searchicon2 = styled(Box)`
// margin-right:5px;
padding:7px;
display:flex;
color:black; 
`
const Search = () => {

  const isCorr = useMediaQuery('(min-width:466px)');

  return (
    isCorr ? (
      <SearchContainer style={{ marginTop: '2%' }}>
      < InputSearchBase placeholder='Search for products, brands and more' />
      <Searchicon2>
        <SearchIcon />
      </Searchicon2>
    </SearchContainer>
    )
    :(
      <SearchContainer style={{ marginLeft: '-39%',marginTop:'7%',width:'50%' }}>
      < InputSearchBase placeholder='Search for products, brands and more' />
      <Searchicon2>
        <SearchIcon />
      </Searchicon2>
    </SearchContainer>
    )
  );
}
export default Search;