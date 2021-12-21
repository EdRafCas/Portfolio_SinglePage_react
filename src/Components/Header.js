import React, {useState} from 'react';
import styled from 'styled-components';
import DesktopImageBlue from './../img/desktop_blue.jpg'
import DesktopImageRed from './../img/desktop_red.jpg'



const Text =styled.div`
      display:flex;
      flex-direction:row;
      justify-content: center;
      gap:5px;
      :hover > div{
            background:red; 
      }
  
`
const Content =styled.div`
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
      ${SampleLanguage1}:hover ~ &{
            background:red; 
      }
`
const SampleLanguage3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      ${Content}:hover &{
            color:blue; 
      }  
`


const Texto =styled.h1`
            font-size:2rem;
            text-align:center;
            /* &:hover{
                  font-size:3rem;   
            } */
            ${SampleLanguage1}:hover &{
            color:blue;}
            ${SampleLanguage2}:hover &{
            color:red;
      }  
`


const ImageContainer = styled.div`
      height:60rem; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      
            /* :before{
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImageBlue});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */ */
                  
                   
      }
          
`
const FalseBackgroundBlue =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImageBlue});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}

`
const FalseBackgroundRed =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  
                  background: url(${DesktopImageRed});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}

`




const Header = () => {

      const [backgroundBlue, changeBackgroundBlue] =useState(false)
      const [backgroundRed, changeBackgroundRed] =useState(false)

      return ( 
            <>
            <ImageContainer >
                  {backgroundBlue ? 
                  <FalseBackgroundBlue/>
                  :""}
                  {backgroundRed? 
                  <FalseBackgroundRed/>
                  :""}
                 
                  <Text>
                        <Content >Hello,</Content><Content>im Eduardo,</Content> <Content>fuck off</Content>
                  </Text>   
            </ImageContainer>
            
            <LanguagesContainer>
                  <SampleLanguage1  onMouseEnter={()=>changeBackgroundBlue(true)}
                                    onMouseLeave={()=>changeBackgroundBlue(false)}>
                                    <Texto>HTML/CSS</Texto>
                  </SampleLanguage1>
                  <SampleLanguage2 onMouseEnter={()=>changeBackgroundRed(true)}
                                    onMouseLeave={()=>changeBackgroundRed(false)}>
                                    <Texto>JAVASCRITexto</Texto>
                  </SampleLanguage2>
                  <SampleLanguage3>
                        <Texto>REACT</Texto>
                  </SampleLanguage3>
            </LanguagesContainer>

            </>
            
       );
}
 
export default Header;
