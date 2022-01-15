import React,{useState} from 'react';
import styled from 'styled-components';
import ShopVideo from '../video/Try.mp4';
import ShoppingCart from '../video/shopping_cart_video.mp4';
import CoffeShop from '../video/coffee_shop_video.mp4';
import RockPaperScissors from '../video/rock_paper_scissors_video.mp4';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../Elements/BackgroundVideo';
import {ReactComponent as IconJs} from './../icons/js_icon.svg'
import {ReactComponent as IconCss} from './../icons/css3_icon.svg'
import {ReactComponent as IconHtml} from './../icons/html5_icon.svg'
import {ReactComponent as IconReact} from './../icons/react_icon.svg'
import {ReactComponent as IconArrow} from './../icons/arrow_icon.svg'
import {ReactComponent as IconFirebase} from './../icons/firebase_icon.svg'

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
            background:"changeShowcase1(true)"
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
            Firebase:true

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
            Firebase:true

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
            Firebase:true
      }
      
]

const ReturnButtom=styled(Link)`
      border:1px solid white;
      background:#fff;
      height: auto; 
      svg{
            height:100%;
            width:auto;
            
      }
      
`
const ArrowContainer=styled.div`
      position:absolute;
      width:8em;
      height:5em;
      top:5em;
      right:5em;
      padding:1em;
      border-radius: 0.625rem;
      background:white;    
`

const ProjectsContainer = styled.div`
      position:relative;      
      height:60rem; /* 700px */
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:flex-start;
      padding-left:12rem;
      z-index:1;           
      background:#000;
`
const Example=styled.a`
      position:relative;
      font-size:3rem;
      color:#fff;
      min-width:22rem;
      border: 3px solid #fff;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
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
`

const Description=styled.p`
      font-size:1.5rem;
`
const IconContainer=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      gap:0.2em;
      height:100%
      padding-right:1rem;
     /*  border:1px solid white; */
      
`
const Icons=styled.div`
      /* border:1px solid white; */
      svg{
            height:100%;
            max-height:4rem;
            width:auto;
            min-width:0.5em;
            fill:white;
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
                  <BackgroundVideo ShopVideo={ShopVideo}/>
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
                        
                 
                  
                  <ArrowContainer>
                        <ReturnButtom to="/">      
                              <IconArrow/>  
                        </ReturnButtom>                 
                  </ArrowContainer>
                  
            </ProjectsContainer>
                  
            
       );
}
 
export default Showcase;