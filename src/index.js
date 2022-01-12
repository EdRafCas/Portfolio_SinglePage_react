import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import MenuBar from './Components/MenuBar';
import Showcase from './Components/Showcase';
import SocialNetworkBar from './Components/SocialNetworkBar';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const Index = () => {
      const [background1, changeBackground1] =useState(false)
      const [background2, changeBackground2] =useState(false)
      const [background3, changeBackground3] =useState(false)

  return ( 
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true}  element={<Header background1={background1} background2={background2} background3={background3} />}/>   
          <Route path="/Projects" exact={true}  element={<Showcase />}/>   
        </Routes>
        <MenuBar changeBackground1={changeBackground1} changeBackground2={changeBackground2} changeBackground3={changeBackground3}/>
      </BrowserRouter>
      <SocialNetworkBar/>
    </Container>
    
   );
}
 
export default Index;




ReactDOM.render( <Index />,  document.getElementById('root'));

