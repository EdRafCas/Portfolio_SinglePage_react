import React from 'react';
import styled from 'styled-components';
import ShopVideo from '../video/Try.mp4';

const ProjectsContainer = styled.div`
      height:60rem; /* 700px */
      
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:flex-start;
      padding-left:12rem;
      z-index:1;           
      background:#000;
      
      
      div{
            font-size:3rem;
            color:#fff;
            height:5rempx;
            border: 3px solid #fff
            }
`


const Showcase = () => {
      return ( 
            <ProjectsContainer>
                  <div>this</div>
                  <div>is </div>
                  <div>a test</div>
                  <div>a test</div>
            </ProjectsContainer>
       );
}
 
export default Showcase;