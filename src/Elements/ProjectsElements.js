import styled from 'styled-components';
import theme from '../Theme';

const Card =styled.div`
      position:absolute;
      display:flex;
      height:60vh;
      width:60%;
      max-width:100%;
      min-width:300px;
      overflow:hidden;
      flex-direction:column;
      align-items:center;
      padding:2rem 2rem 1rem;
      left:0px;
      top:0px;
      border:solid ${theme.mainBorder} 5px; 
      margin:auto;
      color:#fff;
      border-radius:15px;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      
      z-index:100;
      @media(max-width: 1200px){
            height:100%;
            padding:0rem;
            top:0px;
            left:auto;
            right:auto;
            width:90%;
            justify-content:center;   
      }
      @media(max-width: 760px){ 
            padding:0rem;
                        
      }
`
const Title=styled.h1`
      font-size:1.5rem;
      padding:0.5rem;
      padding-bottom:1rem;
      @media(max-width: 1140px){ 
            
      }
      @media(max-width: 760px){ 
            font-size:1rem;
           
            
      } 
      @media(max-width: 375px){ 
            padding:0.5rem;
            
            
      } 
      
`
const DescriptionText=styled.p`
      margin:0;
      font-size:1rem;
      padding-bottom:1rem;
      text-align:justify;
      @media(max-width: 1000px){ 
            font-size:1rem;
            
      }

      @media(max-width: 760px){ 
            font-size:0.8rem;
            padding-bottom:0.5rem;
      }
      @media(max-width: 550px){ 
            font-size:0.5rem;
            padding-bottom:0.5rem;
      }
`
const Card2 =styled.div`
      position:absolute;
      top:0px;
      right:0px;
      height:60vh;
      /* border:solid ${theme.mainBorder} 5px; */ 
      margin:auto;
      width:40%;
      min width:40%;
      max-width:100%;
      color:#fff;
      border-radius:15px;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      min-width:300px;
      z-index:98;
      
      @media(max-width: 1200px){
            height:100%;
            top:0px;
            left:auto;
            right:auto;
            width:88%; 
            
        
      }
      
      @media(max-width: 375px){
            
        
      }
`

export {Card, Card2, Title, DescriptionText};