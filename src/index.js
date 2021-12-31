import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import SocialNetworkBar from './Components/SocialNetworkBar';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const Index = () => {
  return ( 
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true}  element={<Header/>}/>   
        </Routes>
      </BrowserRouter>
      

      <SocialNetworkBar/>
    </Container>
    
   );
}
 
export default Index;




ReactDOM.render( <Index />,  document.getElementById('root'));

