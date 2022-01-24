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

const Contact = () => {
      return ( 
            <DescriptionContainer>
                  <Card>
                        <Title>About Me</Title>
                        <Description>
                              
                        </Description>



                  </Card>
            </DescriptionContainer>
       );
}
 
export default Contact;