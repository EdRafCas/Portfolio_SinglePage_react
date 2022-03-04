import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const DescriptionContainer = styled.div`
      height:85vh; /* 700px */
      max-height:85rem;
      min-height:600px;
      width:100%;
      min-width:375px;
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:60%;
      
      justify-content:center;
      align-items:center;
      min-width:375px;
      @media(max-width: 1140px){ 
            
           
       }
      @media(max-width: 760px){ 
            padding:0 2.5rem;
      } 
      @media(max-width: 375px){ 
            height:90vh;
            min-height:35rem; 
            
            
      } 
      

`
const Card =styled.div`
      border:solid ${theme.mainBorder} 10px;
      margin:0rem;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:1.5rem;
      
      cursor:auto;
      color:#ccd6f6;
      @media(max-width: 1140px){ 
            
       }
      @media(max-width: 760px){ 
            border:solid ${theme.mainBorder} 5px;
            
           
      } 
      @media(max-width: 375px){ 
            border:solid ${theme.mainBorder} 3px;
            
      
      } 

`
const Title=styled.h1`
      font-size:2rem;
      padding:2rem;
      padding-bottom:1rem;
      @media(max-width: 1140px){ 
            
      }
      @media(max-width: 760px){ 
            font-size:1rem;
            padding:1rem;
            
      } 
      @media(max-width: 375px){ 
            padding:0.5rem;
            
            
      } 
      
`
const Description=styled.p`
      max-width:100rem;
      font-size:1rem;
      padding:2rem;
      @media(max-width: 1140px){ 
            
      }
      @media(max-width: 760px){ 
            font-size:0.8rem;
            padding:1rem;
               
      } 
      @media(max-width: 375px){ 
            font-size:0.7rem;
            padding:0.5rem;
            
      } 
`
const ButtonBack=styled(Link)`
      display: flex;
      position:absolute;
      top:5%;
      right:5%;
      height: 3rem;
      width: 5rem;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: none;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      background: ${theme.mainText};
      text-decoration:none;
      font-size: 1.5rem;
      font-weight:800;
      color:#000;
      svg{
            margin-right: 5px;
            margin-left: 5px;
            font-size: 1.5rem;
            transition: all 0.4s ease-in;
      }
      :hover{
            box-shadow: 9px 9px 33px ${theme.mainText}, -9px -9px 33px ${theme.mainText};
            transform: translateY(-2px);
            svg{
                  font-size: 1.3rem;
                  transform: translateX(-10px);
            }
      }
      @media(max-width: 930px){ 
            height: 2.5rem;
            width: 3rem;
            font-size: 1rem;
            svg{
                  margin-right: 0px;
                  margin-left: 0px;
                  font-size: 1rem;

            }
            :hover{
                  box-shadow: 6px 6px 22px ${theme.mainText}, -6px -6px 22px ${theme.mainText};
                  transform: translateY(-1px);
                  svg{
                        font-size: 1rem;
                        transform: translateX(-5px);
                  }
            }
      }
      @media(max-width: 490px){ 
            top:2%;
            font-size: 1rem;
            svg{
                  margin-right: 0px;
                  margin-left: 0px;
                  font-size: 0.5rem;

            }
            
            
      }
`
const AboutMe = () => {
      return (
      <>
            <Helmet >
                  <title>About me</title>
            </Helmet>
            <DescriptionContainer>
                  <ButtonBack to="/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        
                  </ButtonBack>
                  <Card>
                        <Title>About Me</Title>
                        <Description>
                              Hello! My name is Eduardo and im a long time enthusiast of learning new things, i went to college and graduated from Civil engineering, with time and effort i search for a new challenge, a new career and a new passion.                               
                              <br/>
                              <br/>
                              Turns out, that career was web development.                   
                              <br/>
                              <br/>
                              I began to learn by my own means at the start of 2021, HTML/CSS/JS were the beginning of the journey, React/JS(ES6)/Firebase soon followed.               
                              <br/>
                              <br/>
                              Im a self taught front end developer (in development), aiming to learn and create, to build and improve.
                        </Description>



                  </Card>
            </DescriptionContainer>
      </>
      );
}
 
export default AboutMe;