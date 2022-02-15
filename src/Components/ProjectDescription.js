import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../Theme';


const ContactContainer = styled.div`
      position:relative;      
      height:85vh; /* 700px */
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:100%;
      background:#000;
      justify-content:center;
      padding:5rem 5rem;
      min-width:375px;
      @media(max-width: 1140px){ 
            
       }
      @media(max-width: 760px){ 
             
            padding:0rem 2.5rem;
           
      } 
      @media(max-width: 375px){ 
            /* height:35rem; */
            height:90vh;
            padding:0rem 2.5rem;

      } 
`
const ContainerColumns =styled.div`
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 1fr 1fr);
      justify-items:center;
      margin:auto;
      @media(max-width: 1000px){
            grid-template-columns: repeat(1,1fr);
        
      }
`

const Card =styled.div`
      border:/* solid ${theme.mainBorder} 5px; */ none;
      margin:auto;
      height:auto;
      width:auto;
      color:#fff;
      border-radius:15px;
      max-width:60%;
      cursor:auto;
      color:${theme.mainText};
      text-align:center;
      
      @media(max-width: 760px){
            max-width:100%;
        
      }
      @media(max-width: 375px){
            
        
      }
`

const Description=styled.p`
      
      font-size:1.5rem;
      padding:2rem;
      @media(max-width: 1000px){ 
            font-size:1rem;
            padding:0.5rem;
      }
      @media(max-width: 375px){ 
            font-size:0.8rem;
            padding-bottom:0.5rem;
            text-align:left;
            width:80%
      }
`

const ButtonBack=styled(Link)`
      display: flex;
      position:absolute;
      top:5%;
      right:5%;
      height: 5rem;
      width: 8rem;
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
            height: 4rem;
            width: 5rem;
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
      height:3rem;
      width: 4rem;
      font-size: 1rem;
      svg{
            margin-right: 0px;
            margin-left: 0px;
            font-size: 0.5rem;

      }
      
      
}
`

const ProjectDescription = () => {
      

      return ( 
            <ContactContainer>
                  <ButtonBack to="/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        <span>Back</span>
                  </ButtonBack>
                  <ContainerColumns>
                        <Card>
                              <Description>
                                    Leave me your message/feedback and we'll stay in touch!
                              </Description>
                        </Card>
                        
                  </ContainerColumns>
                  
            </ContactContainer>
       );
}
 
export default ProjectDescription;