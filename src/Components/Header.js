import React, {useState} from 'react';
import styled from 'styled-components';
import DesktopImageDefault from './../img/desktop_blue.jpg'
import DesktopImage1 from './../img/desktop_red.jpg'
import DesktopImage2 from './../img/abstract.jpg'
import DesktopImage3 from './../img/tech.jpg'



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
      transition: .5s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
      }
      
`
const SampleLanguage2=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      transition: .5s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
      }
`
const SampleLanguage3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      transition: .5s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
      }
`


const Texto =styled.h1`
            font-size:2rem;
            text-align:center;
            /* &:hover{
                  font-size:3rem;   
            } */
            ${SampleLanguage1}:hover &{
                  box-shadow: 5px 5px 5px 5px grey;
                  color: green;
                  background-color: white;
            ${SampleLanguage2}:hover &{
                  box-shadow: 5px 5px 5px 5px grey;
                  color: green;
                  background-color: white;
      }  
`


const ImageContainer = styled.div`
      height:60rem; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;           
      }
          
`

const FalseBackgroundDefault =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.9;
                  background: url(${DesktopImageDefault});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}
`

const FalseBackground1 =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImage1});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}

`

const FalseBackground2 =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImage2});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}
`
const FalseBackground3 =styled.div`
                  position:absolute;
                  content:"";
                  top: 0px;
                  right:0px;
                  bottom:0px;
                  left:0px;
                  opacity:0.90;
                  background: url(${DesktopImage3});
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 176.25rem; /* 2820px */
                  ${Text}:hover + &{
                        opacity:0.5;}
`




const Header = () => {

      const [background1, changeBackground1] =useState(false)
      const [background2, changeBackground2] =useState(false)
      const [background3, changeBackground3] =useState(false)

      return ( 
            <>
            <ImageContainer >
                  {background1 === true ? 
                  <FalseBackground1/>
                  : background2 === true ? 
                  <FalseBackground2/>
                  : background3 === true ? 
                  <FalseBackground3/>
                  :<FalseBackgroundDefault/>
                  }
                 
                  <Text>
                        <Content >Hello,</Content><Content>im Eduardo,</Content> <Content>fuck off</Content>
                  </Text>   
            </ImageContainer>
            
            <LanguagesContainer>
                  <SampleLanguage1  onMouseEnter={()=>changeBackground1(true)}
                                    onMouseLeave={()=>changeBackground1(false)}>
                                    <Texto>HTML/CSS</Texto>
                  </SampleLanguage1>
                  <SampleLanguage2 onMouseEnter={()=>changeBackground2(true)}
                                    onMouseLeave={()=>changeBackground2(false)}>
                                    <Texto>JAVASCRITexto</Texto>
                  </SampleLanguage2>
                  <SampleLanguage3 onMouseEnter={()=>changeBackground3(true)}
                                    onMouseLeave={()=>changeBackground3(false)}>
                        <Texto>REACT</Texto>
                  </SampleLanguage3>
            </LanguagesContainer>

            </>
            
       );
}
 
export default Header;
