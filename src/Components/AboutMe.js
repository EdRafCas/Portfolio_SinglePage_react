import React from 'react';
import styled from 'styled-components';

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
      border:solid #3D0000 10px;
      margin:auto;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:1.5rem;
      max-width:60%;

`
const Title=styled.h1`
      font-size:2rem;
      padding:2rem;
      padding-bottom:1rem;
      
`

const Description=styled.p`
      max-width:100rem;
      font-size:1.2rem;
      padding:2rem;
     
`

const AboutMe = () => {
      return ( 
            <DescriptionContainer>
                  <Card>
                        <Title>Eduardo Castillo</Title>
                        <Description>
                              29 years old civil engineer, self taught front end developer (in development), aiming to learn and create, to build and improve.
                              
                        </Description>


                  </Card>
            </DescriptionContainer>
       );
}
 
export default AboutMe;