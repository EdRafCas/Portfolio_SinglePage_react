import React from 'react';
import styled from 'styled-components';

const LanguagesContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:15rem;
      background:#000;
`

const SampleLanguage1=styled.div`
      height:100%;
      color:#000;
      display:flex;
      flex-direction:column;
      justify-content:center;
      background:#fff;
      ${LanguagesContainer}:hover &{
                  font-size:3rem; 
                  background:#000;
                  color:#fff;  
            }     
`
const SampleLanguage2=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
  
      
`
const SampleLanguage3=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      
      
`
const Texto =styled.h1`
            font-size:2rem;
            text-align:center;
            /* &:hover{
                  font-size:3rem;   
            } */
            ${SampleLanguage1}:hover &{
                  font-size:3rem;  
                  background:#000;
                  color:#fff;  
            }
`




const LanguagesBar = () => {
      return ( 
            <LanguagesContainer>
                  <SampleLanguage1><Texto>HTML/CSS</Texto></SampleLanguage1>
                  <SampleLanguage2><Texto>JAVASCRITexto</Texto></SampleLanguage2>
                  <SampleLanguage3><Texto>REACT</Texto></SampleLanguage3>
            </LanguagesContainer>
       );
}
 
export  {LanguagesBar, LanguagesContainer, SampleLanguage1, SampleLanguage2, SampleLanguage3};