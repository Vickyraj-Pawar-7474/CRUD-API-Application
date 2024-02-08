import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import App from '../App';
import Add from './Add';
import Update from './Update';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
        
        
        </BrowserRouter>
      
    </div>
  )
}

export default AppRouter
