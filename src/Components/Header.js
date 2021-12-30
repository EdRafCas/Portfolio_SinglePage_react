import React, {useState} from 'react';
import styled from 'styled-components';
import DesktopImageDefault from './../img/desktop_blue.jpg';
import DesktopImage1 from './../img/desktop_red.jpg';
import DesktopImage2 from './../img/abstract.jpg';
import DesktopImage3 from './../img/tech.jpg';
import ShopVideo from '../video/Try.mp4';



const Text =styled.div`
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      gap:40px;
`
const Content1 =styled.div`
      position: relative;
      color: #ffffff;  
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
`
const Content2 =styled.div`
      position: relative;
      color: #fff;  
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
      transition:0.3s all ease;
      text-transform:uppercase;
      :hover{
            transform:scale(1.2)
      }
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
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      background:#000;
      transition: .5s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
            border:solid 3px red;     
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
            border:solid 3px #fff;
      }
`
const SampleLanguage3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      transition: .3s ease all;
      :hover{
            border: none;
            color: white;
            background-color: black;
            transform: scale(1.3);
            border:solid 3px blue;
      }
`

const Texto =styled.h1`
      font-size:2rem;
      align-self:center;
      /* &:hover{
            font-size:3rem;   
      } */
      
      ${SampleLanguage1}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      ${SampleLanguage2}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      ${SampleLanguage3}:hover &{
            text-shadow: 5px 5px 5px grey;
            font-size:3rem;
      };
      
`
const ImageContainer = styled.div`
      height:60rem; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;           
      background:#000;     
`
const FalseBackgroundDefault =styled.div`
            position:absolute;
            content:"";
            top: 0px;
            right:0px;
            bottom:0px;
            left:0px;
            opacity:0.8;
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
            opacity:0.5;
            /* background: url(${DesktopImage1}); */
            background-repeat: no-repeat;
            background-position: center;
            background-size: 176.25rem; /* 2820px */
            ${Text}:hover + &{
                  opacity:0.6;}
`
const VideoBackground=styled.video`
      position:absolute;
      width:100%;
      left:50%;
      top:50%;
      height:100%;
      
      transform:translate(-50%,-50%);
      z-index:-1;

`
const FalseBackground2 =styled.div`
            position:absolute;
            content:"";
            top: 0px;
            right:0px;
            bottom:0px;
            left:0px;
            opacity:0.8;
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
      const [content, changeContent] =useState(false)
      const [content2, changeContent2] =useState(false)
      const [content3, changeContent3] =useState(false)

      return ( 
            <>
            <ImageContainer >
                  {background1 === true ? 
                  <FalseBackground1>
                        <VideoBackground autoPlay loop muted>
                              <source src={ShopVideo} type="video/mp4"/>
                        </VideoBackground>
                  </FalseBackground1>
                  : background2 === true ? 
                  <FalseBackground2/>
                  : background3 === true ? 
                  <FalseBackground3/>
                  :<FalseBackgroundDefault/>
                  }
                 
                  <Text>
                        <Content1   onMouseEnter={()=>changeContent(true)}
                                    onMouseLeave={()=>changeContent(false)}
                        >{content ===true ? <Content2>Front-End</Content2>: "Hello." }
                        </Content1>
                        <Content1   onMouseEnter={()=>changeContent2(true)}
                                    onMouseLeave={()=>changeContent2(false)}
                        >{content2 ===true ? <Content2>Developer</Content2>: "Im Eduardo." }
                        </Content1>
                        <Content1   onMouseEnter={()=>changeContent3(true)}
                                    onMouseLeave={()=>changeContent3(false)}
                        >{content3 ===true ? <Content2>CONTACT</Content2>: "Welcome to my portfolio" }
                        </Content1>
                  </Text>   
            </ImageContainer>
            
            <LanguagesContainer>
                  <SampleLanguage1  onMouseEnter={()=>changeBackground1(true)}
                                    onMouseLeave={()=>changeBackground1(false)}>
                                    <Texto>HTML/CSS</Texto>
                  </SampleLanguage1>
                  <SampleLanguage2 onMouseEnter={()=>changeBackground2(true)}
                                    onMouseLeave={()=>changeBackground2(false)}>
                                    <Texto>JAVASCRIPT</Texto>
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
