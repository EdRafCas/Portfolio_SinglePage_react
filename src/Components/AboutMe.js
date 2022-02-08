import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';

const DescriptionContainer = styled.div`
           
      height:60rem; /* 700px */
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:100%;
      justify-content:center;
      align-items:center;
      min-width:375px;
      @media(max-width: 1140px){ 
            width: 100%;
            height:60rem   
       }
      @media(max-width: 760px){ 
            height:40rem  
           
      } 
      @media(max-width: 375px){ 
            height:30rem  
            
      } 
      

`

const Card =styled.div`
      border:solid ${theme.mainBorder} 10px;
      margin:0rem;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:1.5rem;
      max-width:80%;
      cursor:auto;
      color:#ccd6f6;
      @media(max-width: 1140px){ 

       }
      @media(max-width: 760px){ 
            border:solid ${theme.mainBorder} 5px;
           
      } 
      @media(max-width: 375px){ 
            
      
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
      font-size:1.5rem;
      padding:2rem;
      @media(max-width: 1140px){ 
            
      }
      @media(max-width: 760px){ 
            font-size:1rem;
            padding:1rem;
               
      } 
      @media(max-width: 375px){ 
            font-size:1rem;
            padding:0.5rem;
            
      } 
`

const AboutMe = () => {
      return ( 
            <DescriptionContainer>
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
       );
}
 
export default AboutMe;