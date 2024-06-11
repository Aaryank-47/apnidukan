import './App.css'
import Header from './Component/header/Header';
import Home from './Component/home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 90 }}>
        <Home />
      </Box>
    </div>
  );
};

export default App;