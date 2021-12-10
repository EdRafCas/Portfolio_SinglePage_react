import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Container from './Components/Container';
import Header from './Components/Header';

const Index = () => {
  return ( 
    <Container>
      <Header/>
      <App/>
    </Container>
    
   );
}
 
export default Index;




ReactDOM.render( <Index />,  document.getElementById('root'));

