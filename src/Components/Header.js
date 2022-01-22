import React, {useState} from 'react';
import styled from 'styled-components';
import DesktopImageDefault from './../img/desktop_blue.jpg';
import DesktopImage1 from './../img/desktop_red.jpg';
import DesktopImage2 from './../img/abstract.jpg';
import DesktopImage3 from './../img/tech.jpg';




const TextContainer =styled.div`
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      gap:40px;
`
const Content1 =styled.div`
      position: relative;
      color:#ccd6f6;  
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
`
const Content2 =styled.div`
      position: relative;
      color:#ccd6f6; 
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
      transition:0.3s all ease;
      text-transform:uppercase;
      width:100rem;
      display:flex;
      justify-content:center;
      /* border:1px solid white; */
      :hover{
            transform:scale(1.2)
      }
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
      
`
const FalseBackground1 =styled.div`
      position:absolute;
      content:"";
      top: 0px;
      right:0px;
      bottom:0px;
      left:0px;
      opacity:0.5;
      background: url(${DesktopImage1});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 176.25rem; /* 2820px */
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
            
`

const Header = ({background1, background2, background3}) => {

      
      const [content, changeContent] =useState(false)
      const [content2, changeContent2] =useState(false)
      const [content3, changeContent3] =useState(false)
      

      return ( 
            <ImageContainer >
                  {/* {background1 === true ? 
                  <FalseBackground1/>
                  : background2 === true ? 
                  <FalseBackground2/>
                  : background3 === true ? 
                  <FalseBackground3/>
                  :<FalseBackgroundDefault/>
                  } */}
                  <FalseBackgroundDefault/>
                       
                  <TextContainer>
                        <Content1  onMouseEnter={()=>changeContent(true)}
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
                  </TextContainer>   
            </ImageContainer>
       );
}
 
export default Header;
