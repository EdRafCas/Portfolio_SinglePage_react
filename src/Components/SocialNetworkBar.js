import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconGithub} from './../icons/github_icon.svg'
import {ReactComponent as IconTwitter} from './../icons/twitter_icon.svg'
import {ReactComponent as IconInstagram} from './../icons/instagram_icon.svg'

const SocialNetworks=styled.div`
      position:absolute;
      top:40%;
      left:0rem;
      max-width:3rem;
      min-width:3rem;
      gap:5px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      cursor:pointer;
      text-decoration:none;
      p{
            font-size:4rem;
      }
`
const Icons=styled.a`
      /* border:1px solid white; */
      svg{
            height:100%;
            max-height:5rem;
            width:auto;
            min-width:0.5em;
            color:#ccd6f6;
            
      }
`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                 <Icons href={"https://github.com/EdRafCas"} target="__blank"><IconGithub/></Icons>
                 <Icons href={"https://twitter.com/Eduardrcc"} target="__blank"><IconTwitter/></Icons>
                 <Icons href={"https://www.instagram.com/eduardooraf/"} target="__blank"><IconInstagram/></Icons>
                 
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;