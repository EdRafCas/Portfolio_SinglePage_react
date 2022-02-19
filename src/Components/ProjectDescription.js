import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../Theme';
import BackgroundVideo from '../Elements/BackgroundVideo';
import SpendManager from '../video/spend_manager_video.mp4';


const ProjectsContainer = styled.div`
      height:85vh; /* 700px */
      max-height:85rem;
      min-height:600px;
      width:100%;     
      display:flex;
      flex-direction:column;
      z-index:1;           
      /* border:solid #fff 3px; */
      width:100%;
      min-width:375px;
      background:#000;
      justify-content:center;
      padding:4rem 4rem;
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
      position:relative; 
      height:85vh;
      /* border:solid ${theme.mainBorder} 5px;  */
      width:100%;
      display:grid;
      grid-template-columns: repeat(1, 3fr 2fr);
      justify-items:center;
      margin:auto;
      @media(max-width: 1000px){
            
            grid-template-columns: repeat(1,1fr);
        
      }
`

const Card =styled.div`
      position:absolute;
      display:flex;
      height:60vh;
      width:60%;
      max-width:100%;
      min-width:300px;
      overflow:scroll;
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
const DecriptionText=styled.p`
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



const ButtonBack=styled(Link)`
      z-index:99;
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

const ProjectDescription = () => {
      

      return ( 
            <ProjectsContainer>
                  <ButtonBack to="/Projects/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        
                  </ButtonBack>
                  <ContainerColumns>
                        <Card>
                              <Title>Finance tracking</Title>
                              <DecriptionText>
                              This is a project where i used several libraries simultaneously to achieve what is by far the most complex product i've achieved so far: a functional, Firebase-hosted application.                             
                              </DecriptionText>
                              <DecriptionText>
                               The purpose is to serve as "tracking" app, by first requiring the creation of an account (email and password are required) and login into the app it allows the record, and categorization of "expenses", to set a date, a concept, and an amount to each one of the entries, it mantains a permanent track of expenses during the current month and offers the possibily to edit/erase all values of all entries recorded.    
                               <br/>                    
                               <br/>                    
                               Some of the libraries i've implemented during this project were:
                               <br/>
                               ♥ React-Router(BrowserRouter, Route, Switch, Link)                    
                               <br/>
                               ♥ Webfont                    
                               <br/>
                               ♥ Styled-components                    
                               <br/>
                               ♥ React-Helmet                   
                               <br/>
                               ♥ Date-fns                   
                               <br/>
                               ♥ React-day-picker                   
                              </DecriptionText>
                        </Card>
                        <Card2>
                              <BackgroundVideo  Description ShowVideo={SpendManager}/>
                        </Card2>
                        
                  </ContainerColumns>
                  
            </ProjectsContainer>
       );
}
 
export default ProjectDescription;