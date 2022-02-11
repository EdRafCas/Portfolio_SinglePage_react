import React, {useState} from 'react';
import styled from 'styled-components';
import DesktopImageDefault from './../img/desktop_blue.jpg';
/* 
import DesktopImage1 from './../img/desktop_red.jpg';
import DesktopImage2 from './../img/abstract.jpg';
import DesktopImage3 from './../img/tech.jpg'; 
*/
import theme from '../Theme';



const TextContainer =styled.div`
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;
      gap:40px;
`
const Content1 =styled.div`
      position: relative;
      color:${theme.mainText};  
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
      text-align:center;
      cursor:pointer;
      @media(max-width: 1140px){ 
            font-size: 4rem;
      }
      @media(max-width: 760px){ 
            font-size: 2rem;
      }
      @media(max-width: 375px){ 
            font-size: 1.5rem;
      }
`
const Content2 =styled.div`
      position: relative;
      color:${theme.mainText}; 
      font-size: 5rem;
      line-height: 0.9;
      font-weight:1000;
      transition:0.3s all ease;
      text-transform:uppercase;
      
      display:flex;
      justify-content:center;
      cursor:pointer;
      /* border:1px solid white; */
      
      @media(min-width: 761px){ 
            :hover{
                  transform:scale(1.2)
            }
      }
      @media(max-width: 1140px){ 
            font-size: 4rem;
      }
      @media(max-width: 760px){ 
            font-size: 3rem;
      }
      @media(max-width: 375px){ 
            font-size: 1.5rem;
      }
`

const ImageContainer = styled.div`
      
      height:85vh; /* 700px */
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;           
      background:#000;
      width:100%;
      max-height:85rem;
      @media(max-width: 1140px){ 
            width: 100%;
              
       }
      @media(max-width: 760px){ 
            
           
      } 
      @media(max-width: 375px){ 
            height:90vh;  
      
      } 
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
      @media(min-width: 1141px){ 
            background-size: 176.25rem; 
           
      } 
      @media(max-width: 1140px){ 
            background-size: 1140px; 
           
      } 
      @media(max-width: 760px){ 
            background-size: 760px; 
           
      } 
      
      
`
/* const FalseBackground1 =styled.div`
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
      background-size: 176.25rem; 
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
      background-size: 176.25rem;      
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
      background-size: 176.25rem;           
` */

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
