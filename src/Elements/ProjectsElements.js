import styled from 'styled-components';
import theme from '../Theme';


const Card =styled.div`
      display:flex;
      width:85%;
      height:100%;
      max-width:100%;
      min-width:300px;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:2rem 2rem 1rem;
      /* border:solid ${theme.mainBorder} 5px;  */
      margin:auto;
      color:#fff;
      border-radius:15px;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      z-index:99;
      @media(max-width: 1200px){
            height:50%;
            
            left:auto;
            right:auto;
            
            justify-content:center;
            align-self:center;   
      }
      @media(max-width: 760px){ 
            padding:0.5rem;
             height:auto;               
      }
      
`


const Card2 =styled.div`
      position:relative;
      /* border:solid ${theme.mainBorder} 5px;  */
      height:50%;
      width:100%;
      min width:40%;
      max-width:100%;
      color:#fff;
      border-radius:15px;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      
      z-index:98;
      @media(max-width: 1200px){
            height:40%;
           
      }
      @media(max-width: 375px){     
      }
      
`

const Title=styled.a`
      text-decoration: none;
      color:${theme.mainText};
      font-size:1.5rem;
      padding:0.5rem;
      padding-bottom:1rem;
      :hover{
            text-decoration:underline;
      }
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
      a{
            text-decoration:none;
            color:${theme.mainText};
            :hover{
                  text-decoration:underline;
            }
      }
      @media(max-width: 1000px){ 
            font-size:0.9rem;
            
      }

      @media(max-width: 760px){ 
            font-size:0.8rem;
            padding-bottom:0.5rem;
      }
      @media(max-width: 550px){ 
            font-size:0.7rem;
            padding-bottom:0.5rem;
      }
`


export {Card, Card2, Title, DescriptionText};