import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconGithub} from './../icons/github_icon.svg'
import {ReactComponent as IconTwitter} from './../icons/twitter_icon.svg'
import {ReactComponent as IconInstagram} from './../icons/instagram_icon.svg'
import {ReactComponent as IconLinkedin} from './../icons/linkdin_icon.svg'


const SocialNetworks=styled.div`
      position:absolute;
      top:20vh;
      left:0rem;
      max-width:10rem;
      gap:5px;
      padding-left:1rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      cursor:pointer;
      text-decoration:none;
      @media(max-width: 760px){ 
            padding-left:0rem;
           
      } 
      @media(max-width: 375px){ 
            
      
      } 
`
const Icons=styled.a`
      /* border:1px solid white; */
      svg{
            max-width:5rem;
            width:50%;
            min-width:0.5rem;
            color:#ccd6f6;
            transition: 0.3s ease all;
            :hover{
                  color:${(props) => props.twitter ? "#1da1f2":
                                     props.instagram ? "#fd1d1d":
                                     props.linkedin ? "#0077b5":
                                     props.github ? "#333": "#ccd6f6"};
                  transform:scale(1.1)
            }
            
      }
      @media(max-width: 760px){ 
            svg{
                  height:100%;
                  max-height:3rem;
            }
            
           
      } 
      @media(max-width: 375px){ 
            svg{
                  height:100%;
                  
            }
              
      
      } 
      

`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                 <Icons href={"https://github.com/EdRafCas"} aria-label="Github" target="__blank" github><IconGithub/></Icons>
                 <Icons href={"https://twitter.com/Eduardrcc"} aria-label="Twitter"  target="__blank" twitter><IconTwitter/></Icons>
                 <Icons href={"https://www.instagram.com/eduardooraf/"} aria-label="Instagram"  target="__blank" instagram><IconInstagram/></Icons>
                 <Icons href={"https://www.linkedin.com/in/eduardo-castillo-canache-699782143/"} aria-label="Linkdn"  target="__blank" linkedin><IconLinkedin/></Icons>
                 
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;