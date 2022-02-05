import React,{useState} from 'react';
import styled from 'styled-components';
import SpendManager from '../video/spend_manager_video.mp4';
import ShoppingCart from '../video/shopping_cart_video.mp4';
import CoffeShop from '../video/coffee_shop_video.mp4';
import RockPaperScissors from '../video/rock_paper_scissors_video.mp4';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../Elements/BackgroundVideo';
import {ReactComponent as IconJs} from './../icons/js_icon.svg'
import {ReactComponent as IconCss} from './../icons/css3_icon.svg'
import {ReactComponent as IconHtml} from './../icons/html5_icon.svg'
import {ReactComponent as IconReact} from './../icons/react_icon.svg'
import {ReactComponent as IconFirebase} from './../icons/firebase_icon.svg'
import {ReactComponent as IconGitAlt} from './../icons/git_alt_icon.svg'
import theme from '../Theme';

const ProjectsPortolio = [
      {
            id:1,
            name:"Spend manager App",
            tag:"manager-app",
            description:"App for easy management of expenses on a daily basis, with account creation, and classification by type and date and of each expense, hosted in firebase ",
            src:"https://react-app-lista-gastos-31e5d.web.app/",
            HTML:true,
            CSS:false,
            JS:true,
            React:true, 
            Firebase:true,
            background:"changeShowcase1(true)",
            repository:"https://github.com/EdRafCas/payment_tracking_app_react"
      },
      {
            id:2,
            name:"Shopping cart",
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
      {
            id:3,
            name:"Coffe Shop",
            tag:"coffe-shop",
            description:"Landing page for a coffe shop-like business",
            src:"https://coffee-shop-react.web.app/",
            HTML:true,
            CSS:true,
            JS:true,
            React:true, 
            Firebase:true,
            repository:"https://github.com/EdRafCas/coffee_shop_react"

      },
      {
            id:4,
            name:"Rock paper scissors",
            tag:"rock-paper-scissors",
            description:"Dynamic simulator for rock-paper-scissors game vs CPU",
            src:"https://rock-paper-scissors-5a2c8.web.app/",
            HTML:true,
            CSS:true,
            JS:true,
            React:true, 
            Firebase:true,
            repository:"https://github.com/EdRafCas/App_react_rock_paper_scissors"
      }
      
]

const ProjectsContainer = styled.div`
      position:relative;      
      height:60rem; /* 700px */
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:flex-start;
      padding-left:20rem;
      z-index:1;           
      background:#000;
      
`
const Example=styled.a`
      padding:1rem;
      position:relative;
      font-size:3rem;
      color:${theme.mainText};
      min-width:31rem;
      border: 5px solid ${theme.mainBorder};
      border-radius:1rem;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
     /*  width:50%; */
      width:50%;
      text-decoration:none;
      padding-left:0.5rem;
      
      :hover{
            transform:scale(1.2);
            background:none;
      }
`


const Title=styled.h1`
      font-size:2rem;
      padding-bottom:1rem;
      padding-left:2rem;
`

const Description=styled.p`
      font-size:1.2rem;
      padding-left:2rem;
      padding-bottom:1rem;
`
const IconContainer=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      gap:0.5em;
      height:3rem;
      padding-right:3rem;
      padding-left:2rem;
     /*  border:1px solid white; */
`


const Icons=styled.div`
      /* border:1px solid white; */
      svg{
            height:100%;
            max-height:3rem;
            width:auto;
            min-width:0.5em;
            fill:${theme.mainText};
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
            
            transform:scale(1.5)
      }

      svg{
                  height:100%;
                  max-height:3rem;
                  width:auto;
                  min-width:0.5em;
                  fill:${theme.mainBorder};
            }

`
const ButtonModel=styled(Link)`
      display: flex;
      position:absolute;
      top:5rem;
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
`


const Showcase = () => {
      const [showcase1, changeShowcase1] =useState(false)
      const [showcase2, changeShowcase2] =useState(false)
      const [showcase3, changeShowcase3] =useState(false)
      const [showcase4, changeShowcase4] =useState(false)

      const BackgrounChanger=(tagname)=>{

            if(tagname ==="manager-app"){
                  changeShowcase1(true)
            }if(tagname ==="shopping-app"){
                  changeShowcase2(true)
            }if(tagname==="coffe-shop"){
                  changeShowcase3(true)
            }if(tagname==="rock-paper-scissors"){
                  changeShowcase4(true)
            }
      }
      const BackgrounReverser=(tagname)=>{

            if(tagname ==="manager-app"){
                  changeShowcase1(false)
            }if(tagname ==="shopping-app"){
                  changeShowcase2(false)
            }if(tagname==="coffe-shop"){
                  changeShowcase3(false)
            }if(tagname==="rock-paper-scissors"){
                  changeShowcase4(false)
            }
      }            

      return (
            
            <ProjectsContainer>
                  {showcase1 === true ? 
                  <BackgroundVideo ShopVideo={SpendManager}/>
                  :showcase2 === true ? 
                  <BackgroundVideo ShopVideo={ShoppingCart}/>
                  :showcase3 === true ? 
                  <BackgroundVideo ShopVideo={CoffeShop}/>
                  :showcase4 === true ? 
                  <BackgroundVideo ShopVideo={RockPaperScissors}/>
                  :""}
                  {ProjectsPortolio.map((Projects, index)=>{
                        return(
                              <Example    key={index}        
                                          onMouseEnter={()=>BackgrounChanger(Projects.tag)}
                                          onMouseLeave={()=>BackgrounReverser(Projects.tag)}
                                          href={Projects.src}
                                          target="__blank"
                                          >
                                    <Title>{Projects.name}</Title>
                                    <Description>{Projects.description}</Description>
                                    
                                    <IconContainer>
                                          <IconsGit href={Projects.repository} target="__blank"><IconGitAlt/></IconsGit>
                                          <Icons><IconHtml/></Icons>
                                          <Icons><IconCss/></Icons>
                                          <Icons><IconJs/></Icons>
                                          {Projects.React ?
                                          <Icons><IconReact/></Icons>
                                          :""}
                                          {Projects.Firebase ?
                                          <Icons><IconFirebase/></Icons>
                                          :""}
                                    </IconContainer>
                              </Example>     
                        )
                  })}
                        
                 
                  <ButtonModel to="/">
                        <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                        </svg>
                        <span>Back</span>
                  </ButtonModel>
                  {/* <ArrowContainer>
                        <ReturnButtom to="/">      
                              <IconArrow/>  
                        </ReturnButtom>                 
                  </ArrowContainer> */}
                  
            </ProjectsContainer>
                  
            
       );
}
 
export default Showcase;