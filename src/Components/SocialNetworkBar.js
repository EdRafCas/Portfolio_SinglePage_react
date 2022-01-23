import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconGithub} from './../icons/github_icon.svg'
import {ReactComponent as IconTwitter} from './../icons/twitter_icon.svg'
import {ReactComponent as IconInstagram} from './../icons/instagram_icon.svg'

const SocialNetworks=styled.div`
      position:absolute;
      top:40%;
      left:0rem;
      max-width:4rem;
      width:4rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      z-index:1;
      color:#ccd6f6;
      p{
            font-size:4rem;
            color:#000
      }
`
const Icons=styled.div`
      /* border:1px solid white; */
      svg{
            height:100%;
            max-height:5rem;
            width:auto;
            min-width:0.5em;
            fill:#ccd6f6;
      }
`

const SocialNetworkBar = () => {
      return ( 
            <SocialNetworks>
                 <Icons><IconGithub/></Icons>
                 <Icons><IconTwitter/></Icons>
                 <Icons><IconInstagram/></Icons>
                 
            </SocialNetworks>
       );
}
 
export default SocialNetworkBar;