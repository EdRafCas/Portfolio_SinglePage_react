import React,{useState} from 'react';
import styled from 'styled-components';
import ShopVideo from '../video/Try.mp4';
import {ReactComponent as IconJs} from './../icons/js_icon.svg'
import {ReactComponent as IconCss} from './../icons/css3_icon.svg'
import {ReactComponent as IconHtml} from './../icons/html5_icon.svg'
import {ReactComponent as IconReact} from './../icons/react_icon.svg'


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
const Example=styled.div`
      position:relative;
      font-size:3rem;
      color:#fff;
      height:10rem;
      border: 3px solid #fff;
      display:flex;
      flex-direction:column;
      width:50%;
      
      :hover{
            transform:scale(1.2);
            background:none;
      }
`
const ShowProject =styled.div`
      position:absolute;
      content:"";
      top: 0px;
      right:0px;
      bottom:0px;
      left:0px;
      opacity:0.5;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 176.25rem; /* 2820px */
`
const VideoBackground=styled.video`
      position:absolute;
      width:100%;
      left:50%;
      top:50%;
      height:100%;
      transform:translate(-50%,-50%);
      z-index:-1;
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
      gap:1rem;
      height:50%;
      padding-right:3rem;
      
`
const Icons=styled.div`
      svg{
            height:100%;
            width:auto;
            
      }
      
      
`

const Showcase = () => {
      const [showcase1, changeShowcase1] =useState(false)

      return ( 
            <ProjectsContainer>
                  {showcase1 === true ? 
                  <ShowProject>
                        <VideoBackground autoPlay loop muted>
                              <source src={ShopVideo} type="video/mp4"/>
                        </VideoBackground>
                  </ShowProject>
                  :""}

                  <Example          onMouseEnter={()=>changeShowcase1(true)}
                                    onMouseLeave={()=>changeShowcase1(false)}>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>
                        <IconContainer>
                              <Icons><IconHtml/></Icons>
                              <Icons><IconCss/></Icons>
                              <Icons><IconJs/></Icons>
                              <Icons><IconReact/></Icons>
                              
                        </IconContainer>
                  </Example>
                  <Example          onMouseEnter={()=>changeShowcase1(true)}
                                    onMouseLeave={()=>changeShowcase1(false)}>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>
                        <IconContainer>
                              <Icons><IconHtml/></Icons>
                              <Icons><IconCss/></Icons>
                              <Icons><IconJs/></Icons>
                              <Icons><IconReact/></Icons>
                              
                        </IconContainer>
                  </Example>
                  <Example          onMouseEnter={()=>changeShowcase1(true)}
                                    onMouseLeave={()=>changeShowcase1(false)}>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>
                        <IconContainer>
                              <Icons><IconHtml/></Icons>
                              <Icons><IconCss/></Icons>
                              <Icons><IconJs/></Icons>
                              <Icons><IconReact/></Icons>
                              
                        </IconContainer>
                  </Example>
                 
                  
            </ProjectsContainer>
       );
}
 
export default Showcase;