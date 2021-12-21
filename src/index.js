import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from './Components/Container';
import Header from './Components/Header';
import {LanguagesBar} from './Components/LanguagesBar';
import SocialNetworkBar from './Components/SocialNetworkBar';

const Index = () => {
  return ( 
    <Container>
      <Header/>

      <SocialNetworkBar/>
    </Container>
    
   );
}
 
export default Index;




ReactDOM.render( <Index />,  document.getElementById('root'));

