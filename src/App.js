import {BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicePage from './pages/Service';
import ToolPage from './pages/Tools';
import LayoutPage from './layout/MainNavigation';

function App() {
  //localhost:3000/
  return(
    <Routes>
      <Route path='/' element={<LayoutPage/>}>
        <Route index element={<HomePage/>} />
        <Route path='/service' element={<ServicePage/>} />
        <Route path='/tools' element={<ToolPage/>} />
        <Route path='/about' element={<AboutPage/>} />  
      </Route>
    </Routes>
    );
}

export default App;
