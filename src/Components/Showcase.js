import React,{useState} from 'react';
import styled from 'styled-components';
import SocialNetwork from '../video/socialnetwork_video.mp4';
import SpendManager from '../video/spend_manager_video.mp4';
import ShoppingCart from '../video/shopping_cart_video.mp4';
import CoffeShop from '../video/coffee_shop_video.mp4';
import TapAndMatch from '../video/tap_and_match.mp4';
import TodoApp from '../video/todoApp_video.MP4';
import RockPaperScissors from '../video/rock_paper_scissors_video.mp4';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../Elements/BackgroundVideo';
import {ReactComponent as IconJs} from './../icons/js_icon.svg'
import {ReactComponent as IconCss} from './../icons/css3_icon.svg'
import {ReactComponent as IconHtml} from './../icons/html5_icon.svg'
import {ReactComponent as IconReact} from './../icons/react_icon.svg'
import {ReactComponent as IconFirebase} from './../icons/firebase_icon.svg'
import {ReactComponent as IconGitAlt} from './../icons/git_alt_icon.svg'
import {ReactComponent as IconSass} from './../icons/sass_icon.svg'
import {ReactComponent as IconRedux} from './../icons/redux_icon.svg'
import {ReactComponent as IconVite} from './../icons/vitejs_icon.svg'
import theme from '../Theme';
import {Helmet} from "react-helmet";

const ProjectsPortolio = [
      {id:1,
      name:"Socialnetwork app",
      tag:"socialnetwork-app",
      route:"Socialnetwork-app",
      description:"Socialnetwork app, designed to provide a twitter-like experience",
      src:"https://socialnetwork-app-aca27.web.app/",
      HTML:true,
      CSS:true,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/socialnetwork_app"
      },
      {id:2,
      name:"Spend manager App",
      route:"Spend-manager-app",
      tag:"manager-app",
      description:"App for easy tracking and categorization of daily expenses, with account creation, hosted in firebase ",
      src:"https://react-app-lista-gastos-31e5d.web.app/",
      HTML:true,
      CSS:false,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/payment_tracking_app_react"
      },
      {id:3,
      name:"Shopping cart",
      route:"Shopping-cart-app",
      tag:"shopping-app",
      description:"Digital store for a clothing store, with shopping cart and search functionalities",
      src:"https://cartshop-react.web.app/",
      HTML:true,
      CSS:true,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/Store_cart_react"
      },
      {id:4,
      name:"Tap & Match",
      tag:"Tap-and-match",
      route:"Tap-and-match",
      description:` A Duolingo-like game, the user chooses  (and matchs)  spanish/english words to earn points and complete the track`,
      src:"https://tap-and-match-app.web.app/",
      HTML:true,
      CSS:true,
      SASS:true,
      JS:true,
      React:true, 
      Redux:true,
      Firebase:true,
      ViteJs:true,
      repository:"https://github.com/EdRafCas/tap_and_match_app"
      },
      {id:5,
      name:"Todo App",
      tag:"todo-app",
      route:"Todo-app",
      description:` "Todo" app, notepad application with day/night toggle (FrotendMentor Challenge)`,
      src:"https://todo-app-frontendmentor-fd084.web.app/",
      HTML:true,
      CSS:true,
      SASS:true,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/Todo_app"
      },
      {id:6,
      name:"Rock paper scissors",
      tag:"rock-paper-scissors",
      route:"Rock-paper-scissors-app",
      description:"Simulator rock-paper-scissors game vs CPU (FrotendMentor Challenge)",
      src:"https://rock-paper-scissors-5a2c8.web.app/",
      HTML:true,
      CSS:true,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/App_react_rock_paper_scissors"
      },
      {id:7,
      name:"Coffe Shop",
      tag:"coffe-shop",
      route:"Coffe-shop-landing-page",
      description:"Landing page for a coffe shop-like business",
      src:"https://coffee-shop-react.web.app/",
      HTML:true,
      CSS:true,
      JS:true,
      React:true, 
      Firebase:true,
      repository:"https://github.com/EdRafCas/coffee_shop_react"
      }
]

const ProjectsContainer = styled.div`
      position:relative;      
      height:85vh; /* 700px */
      /* max-height:85rem; */
      min-height:600px;
      width:100%;
      display:flex;
      flex-direction:column;
      /* justify-content:space-evenly;
      align-items:flex-start; */
      gap:2rem;
      padding-left:10rem;
      padding-top:1rem;
      z-index:1;           
      background:#000;
      overflow:scroll;
      overflow-x:hidden;
      /* border:solid ${theme.mainBorder} 5px; */
      
      @media(max-width:1024px){
            @media(max-height:600px){
                  padding-left:1rem;
            }
      }
      @media(max-width: 930px){
            padding-left:6rem;
            
       }
      @media(max-width: 760px){ 
            padding-left:5rem;
            
            
      }
      @media(max-width:600px){ 
            padding-left:4rem;
            
            
            
      }
      @media(max-width: 375px){ 
            padding-left:2.5rem;
            height:90vh;
            min-height:35rem;
      } 
      
      
`
const Example=styled.div`
      padding:1rem;
      position:relative;
      min-width:31rem;
      border:solid ${theme.mainBorder} 3px;
      border-radius:1rem;
      display:flex;
      flex-direction:column;
     /*  width:50%; */
      width:40%;
      min-width:670px;
      
      
      @media(min-width: 501px){
            :hover{
                  transform:scale(1.2);
                  background:none;
            }
            
      }
      @media(max-width: 930px){
            min-width:500px;
            font-size:2rem;    
      }
      @media(max-width: 760px){ 
            min-width:20rem;
            font-size:1rem;
            border:solid ${theme.mainBorder} 3px;
            padding:0.5rem;
            width:70%;
      }
      @media(max-width: 490px){ 
            min-width:15rem;   
      }
      @media(max-width: 375px){ 
            padding:0.rem;    
      }
`
const LinkContainer =styled(Link)`
      display:flex;
      flex-direction:column;
      width:100%;
      height:100%;
      text-decoration:none;
      font-size:3rem;
      color:${theme.mainText};
      padding:0;
      margin:0;
      justify-content:space-between;
      

      
      @media(max-width: 930px){
            font-size:2rem;
           
      }
      @media(max-width: 760px){ 
            font-size:1rem;
            padding-left:0.5rem;

      }
      @media(max-width: 490px){ 

            
            
      }
      @media(max-width: 375px){ 
            
            
      }
`
const Title=styled.a`
      width:auto;
      text-decoration: none;
      color:${theme.mainText};
      font-size:1.5rem;
      padding-bottom:0.5rem;
      padding-left:2rem;
      z-index:100;
      font-weight:600;
     
      :hover{
            text-decoration:underline;
      }
      @media(max-width: 930px){ 
            padding-left:1rem;
      }
      @media(max-width: 760px){ 
            font-size:1rem;
            padding-left:0.5rem;

      }
      
`
const Description=styled.p`
      font-size:1rem;
      padding-left:2rem;
      padding-bottom:1rem;
      @media(max-width: 930px){ 
            font-size:1rem;
            padding-left:1rem;
            padding-bottom:1rem;
      }
      @media(max-width: 760px){
            font-size:0.8rem;
            padding-left:0rem;
            padding-bottom:0.5rem; 

      }
`
const IconContainer=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      gap:0.4em;
      height:3rem;
      padding-right:0rem;
      padding-left:0rem;
      z-index:1;
      /* border:1px solid white; */
      @media(max-width: 930px){ 
            gap:0.5em;
            height:2rem;
      }
      @media(max-width: 760px){ 
            gap:0.3em;
            height:1rem;

      }
`
const Icons=styled.div`
      /* border:1px solid white; */
      
      svg{
            height:100%;
            max-height:3rem;
            width:auto;
            min-width:1rem;
            fill:${theme.mainText};
            stroke:${theme.mainText};
            path{
                  fill:${theme.mainText};
            }
            @media(max-width: 375px){ 
                  max-height:1rem;}
      }
`
const IconsGit=styled.a`
      position:absolute;
      left:3rem;
      height:100%;
      max-height:3rem;
      color:${theme.mainBorder};
      transition: 0.3s ease all;
      :hover{
            transform:scale(1.5);
      }
      svg{
                  height:100%;
                  max-height:3rem;
                  width:auto;
                  min-width:0.5em;
                  fill:${theme.mainBorder};
            }
      @media(max-width: 930px){ 
            left:2rem;
            max-height:2rem;
      }
      @media(max-width: 760px){ 
            left:1rem;
            max-height:1rem;
      }

`
const ButtonBack=styled(Link)`
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
const Showcase = () => {
      const [showcase1, changeShowcase1] =useState(false)
      const [showcase2, changeShowcase2] =useState(false)
      const [showcase3, changeShowcase3] =useState(false)
      const [showcase4, changeShowcase4] =useState(false)
      const [showcase5, changeShowcase5] =useState(false)
      const [showcase6, changeShowcase6] =useState(false)
      const [showcase7, changeShowcase7] =useState(false)

      const BackgrounChanger=(tagname)=>{
            if(tagname ==="manager-app"){
                  changeShowcase1(true)
            }if(tagname ==="shopping-app"){
                  changeShowcase2(true)
            }if(tagname ==="coffe-shop"){
                  changeShowcase3(true)
            }if(tagname ==="rock-paper-scissors"){
                  changeShowcase4(true)
            }if(tagname ==="socialnetwork-app"){
                  changeShowcase5(true)
            }if(tagname ==="todo-app"){
                  changeShowcase6(true)
            }if(tagname ==="Tap-and-match"){
                  changeShowcase7(true)
            }
            
      }
      const BackgrounReverser=(tagname)=>{
            if(tagname ==="manager-app"){
                  changeShowcase1(false)
            }if(tagname ==="shopping-app"){
                  changeShowcase2(false)
            }if(tagname ==="coffe-shop"){
                  changeShowcase3(false)
            }if(tagname ==="rock-paper-scissors"){
                  changeShowcase4(false)
            }if(tagname ==="socialnetwork-app"){
                  changeShowcase5(false)
            }if(tagname ==="todo-app"){
                  changeShowcase6(false)
            }if(tagname ==="Tap-and-match"){
                  changeShowcase7(false)
            }
      }            

      return (
      <>      
            <Helmet >
            
            <title>Projects</title>
     
            </Helmet>
            <ProjectsContainer>
                  {showcase1 === true ? 
                  <BackgroundVideo ShowVideo={SpendManager}/>
                  :showcase2 === true ? 
                  <BackgroundVideo ShowVideo={ShoppingCart}/>
                  :showcase3 === true ? 
                  <BackgroundVideo ShowVideo={CoffeShop}/>
                  :showcase4 === true ? 
                  <BackgroundVideo ShowVideo={RockPaperScissors}/>
                  :showcase5 === true ? 
                  <BackgroundVideo ShowVideo={SocialNetwork}/>
                  :showcase6 === true ? 
                  <BackgroundVideo ShowVideo={TodoApp}/>
                  :showcase7 === true ? 
                  <BackgroundVideo ShowVideo={TapAndMatch}/>
                  :""}
                  {ProjectsPortolio.map((Projects, index)=>{
                        return(
                              <Example    key={index}        
                                          onMouseEnter={()=>BackgrounChanger(Projects.tag)}
                                          onMouseLeave={()=>BackgrounReverser(Projects.tag)}>
                                    <Title 
                                          href={Projects.src}
                                          target="__blank">{Projects.name}
                                    </Title>
                                    <LinkContainer to={`/Projects/${Projects.route}`}>
                                          <Description>{Projects.description}</Description>
                                          <IconContainer>
                                                <IconsGit onClick={(e)=>{e.stopPropagation();}} href={Projects.repository} target="__blank"><IconGitAlt/></IconsGit>
                                                <Icons><IconHtml/></Icons>
                                                <Icons><IconCss/></Icons>
                                                {Projects.SASS ?
                                                <Icons><IconSass/></Icons>
                                                :""}
                                                {Projects.Redux ?
                                                <Icons><IconRedux/></Icons>
                                                :""}
                                                <Icons><IconJs/></Icons>
                                                {Projects.React ?
                                                <Icons><IconReact/></Icons>
                                                :""}
                                                {Projects.Firebase ?
                                                <Icons><IconFirebase/></Icons>
                                                :""}
                                                {Projects.ViteJs ?
                                                <Icons><IconVite/></Icons>
                                                :""}
                                          </IconContainer>
                                    </LinkContainer>                                 
                                    
                              </Example>     
                        )
                  })}
                        
                 
                  <ButtonBack to="/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        
                  </ButtonBack>
                  
            </ProjectsContainer>
                  
      </> 
      );
}
 
export default Showcase;