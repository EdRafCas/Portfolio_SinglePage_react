import React from 'react';
import styled from 'styled-components';
import DesktopImage from './../img/desktop_blue.jpg'


const ImageContainer = styled.div`
      overflow:hidden;
      background: url(${DesktopImage}), rgba(255, 255, 255, 0.7);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 156.25rem; /* 2500px */
      
      height:43.75rem; /* 700px */
      img{
            margin-top:-15.625rem;/* -250px */
            width:100%;
            
      }
      
`
const Text =styled.div`
      p{
            color:#fff;
            font-size:15rem;
      }
`
const Header = () => {
      return ( 
            <ImageContainer >
                  <Text>
                        <p>Hello</p>
                  </Text>
                 
            </ImageContainer>
            
       );
}
 
export default Header;
