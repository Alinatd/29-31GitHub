import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import { Home } from '../Pages/Home';
import { Gallery } from '../Pages/Gallery';
import { ImageView } from '../Pages/ImageView';
import { Modal } from '../Pages/Modal';


export const Modalswitch=()=> {
    let location = useLocation();
    let background = location.state && location.state.background;
  return (
    <div>
    <Routes location={background || location}>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/gallery" element={<Gallery/>}/>
         <Route exact path="/img/:id" element={<ImageView/>}/>
    </Routes>
    {background && <Route path="/img/:id" elem={<Modal/>} />}
    </div>
  )
}
