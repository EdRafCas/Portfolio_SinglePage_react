import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Components/Header';
import MenuBar from './Components/MenuBar';
import Showcase from './Components/Showcase';
import AboutMe from './Components/AboutMe';
import SocialNetworkBar from './Components/SocialNetworkBar';
import Contact from './Components/Contact';
import ProjectDescription from './Components/ProjectDescription';
import {Helmet} from "react-helmet";
import favicon from './icons/OmenIcon.jpg'



WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

const Index = () => {
      

  return ( 
    <Container>
      <Helmet >
      <link rel="shortcut icon" href={favicon} type="image/x-icon"></link>
      <title>Eduardo Castillo</title>
     
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true}  element={<Header />}/>
          <Route path="/Projects/:route" exact={true} element ={<ProjectDescription />}/> 
          <Route path="/Projects" exact={true}  element={<Showcase />}/>  
          <Route path="/AboutMe" exact={true} element ={<AboutMe />}/> 
          <Route path="/Contact" exact={true} element ={<Contact />}/> 
        </Routes>
        <MenuBar />
      </BrowserRouter>
      <SocialNetworkBar/>
    </Container>
    
   );
}
 
export default Index;




ReactDOM.render( <Index />,  document.getElementById('root'));

