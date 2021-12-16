import React from 'react';
import styled from 'styled-components';
import DesktopImage from './../img/desktop_blue.jpg'



const ImageContainer = styled.div`
      height:60rem; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      :before{
            position:absolute;
            content:"";
            top: 0px;
            right:0px;
            bottom:0px;
            left:0px;
            opacity:0.95;
            background: url(${DesktopImage});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 176.25rem; /* 2820px */
            
            
      
      }
      
      
      
     
      
      
`
const Text =styled.div`
      display:flex;
      flex-direction:row;
      justify-content: center;
      gap:5px;
      
      p{
            position: relative;
            color: #ffffff;  
            font-size: 5rem;
            line-height: 0.9; 
            
            
      }
      
`
const Header = () => {
      return ( 
            <ImageContainer >
                  <Text>
                        <p>Hello,</p> <p>im Eduardo, </p> <p>fuck off</p>
                  </Text>
                 
            </ImageContainer>
            
       );
}
 
export default Header;
