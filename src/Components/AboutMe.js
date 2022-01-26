import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';

const DescriptionContainer = styled.div`
      position:relative;      
      height:60rem; /* 700px */
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:100%;
      

`

const Card =styled.div`
      border:solid ${theme.mainBorder} 10px;
      margin:auto;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:1.5rem;
      max-width:60%;
      cursor:auto;
      color:#ccd6f6;

`
const Title=styled.h1`
      font-size:2rem;
      padding:2rem;
      padding-bottom:1rem;
      
`

const Description=styled.p`
      max-width:100rem;
      font-size:1.5rem;
      padding:2rem;
     
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