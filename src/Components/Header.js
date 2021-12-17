import React from 'react';
import styled from 'styled-components';
import DesktopImage from './../img/desktop_blue.jpg'


const Example =styled.div`
      height:80px;
      width:100%;
      
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
const Parrafos =styled.div`
            position: relative;
            color: #ffffff;  
            font-size: 5rem;
            line-height: 0.9;
`

const LanguagesContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:15rem;
      background:#000;
      z-index:1;
`

const SampleLanguage1=styled.div`
      height:100%;
      color:#000;
      display:flex;
      flex-direction:column;
      justify-content:center;
      background:#fff;
      
`
const SampleLanguage2=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      ${SampleLanguage1}:hover &{
            font-size: 25rem; 
      }
`
const SampleLanguage3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;  
`

const Texto =styled.h1`
            font-size:2rem;
            text-align:center;
            /* &:hover{
                  font-size:3rem;   
            } */
            ${SampleLanguage1}:hover &{
                  font-size:3rem;  
                  background:#000;
                  color:#fff;  
            }
`
const ImageContainer = styled.div`
      height:60rem; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      ${Example}:hover {
            opacity:0.50;
      } 
            :before{
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImage});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  
      }     
`



const Header = () => {
      return ( 
            <>
            <ImageContainer >
                  <Text>
                        <Parrafos>Hello,</Parrafos> <p>im Eduardo, </p> <p>fuck off</p>
                  </Text>   
            </ImageContainer>
            <Example/>
            <LanguagesContainer>
                  <SampleLanguage1><Texto>HTML/CSS</Texto></SampleLanguage1>
                  <SampleLanguage2><Texto>JAVASCRITexto</Texto></SampleLanguage2>
                  <SampleLanguage3><Texto>REACT</Texto></SampleLanguage3>
            </LanguagesContainer>

            </>
            
       );
}
 
export default Header;
