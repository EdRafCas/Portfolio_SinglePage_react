import React,{useState} from 'react';
import styled from 'styled-components';
import ShopVideo from '../video/Try.mp4';


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
      width:60%;
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


                  </Example>
                  <Example>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>


                  </Example>
                  <Example>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>


                  </Example>
                  <Example>
                        <Title>this</Title>
                        <Description>This is a project Description</Description>


                  </Example>
                  
            </ProjectsContainer>
       );
}
 
export default Showcase;