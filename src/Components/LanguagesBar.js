import React from 'react';
import styled from 'styled-components';

const LanguagesContainer= styled.div`
      width:100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      height:15rem;
      background:#000;
`

const SampleLanguage=styled.div`
      height:100%;
      color:#fff;
      display:flex;
      flex-direction:column;
      justify-content:center;
      p{
           font-size:2rem;
           text-align:center;
      }
      
`


const LanguagesBar = () => {
      return ( 
            <LanguagesContainer>
                  <SampleLanguage><p>HTML/CSS</p></SampleLanguage>
                  <SampleLanguage><p>JAVASCRIPT</p></SampleLanguage>
                  <SampleLanguage><p>REACT</p></SampleLanguage>
            </LanguagesContainer>
       );
}
 
export default LanguagesBar;