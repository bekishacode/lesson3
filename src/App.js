import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed} from './components';

const App = () => (
    <BrowserRouter>
     <Box sx={{backgroundColor: '#000'}} >
      <Navbar/>
      <Routes>
        <Route path='/' exact element= {<Feed/>} />
        <Route path='/Video/:id' element ={<VideoDetail/>} />
        <Route path='/Channel/:id' element ={<ChannelDetail/>} />
        <Route path='/Search/:searchTerm' element ={<SearchFeed/>} />
      </Routes>
     </Box>
    </BrowserRouter>
  );
export default App
